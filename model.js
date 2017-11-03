const mongoose 		= require('mongoose');
let Schema 			= mongoose.Schema;

let QuoteSchema = new Schema({
	phrase: String,
});

let Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;