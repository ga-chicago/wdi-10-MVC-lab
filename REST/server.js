const express = require('express');

const app = express();

// lesson
// this represents what will later be a database
// we must now require our fruit model since we moved it to another file
const fruits = require('./models/fruits.js');



app.get('/', (req, res) => {
	res.send('Hello world');
});

app.get('/fruits/apple', (req, res) => {
	res.render('apple.ejs', {
		apple: fruits[0]
	})
})

app.get('/fruits/banana', (req, res) => {
	res.render('banana.ejs', {
		banana: fruits[1]
	})
})

app.get('/fruits/pear', (req, res) => {
	res.render('pear.ejs', {
		pear: fruits[2]
	})
})

app.get('/fruits/guava', (req, res) => {
	res.render('guava.ejs', {
		guava: fruits[3]
	})
})

app.get('/fruits/pineapple', (req, res) => {
	res.render('pineapple.ejs', {
		pineapple: fruits[4]
	})
})

app.get('/fruits', (req, res) => {
	// send an OBJECT with our data
	// the second parameter must be an OBJECT
	// use that object to include data in our template
	// res.render renders a template/view where res.send() just sends text
	res.render('show.ejs', {
		fruit: fruits
	});
});



app.listen(3000, () => {
	console.log('Server is listening to port 3000');
})