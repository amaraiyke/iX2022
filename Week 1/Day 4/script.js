//array containing movies
const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]
   
//Grabs elements in HTML by id
const form = document.getElementById('form');
const userGuess = document.getElementById('user.guess');
//const randomGuess = document.getElementById('guess');
const wrongAlert = document.getElementById("wrong-status-message")
const correctAlert = document.getElementById("correct-status-message")
const submitGuess = document.getElementById("submitGuess")
const showHint = document.getElementById("showHint")
const hintMessage = document.getElementById("hint-message")
const explainMessage = document.getElementById("explain")

//Random movie from array selector
const randomMovie = Math.floor(Math.random() * movies.length);
console.log(movies[randomMovie])
const {explanation} = movies[randomMovie];
console.log(explanation)
explainMessage.textContent = explanation //adds text for explanation to the explain div
const {hint} = movies[randomMovie];
console.log(hint)


//Event listener for Hint Button
showHint.addEventListener('click',randomHint);

//Event Listener for Submit Button
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkGuess(userGuess)
});

//function to check user's guess

function checkGuess() {
  const {title} = movies[randomMovie];
  //console.log(title)
  const randomGuess = title
  console.log(randomGuess)
  if (userGuess.value === randomGuess) {
    correctAlert.classList.remove('hide');} 

  else {
    wrongAlert.classList.remove('hide');}
}


//Displays hint for random movie
function randomHint() {
  const {hint} = movies[randomMovie];
  console.log(hint)
  hintMessage.textContent = hint
  hintMessage.classList.remove('hide');

}