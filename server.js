const express 		= require('express');
const mongoose 		= require('mongoose');
const bodyParser 	= require('body-parser');
// let Schema 			= mongoose.Schema;

const app 			= express();

const port = 3000;

mongoose.connect('mongodb://localhost/api');

app.use(bodyParser()); 

// let QuoteSchema = new Schema({
// 	phrase: String,
// });

// let Quote = mongoose.model('Quote', QuoteSchema);

// let quotesArray = [
// 	{phrase: "Kindness is free. Sprinkle it everywhere."},
// 	{phrase: "Dreams and dedication are a powerful combination."},
// 	{phrase: "Whatever you're thinking, think bigger."}
// ];


app.listen(port, () =>{
	console.log('Server is listening on port ' +port);
});