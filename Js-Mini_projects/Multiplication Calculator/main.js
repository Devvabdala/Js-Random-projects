 // Variables and manipulation
 let form = document.getElementById('form');
 let ques = document.getElementById('question');
 let inpt = document.getElementById('input');
 let verify = document.getElementById('submit');
 let record = document.getElementById('score');
 var inputElement = document.getElementById('input');
 let pop = document.getElementById('close');
//  yes or no option to reset score
let yes = document.getElementById('ye');
let no = document.getElementById('nu');
function decision() {
  yes.addEventListener('click', () => {
    console.log('yes');
    point = 0; // Reset the score
    saveData(); // Save the reset state
    loadData(); // Load the reset state
    form.reset(); // Reset the form
    pop.classList.add('box');
  });
  no.addEventListener('click', () => {
    console.log('no');
    pop.classList.add('box')
  });
}
decision();
 let el = document.getElementById('res').addEventListener('click', () => {
  pop.classList.remove('box');
 })
 // Initialize the game state
 let q1, q2, result;
 let point = 0;

 // Function to generate a new question
 function generateQuestion() {
     q1 = Math.floor(Math.random() * 10);
     q2 = Math.floor(Math.random() * 10);
     result = q1 * q2;
     ques.innerHTML = `What is ${q1} multiplied by ${q2}?`;
 }

 // Function to load data from localStorage
 function loadData() {
     const savedPoint = localStorage.getItem('point');
     if (savedPoint !== null) {
         point = parseInt(savedPoint, 10);
     }
     const savedQ1 = localStorage.getItem('q1');
     const savedQ2 = localStorage.getItem('q2');
     const savedResult = localStorage.getItem('result');
     if (savedQ1 !== null && savedQ2 !== null && savedResult !== null) {
         q1 = parseInt(savedQ1, 10);
         q2 = parseInt(savedQ2, 10);
         result = parseInt(savedResult, 10);
         ques.innerHTML = `What is ${q1} X ${q2}?`;
     } else {
         generateQuestion();
     }
     record.innerText = `Score: ${point}`;
 }

 // Function to save data to localStorage
 function saveData() {
     localStorage.setItem('point', point);
     localStorage.setItem('q1', q1);
     localStorage.setItem('q2', q2);
     localStorage.setItem('result', result);
 }

 // Load data when the page is loaded
 window.onload = loadData;

 form.addEventListener('submit', (event) => {
     event.preventDefault();
    
     const userRespond = parseInt(inpt.value);
     if (userRespond === result) {
         point += 1;
     } else if (userRespond !== result && point > 0) {
         point -= 1;
     }
     // Update score display
     record.innerText = `Score: ${point}`;

     // Save the current state
     saveData();

     // Generate new random numbers for the next question
     generateQuestion();

     // Save the new question state
     saveData();

     // Clear the input field for the next question
     inpt.value = '';
 });

