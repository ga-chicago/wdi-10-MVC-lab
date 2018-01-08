const express = require('express');

const app = express();

// lesson
// this represents what will later be a database
// we must now require our fruit model since we moved it to another file
const fruits = require('./models/fruits.js');



app.get('/', (req, res) => {
	res.send('Hello world');
});

app.get('/fruits', (req, res) => {
	res.send(fruits);
});

app.get('/fruits/:id', (req, res) => {
	// send an OBJECT with our data
	// the second parameter must be an OBJECT
	// use that object to include data in our template
	// res.render renders a template/view where res.send() just sends text
	res.render('show.ejs', {
		fruit: fruits[req.params.id]
	});

	// const fruitId = req.params.id;
	// // console.log(req.params)
	// const fruit = fruits[fruitId];
	// let responseString = 'Fruit #' + fruitId + ' is a ' + fruit.name + ' and is ';
	// if(!fruit.readyToEat) responseString = responseString + ' not ';
	// responseString += 'ready to eat.';
	// res.send(responseString);
});



app.listen(3000, () => {
	console.log('Server is listening to port 3000');
})