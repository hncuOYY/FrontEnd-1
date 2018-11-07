const express = require('express')
const path = require('path')

const app = express()

app.get('/index.html', (req, res) => {
	res.sendFile(path.join(__dirname, '../views/newIndex.html'))
})

app.get('/assets/css/index.css', (req, res) => {
	res.sendFile(path.join(__dirname, '../assets/css/index.css'))
	console.log(path.join(__dirname, '../assets/css/index.css'));
})

app.get('/assets/js/index.js', (req, res) => {
	res.sendFile(path.join(__dirname, '../assets/js/index.js'))
})

app.get('/assets/images/female.jpg', (req, res) => {
	res.sendFile(path.join(__dirname, '../assets/images/female.jpg'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
