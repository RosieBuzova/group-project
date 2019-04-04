var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
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

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // storing the output and the answer choices
    var output = [];
    var answers;

    // for each // QUESTION:
    for(var i=0; i<questions.length; i++){

      // reset the list of answers
      answers = [];

      // for each available answer
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
          + '<input type="radio" name="question' + i + '"value="' + letter' + '">'
          + letter + ': '
          + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="questions"' + questions[i].question + '</div>'
        + '<div class="answers"' + answers.join('') + '>/div>'
      );
    }
    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer){

      // gather answer containers from our quiz
  	var answerContainers = quizContainer.querySelectorAll('.answers');

  	// keep track of user's answers
  	var userAnswer = '';
  	var numCorrect = 0;

  	// for each question...
  	for(var i=0; i<questions.length; i++){

  		// find selected answer
  		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

  		// if answer is correct
  		if(userAnswer===questions[i].correctAnswer){
  			// add to the number of correct answers
  			numCorrect++;

  			// color the answers green
  			answerContainers[i].style.color = 'lightgreen';
  		}
  		// if answer is wrong or blank
  		else{
  			// color the answers red
  			answerContainers[i].style.color = 'red';
  		}
  	}

  	// show number of correct answers out of total
  	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
}
