const input = require('readline-sync');

let candidateName = " ";

let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = ' ';
let questions = ["Who was the first American woman in space?", "True or False: 5 Kilometers==5000 meters?", "(5+3)/2*10=", "Given the array:[ 8, 'orbit' 'trajectory' 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"]
let correctAnswers = ['Sally Ride', 'True', '40','Trajectory', '3'];
let candidateAnswers = []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name, candidate? ");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i=0; i< question.length; i++){
candidateAnswer = input.question(question);  
candidateAnswers.push(candidateAnswer);
}
if (candidateAnswer===correctAnswer) {
console.log("That is correct!");
} else {
console.log("You have chosen poorly");
}



function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


{
  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log("Hello, ",+candidateName,+"glad you could join us")
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};