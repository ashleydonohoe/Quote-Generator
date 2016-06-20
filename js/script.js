// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// quote data
var quotes = [
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    source: "H. Jackson Brown, Jr.",
    citation: "BrainyQuote.com",
    year: ""
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination",
    source: "Jimmy Dean",
    citation: "BrainyQuote.com",
    year: ""
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller",
    citation: "BrainyQuote.com",
    year: ""
  },
  {
    quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    source: "Vince Lombardi",
    citation: "BrainyQuote.com",
    year: ""
  },
  {
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    source: "Francis of Assisi",
    citation: "BrainyQuote.com",
    year: ""
  },
  {
    quote: "We know what we are, but know not what we may be.",
    source: "William Shakespeare",
    citation: "BrainyQuote.com",
    year: ""
  },
  {
    quote: "If opportunity doesn't knock, build a door.",
    source: "Milton Berie",
    citation: "BrainyQuote.com",
    year: ""
  }
];

// returns a random quote
function getRandomQuote() {
  // select random quote from quotes array
  var randomIndex = Math.floor(Math.random() * quotes.length);
  // return the random quote
  return quotes[randomIndex];
}

function getRandomColor() {
  var colors = ["blue", "red", "pink", "yellow", "purple", "orange", "black", "gray", "fuchsia", "olive", "silver", "teal"];
  var randomColor = Math.floor(Math.random() * colors.length);
    // returns random color from array
  return colors[randomColor];
}

// prints quote to page when user clicks "Show Another Quote"
function printQuote() {
  // saves random quote in variable
  var usedQuote = getRandomQuote();
  var newColor = getRandomColor();
  var newHTML = '<p class="quote">' + usedQuote.quote +'</p> <p class="source">' + usedQuote.source;

  if(usedQuote.citation !== "") {
    newHTML += '<span class="citation">' + usedQuote.citation + '</span>';
  }

  if(usedQuote.year !== "") {
    newHTML += '<span class="year">' + usedQuote.year + '</span></p>'
  }

  document.getElementById('quote-box').innerHTML = newHTML;

  console.log(newColor);
}
