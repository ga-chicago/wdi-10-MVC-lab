const express = require('express');
const app = express();

// we must now require our fruit model because we moved it to another file. 

const fruits = require('./models/fruits.js') 



app.get('/fruits/',(req,res)=>{

	res.render('show.ejs', {
		fruit: fruits
	})
});


app.get('/fruits/:id',(req,res)=>{


		res.render('show.ejs', {
			fruit: fruits[req.params.id]
		});


});


	// const fruitId = req.params.id;
	// const fruit = fruits[fruitId]
	// const rotten = 
	// console.log(fruitId)
	// let responseString = fruit.name;

	// if (fruit.readyToEat){
	// 	responseString = fruit.name + " is rotten!"}

	// res.send(responseString)

// });

app.listen (3000, ()=>{
	console.log("listening on 3000");
});

