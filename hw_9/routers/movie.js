const { authentication } = require("../middleware/auth");

const router = require("express").Router();
const pool = require('../database.js')

router.get("/", (req, res) => {
  pool.query(`
    SELECT 
    * 
    FROM movies
    LIMIT 10 OFFSET 20;`, 
    (err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});


router.post("/", (req, res) => {
  pool.query(`
    INSERT INTO 
    movies (id, title, genres, year)
    VALUES (101, 'Spiderman', 'Action', 2007),
           (102, 'Batman', 'Action', 2010);`, 
    (err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});


router.get("/:id", (req, res) => {
  const { id } = req.params;
    pool.query(`
    SELECT 
    * 
    FROM movies 
    WHERE id = $1;`, 
    [id],(err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});


router.put("/:id", authentication, (req, res) => {
  const { id } = req.params;
    pool.query(`
    UPDATE 
    movies 
    SET title='Mr.Bean', genres='Comedy', year=2010 WHERE id = $1;`, 
    [id],(err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});


router.delete("/:id", authentication, (req, res) => {
  const { id } = req.params;
    pool.query(`
    DELETE 
    FROM 
    movies WHERE id = $1;`, 
    [id],(err, result) =>{
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});

module.exports = router;
