const express = require('express');
const app = express();

//we must now require our fruit model file since we moved it to another file
const fruit = require('./models/fruits.js')






app.get('/', (req,res) => {
	res.send('connection established')
})


app.get('/fruit', (req,res) => {
	res.render('show.ejs', {
		fruit: fruit[req.params.id]
	});
})


app.get('/fruit/:id', (req,res) => {

	//WE'RE GONNA MAKE THIS ALSO SEND AN OBJECT WITH OUR DATA
	//THE SECOND PARAMETER MUST BE AN OBJECT
	//we're going to use that object to include data in our template
	//res.render() 'renders' a template / view, whereas res.send just sends text
	res.render('showfruit.ejs', {
		fruit: fruit[req.params.id]
	})
	});






	// const fruitId = req.params.id;
	// // console.log(fruitId); 
	// let responseString = 'fruit #' + fruitId + ' is a ' + fruit[fruitId].name + ' and is ';
	// if (!fruit[fruitId].ripe) {
	// 	responseString += 'not ';
	// }
	// responseString += 'ready to eat';
	// res.send(''+responseString);
// })







app.listen(3000, () => {
	console.log('listening on port 3000');
})