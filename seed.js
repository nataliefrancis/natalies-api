let db = require('./model');

let quotesArray = [
	{phrase: "Kindness is free. Sprinkle it everywhere."},
	{phrase: "Dreams and dedication are a powerful combination."},
	{phrase: "Whatever you're thinking, think bigger."}
];

db.Quotes.create(quotesArray, function(err, quotes){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new quotes!");
  process.exit();
});