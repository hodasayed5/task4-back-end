const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const path = require("path")
const x = path.join(__dirname, "../puplic")
app.use(express.static(x))

app.set('view engine', 'hbs');
const viewsDirectory = path.join(__dirname, "../templit1/views")
app.set("views", viewsDirectory)

var hbs = require('hbs')
const partialspath = path.join(__dirname,"../templit1/part1")
hbs.registerPartials(partialspath)

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page",
        desc: " Welcome in my website"
    })
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title1: "Check Weather Page",
        country: "Egypt",
        latitude: " 26.4941838299718",
        longtiude : "29.871903452398",
        crrentWeather :"Sunny",
        temp:"30.7",
 
    })
})

app.listen(port, () => {
    console.log(`done ${port}`)
})