let para = document.querySelector('p');
let bts = document.querySelectorAll('button');

para.addEventListener('click', () => {
  bts.forEach(button => {
    button.classList.toggle('bt');
  });
});
//animation header text//
//1.variables and values///
let i = 0;
let txt = ' ROCK PAPER SCISSORS (GAME)';
var speed = 90;

//function//
function Typewritersp() {
  if (i < txt.length) {
    document.getElementById('header').innerHTML += txt.charAt(i);
    i++;
    setTimeout(Typewritersp, speed);
  }
}

// The function calling//
Typewritersp();
