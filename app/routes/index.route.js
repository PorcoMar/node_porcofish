/*
* @Author: Porco_Mar
* @Date:   2018-05-12 14:44:24
 * @Last Modified by: PorcoMar
 * @Last Modified time: 2018-05-15 13:22:01
*/
const express = require('express');
const router = express.Router();
const api = require('../workJS/api.js').api
const fs = require('fs')


router.get('/index/:id', function (req, res, next) {
	console.log('-------------------------------->/index')
	api(req, res, next);
	console.log('params = ', req.params) //浏览器端写成/index/id=6236 不是index?id=6236
	console.log('param : ', req.param('name')) //?name=porco&&age=25 => porco
	console.log('query : ', req.query) //?name=porco&&age=25 => { name: 'porco', age: '25' }
	console.log('originalUrl = '+ req.originalUrl); // '/index/new'
  console.log('baseUrl = '+ req.baseUrl); // '/index'
	console.log('path = '+ req.path); // '/new'
	res.send(req.path);
});

router.get('/mockList', (req, res) => {
	// res.send('this is seond')
	console.log('---------------------------------->/second')
	let list = require('../workJS/mock.js').mock
		list().then(resA => {
			console.log(resA.list)
			fs.writeFileSync('./config/file.json', JSON.stringify([{"list": resA.list}]))
			res.render('second', {name:'second.ejs', list: resA.list})
			// content = ejs.render('../views/second.html', resA.list);
			// fs.writeFileSync('public/second.html', content);
		})
})
router.get('/ES', (req, res) => {
	console.log('---------------------------------->/es6')
	const ES = require('../workJS/es6.js')
	ES();
	res.send(req.path)
})

module.exports = router

