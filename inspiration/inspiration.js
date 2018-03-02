console.log('the inspiration page has loaded!');

// TODO
// put more interesting quotes in here! (use the ones from the document)
var quotes = [ "don't worry", "be happy", "breathe :)"];

window.onload = function() {

  // make a variable that represents the div for 'quotes' in the HTML
  var quotesDiv = document.getElementById('quotes');

  // change the text inside of the 'quotes' div in the HTML to say "new text"
  quotesDiv.innerHTML = "new text";


  // TODO
  // we want to change the innerHTML of the quotesDiv every 30 seconds
  // the first time, we want to use the first element from the quotes list
  // the second time, we want to use the second element from the quotes list
  // the third time, we want to use the third element from the quotes list

  // how can we write code that
  // 1. does something every 30 seconds
  // 2. chooses a new quote from the quotes list every time

}
