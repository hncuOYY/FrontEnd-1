const express = require('express')
const path = require('path')

// 创建express服务器
const app = express()

const person = {
	name: 'oyy',
	age: '23',
	hobby: ['reading','game']
}

// 配置模版引擎
app.set('view engine', 'ejs')

// 配置模版页面的存放路径
app.set('views', './views')

app.get('/', (req, res) => {
	res.render('index', person)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

