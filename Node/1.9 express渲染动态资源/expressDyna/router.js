// 后端路由: 前端请求的URL地址必然会对应一个后端的处理函数
// 后端的路由, 主要是用来分发请求的
const express = require('express')

const router = express.Router()

const person = {
	name: 'oyy',
	age: 23,
	hobby: ['reading', 'game']
}

const dog = {
	name: 'xiaobai',
	age: 2,
	hobby: ['ball', 'bone']
}

router.get('/', (req, res) => {
	res.render('index', person)
})

router.get('/dog', (req, res) => {
	res.render('dog', dog)
})

module.exports = router