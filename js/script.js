// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// quote data
var quotes = [
  {
    quote: "Test quote",
    source: "testing only",
    citation: "None",
    year: "2016"
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
  //var usedQuote = getRandomQuote();
  var usedQuote = quotes[0];
  var newColor = getRandomColor();
  var newHTML = '<p class="quote">' + usedQuote.quote +'</p> <p class="source">' + usedQuote.source + '<span class="citation">' + usedQuote.citation + '</span> <span class="year">' + usedQuote.year + '</span></p>'
  document.getElementById('quote-box').innerHTML = newHTML;
}
