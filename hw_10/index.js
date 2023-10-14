const express = require('express')
const multer = require('./utils/multer')
const path = require('path')

const app = express()

app.put("/contact/upload", multer().single('photo'), (req, res) => {
    const file = req.file.path

    console.log(file)
    if(!file){
        return res.status(400).json({
            status: false,
            message: 'No file selected'
        })
    }
    res.send(file)
})

app.use("/upload", express.static(path.join(__dirname, "public/uploads")))

app.listen(3000, () => console.log('server is running'))