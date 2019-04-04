const quizContainer = document.getElementByID('quiz');
const resultsContainer = document.getElementByID('results');
const submitButton = document.getElementByID('submit');

const myQuestions = [
  {
    question: 'When was the Sustainable Development agenda adopted?',
    answers: {
      a: '20 September 2015',
      b: '20 September 2014',
      c: '20 September 2017'
    }
    correctAnswer: 'b'
  }
  {
    question: 'How many Sustainable Development Goals is there?',
    answers: {
      a: '17',
      b: '15',
      c: '8'
    }
    correctAnswer: 'b'
  }
  {
    question: 'Which is not a Sustainable Development Goal?',
    answers: {
      a: 'Gender equality.',
      b: 'Life on land.',
      c: 'Life in air.'
    }
    correctAnswer: 'c'
  }
]

function buildQuiz(){
  // Store HTML output
  const output = [];

  //for each question
  myQuestion.forEach(
    (currentQuestion, questionNumber) => {

      // store each available answer
      for(letter in currentQuestion.answers){

        //add a radio button in the html
        answers.push(
          <label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}:
          ${currentQuestion.answers[letter]}
          </label>
        );
      }

      // add this letter and its answer to the output
      output.push(
        <div class="question">${currentQuestion.question} </div>
        <div class="answers">${answers.join('')} </div>
      );
    }
  );

  // combine output list into one string of HTML and put it on the webpage
  quizContainer.innerHTML = output.join('');
}

function showResults(){

  // gather answer containers from quiz
  const answerContainers = quizContainer.query.SelectorAll('.answers');

  // keep track of users' answers
  let numCorrect = 0;

  // for each question
  myQuestion.forEach( (currentQuestion, questionNumber) => {

    // find selected answers
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question' + questionNumber + ']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // else
    else {
      answerContaienrs[questionNumber].style.color = 'red';
    }
  });

  // show the number of correct items out of the total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestion.length;
}

// display quiz straight away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
