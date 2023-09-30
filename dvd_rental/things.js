var express = require ('express')
var router = express.Router()

router.get('/:name', function(req,res){
    res.send('Hello GET!!!' + req.params.name)
})

router.post('/', function(req,res){
    res.send('Hello POST!!!')
})

router.put('/put', function(req,res){
    res.send('Hello PUT!!!')
})

// export this router to use in our index.js
module.exports = router 