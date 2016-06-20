// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('stopQuote').addEventListener("click", toggleTimer, false);

var timer = window.setInterval(printQuote, 4200);
var timerEnabled = true;

function toggleTimer() {
  if(timerEnabled) {
    clearInterval(timer);
    document.getElementById('stopQuote').innerText = "Resume Autorefresh";
    timerEnabled = false;
  } else {
    timer = window.setInterval(printQuote, 4200);
    document.getElementById('stopQuote').innerText = "Stop Autorefresh";
    timerEnabled = true;
  }
}

// quote data
var quotes = [
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    source: "H. Jackson Brown, Jr.",
    citation: "BrainyQuote.com",
    category: "inspirational"
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination",
    source: "Jimmy Dean",
    citation: "BrainyQuote.com",
    category: "inspirational"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller",
    citation: "BrainyQuote.com",
    category: "inspirational"
  },
  {
    quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    source: "Vince Lombardi",
    citation: "BrainyQuote.com",
    category: "inspirational"
  },
  {
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    source: "Francis of Assisi",
    citation: "BrainyQuote.com",
    category: "inspirational"
  },
  {
    quote: "We know what we are, but know not what we may be.",
    source: "William Shakespeare",
    citation: "BrainyQuote.com",
    category: "inspirational"
  },
  {
    quote: "If opportunity doesn't knock, build a door.",
    source: "Milton Berie",
    citation: "BrainyQuote.com",
    category: "inspirational"
  }
];

// Stores indices for used quotes
var usedQuotes = [];

// returns a random quote
function getRandomQuote() {
  // select random quote from quotes array
  var randomIndex = Math.floor(Math.random() * quotes.length);
  if(usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }
  while(usedQuotes.indexOf(randomIndex) !== -1 && usedQuotes.length > 0) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }

  usedQuotes.push(randomIndex);
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
  document.getElementById('quote-box').innerHTML = "";

  var usedQuote = getRandomQuote();
  var newColor = getRandomColor();
  var newHTML = '<p class="quote">' + usedQuote.quote +'</p> <p class="source">' + usedQuote.category + ' quote by ' + usedQuote.source;

  if(usedQuote.citation !== undefined) {
    newHTML += '<span class="citation">' + usedQuote.citation + '</span>';
  }

  if(usedQuote.year !== undefined) {
    newHTML += '<span class="year">' + usedQuote.year + '</span>';
  }

  newHTML += '</p>';
  document.getElementById('quote-box').innerHTML = newHTML;

  document.body.style.backgroundColor = newColor;
}
