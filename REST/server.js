const express = require('express')

const app = express()

//  We must now require our fruit model file since we moved i to another file/
const fruits = require("./models/fruits.js")
//home route
app.get('/', (req, res) => {
    res.send("gerro")
})

//fruits route
app.get('/fruits', (req, res) => {
    res.render("index.ejs")
})

//show route for specific fruit
app.get("/fruits/:id", (req, res) => {

    //We're making this also send an object with out data
    //the second paramerter must be an object
    //we're using that to include data in our template
    //res.render() "renders" a template/view where res.send () just sends text
    console.log(fruits[req.params.id])
    res.render("show.ejs", {
        fruit: fruits[req.params.id]
    });


    //    //    console.log(req.params)
    //    let fruitId = req.params.id;
    //    //    console.log(fruitId);
    //    const fruit = fruits[fruitId];
    //        console.log(fruit);
    //    let response = "Fruit #" + fruitId + " is " + fruit.name + " and is ";
    //    if (!fruit.readyToEat) response = response + " not ";
    //    response += "ready to eat"
    //    res.send(response)


})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
