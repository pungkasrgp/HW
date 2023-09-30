var express = require('express')
var app = express()
var things = require('./things.js')
var pool = require('./queries.js')


app.use('/things', things)

// menampilkan list film
app.get('/film', (req, res) => {
    pool.query(`
    SELECT 
    * 
    FROM film
    ORDER BY film_id ASC ;`, 
    (err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
})

// menampilkan list film berdasarkan id
app.get('/film/:film_id', (req, res) => {
    const { film_id } = req.params;
    pool.query(`
    SELECT 
    * 
    FROM film 
    WHERE film_id = $1;`, 
    [film_id],(err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
})

// menampilkan data list category
app.get('/category', (req, res) => {
    pool.query(`
    SELECT 
    * 
    FROM category;`, 
    (err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
})

// menampilkan data list ﬁlm berdasarkan category
app.get('/film-category/:category_name', (req, res) => {
    const { category_name } = req.params;
    pool.query(`
    SELECT film.* FROM film 
    INNER JOIN film_category ON film.film_id = film_category.film_id 
    INNER JOIN category ON film_category.category_id = category.category_id 
    WHERE category.name = $1;`,   
    [category_name],(err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
})

pool.connect((err, res) => {
    console.log(err)
    console.log('connected')
})

app.listen(3000)