const express = require('express');
const path = require('path');

const app = express();

// 使用express.static托管views目录
app.use(express.static(path.join(__dirname, '../views')))
app.use(express.static(path.join(__dirname, '../assets')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
