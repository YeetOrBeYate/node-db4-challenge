const express = require('express');
const RecipeRouter = require("./Recipe/Recipe-Router");
const app = express();

app.use(express.json());

app.use("/recipes", RecipeRouter)


const port = 4000;

app.listen(port, ()=>{console.log('listing on port 40000')})