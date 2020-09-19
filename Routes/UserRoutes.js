const express = require('express')
const router = express.Router()
const userModel = require('../Models/UserModel')

router.get('/', ()=>{
	console.log('Get Request')
})

module.exports = router
