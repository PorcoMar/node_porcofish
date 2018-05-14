const express = require('express');
let app = express();
app.set('title', '--api.js--')
app.set('trust proxy', (ip) => {
	if (ip === '127.0.0.1' || ip === 'localhost') {
		console.log('ip===='+ip)
	} else{
		console.log('ip===='+ ip)
	}
})

const api = (req, res, next) => {
	console.log('title = '+ app.get('title'))

}







module.exports = {
	api: api
}