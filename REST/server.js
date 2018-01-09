const express = require("express");
const app = express();
// we must now require our fruit model since data has been moved out of this file

const fruits = require('./models/fruits.js')


// This represents what will later be a database


app.get("/", (req, res) => {
	res.send("Hello world");
})


app.get("/fruits", (req, res) => {
	res.render("index.ejs", {
		fruit: fruits
	})
	// console.log("In index")
	// res.render("show.ejs")

})





app.get("/fruits/:index", (req, res) => {
	
	// We are going to make this send an object with our data
	// The 2nd parameter must be an object
	// We are going to use that object to show data in our template
	// res.render() renders an template/view where res.send() only just sends text

	res.render("show.ejs", {
		fruit: fruits[req.params.index]
	});



	// const fruitIndex = req.params.index;
	
	// let responseString = "Fruit # "+ fruitIndex+ " is "+ fruits[fruitIndex].name+ " and is ";
	// if(!fruits[fruitIndex].readyToEat) responseString = responseString + "not ";
	// responseString += "ready to eat"

	// res.send(responseString);
})




app.listen(3000, () => {
	console.log("Listening on port 3000");
})
