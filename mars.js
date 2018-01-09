const express = require('express');
const app = express();

// we must now require our fruit model because we moved it to another file. 

const fruits = require('./models/fruits.js') 
const mission = require('./server.js')



app.get('/fruits/',(req,res)=>{

	res.render('showAll.ejs', {
		fruit: fruits
	})
});


app.get('/fruits/:id',(req,res)=>{

		res.render('showOne.ejs', {
			fruit: fruits[req.params.id]
		});

});


app.get('/mm/',(req,res)=>{

	res.render('allMissions.ejs', {
		mission: mission
	})
});


app.get('/mm/:id',(req,res)=>{

		res.render('oneMission.ejs', {
			mission: mission[req.params.id]
		});

});


app.listen (3000, ()=>{
	console.log("listening on 3000");
});

