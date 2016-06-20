// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// quote data
var quotes = [
  {
    quote: "",
    source: "",
    citation: "",
    year: ""
  }
];

// returns a random quote
function getRandomQuote() {
  // select random quote from quotes array

  // return the random quote
}

function getRandomColor() {
    // returns random color from array
}

// prints quote to page when user clicks "Show Another Quote"
function printQuote() {
  // saves random quote in variable
  var usedQuote = getRandomQuote();
  var newColor = getRandomColor();
}
