const express = require('express')
const router = express.Router()
const Keep = require('../Models/KeepModel')

router.get('/', async(req,res)=>{
	try{
		const data = await Keep.find()
		res.json(data)
	}
	catch(err){
		res.send('Error:' + err)
	}
})

router.post('/', async(req,res) =>{
	const keepData = new Keep({
		title: req.body.Title,
		text: req.body.Text
	})

	try{
		const inp = await keepData.save()
		res.json(inp)
	}
	catch(err){
		res.send('error' + err)
	}
})

module.exports = router
