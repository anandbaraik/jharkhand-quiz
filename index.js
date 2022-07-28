//import required packages
let readlineSync = require('readline-sync');
let chalk = require("chalk");
const log = console.log;

//welcome user
let userName = readlineSync.question(chalk.white.bgBlue.bold('May i know your name please..?'));
log(chalk.magenta(`\nWelcome ${userName}, let's see how well DO YOU KNOW ABOUT 'JHARKHAND'..?`));

//let user know rules
log(chalk.bgMagenta.bold("\nRules: "));
log(chalk.bgBlue("1. There are total of 8 questions. All are compulsory."));
log(chalk.bgBlue("2. Choose options from 1/2/3/4."));
log(chalk.bgBlue("3. Each right answer will give you 3 points."));
log(chalk.bgBlue("4. 1 point will be deducted for each wrong answers.\n\n"));

readlineSync.questionInt(chalk.white.bgBlue.bold('Enter any number to start quiz!'));
console.clear();

//questions for quiz
let questions = [
  {
    "question": "In which year Jharkhand was formed as a separate state..?",
    "options": ["1998", "2001", "2000", "2003"],
    "answer": "2000"
  },
  {
    "question": "Which one is the sub-capital of Jharkhand.?",
    "options": ["Ranchi", "Bokaro", "Dhanbad", "Dumka"],
    "answer": "Dumka"
  },
  {
    "question": "Which one is known as the steel city of India.?",
    "options": ["Jamshedpur", "Hazaribagh", "Dhanbad", "Ranchi"],
    "answer": "Jamshedpur"
  },
  {
    "question": "Which one is the state bird of Jharkhand.?",
    "options": ["Peacock", "Pigeon", "Koel", "Eagle"],
    "answer": "Koel"
  },
  {
    "question": "Which one is the largest district of Jharkhand by area wise.?",
    "options": ["Palamu", "Ranchi", "Pashchimi Singhbhum", "Giridih"],
    "answer": "Pashchimi Singhbhum"
  },
  {
    "question": "The Bokaro Steel Plant was established in the year.?",
    "options": ["1960", "1971", "1964", "1973"],
    "answer": "1964"
  },
  {
    "question": "Who was the first Chief Minister of Jharkhand.?",
    "options": ["Shibu Soren", "Arjun Munda", "Babulal Marandi", "Madhu Koda"],
    "answer": "Babulal Marandi"
  },
  {
    "question": "The Hundru Falls is created by the.?",
    "options": ["Bansloi River", "Baitarani River", "Subarnarekha River", "Damodar River"],
    "answer": "Subarnarekha River"
  }
];

//execute game
let userScore = 0;
function play({ question, options, answer }) {
  log(chalk.bgCyan(question));
  let userAnswer = readlineSync.keyInSelect(options, chalk.cyan('Choose your option.'), { cancel: false });
  if (options[userAnswer] === answer) {
    userScore += 3;
    log(chalk.green("\nYou were right! 😊"));
  } else {
    userScore -= 1;
    log(chalk.red("\nYou were wrong! 😔"));
  }
  log("Your current score is " + userScore);
  log(chalk.cyan("*************************\n"));
}

for (let i = 0; i < questions.length; i++) {
  play(questions[i]);
}

//display scores
let highScores = [
  {
    name: "Walter",
    score: 23
  },
  {
    name: "Ranjan",
    score: 15
  },
  {
    name: "Ramesh",
    score: 10
  },
];
let isUserBeatScore = false;

log(chalk.magenta.bgWhite.bold('Check out the high scores: '));
console.table(highScores);

highScores.forEach(({ name, score }) => {
  if (userScore > score) isUserBeatScore = true;
});

log(chalk.bgMagenta("\n Yay! your highest score is " + userScore));

if (isUserBeatScore) {
  log(chalk.green("\n Congrats! 🎉 you made to the leaderboard. your name will be added to leaderboard. 🎊"));
  log(chalk.yellow("\nJust send me the screenshot of score! 😀"));
} else {
  log(chalk.red("\n Sorry!! you failed to beat the highest score! 😐\n"));
}