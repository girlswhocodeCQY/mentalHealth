console.log('the inspiration page has loaded!');

// TODO
// put more interesting quotes in here! (use the ones from the document)
var quotesList = [
"Life is not about waiting for the storm to pass, its about learning to dance in the rain.",
"breathe :)", "Don't wait for the right opportunity, create it.",
"Work hard in silence, let your success be the noise.",
"Tough times never last, but tough people do.",
"You’re Allowed To Scream, You’re Allowed To Cry, But Do Not Give Up.",
"If You’re Lucky Enough To Be Different, Don’t Ever Change.",
"Wake Up With Determination. Go To Bed With Satisfaction",
"Life is 10% what happens to me and 90% of how I react to it.",
"Difficult roads often lead to beautiful destinations.",
"It's a bad day, not a bad life.",
"If you can dream it, you can do it.",
"Whenever You Find Yourself Doubting How Far You Can Go, Just Remember How Far You Have Come. Remember Everything You Have Faced, All The Battles You Have Won, And All The Fears You Have Overcome.",
"Promise yourself you'll always remember: you're braver than you believe, stronger than you seem, and smarter than you think.",
"Don't let others define you. You define yourself.", "A little Consideration, a little Thought for Others, makes all the difference.",
"You can't stay in your corner of the forest waiting for others to come to you. You have to go to them sometimes.",
"It never hurts to keep looking for sunshine.", "The boat only sinks if you let it.",
"Don't let the behavior of others destroy your inner peace.",
"If someone is strong enough to brung you down, show them you are strong enough to get up.",
"Don't let anyone's ignorance, hate, drama, or negativity stop you from being the best person you can be."];


window.onload = function() {

  // make a variable that represents the div for 'quotes' in the HTML
  var quotesDiv = document.getElementById('quotes');

  // change the text inside of the 'quotes' div in the HTML to say "new text"
  //quotesDiv.innerHTML =   quotesList[0];

  timer();
  var index = 0;

  function timer() {
    setTimeout( function() {
      quotesDiv.innerHTML = quotesList[index];
      index++;
      if (index === quotesList.Length) {
        index = 0; 
      }
      timer(quotesList[index])
    }, 5000);
  }

}
