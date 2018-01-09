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
	res.render('index.ejs', {
		fruit: fruits
	})
})

app.get('/fruits/:id', (req, res) => {
	// send an OBJECT with our data
	// the second parameter must be an OBJECT
	// use that object to include data in our template
	// res.render renders a template/view where res.send() just sends text
	res.render('show.ejs', {
		fruit: fruits[req.params.id]
	});
});



app.listen(3000, () => {
	console.log('Server is listening to port 3000');
})