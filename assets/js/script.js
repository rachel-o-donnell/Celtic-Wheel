// dropdown code taken from w3schools adapted to suit my project

// When the user clicks on the button,toggle between hiding and showing the dropdown content W3schools
function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it W3schools
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// choosing game difficulty 

let difficulty = ['easy', 'medium', 'hard']

difficulty.forEach(element => {
  fetch(`https://opentdb.com/api.php?amount=11&category=20&difficulty=${element}&type=multiple`)
       .then(response => response.json())
       .then(data => console.log(data))
});
  
// HIDES HOME SCREEN // ADDS GAME SCREEN // SETS USERNAME credit for structure in README - altered to fit my needs.

const beginBtn = document.getElementById('begin');

const homeScreenElements = document.getElementsByClassName('home');
const gameScreenElements = document.getElementById('q-and-a-container');
beginBtn.addEventListener('click',beginGame);


function beginGame() {
  for (let elements of homeScreenElements) {
    elements.classList.add('hide-home')
  }
  console.log('LETS BEGIN') 
  //shows game screen
  gameScreenElements.classList.remove('hide-game')

 //sets username in game panel
  let username = document.getElementById('name').value
   document.getElementById('username').textContent = username
}

// GAME SCREEN 

function displayQuestions() {

}

function displayAnswers() {

}

function rightAns() {

}

function wrongAns() {

}

function nextButton() {

}

// GAME PANEL BAR 

// Home button pressed - goes to ghome screen - DO YOU WANT TO CLEAR THE USERNAME? OR KEEP IT? 
document.getElementById('home.btn').addEventListener('click', goHome)

function goHome() {
  gameScreenElements.classList.add('hide-game')
  for (let elements of homeScreenElements) {
    elements.classList.remove('hide-home')
  }
}

function score() {

}


function questionOfQuestion() {

}
// displaying game difficulty 


/*" keep getting error messages that either OPTION IS NOT DEFINED/ addevent listener is not a function  "
let option = document.getElementsByTagName('a'); or add class name option 
let dropdownBtnText = document.getElementById('dropdown-btn').textcontent;

  function displaySelectedOption() {
    if (option.textContent === "Easy") {
      dropdownBtnText = 'Difficuly: Easy'
    } else if (option.textContent === "Medium") {
      dropdownBtnText = "Difficuly: Medium"
    } else if (option.textContent === "Hard") {
      dropdownBtnText = "Difficuly: Hard"
    }
  }
  option.addEventListener('click', displaySelectedOption())

*/
