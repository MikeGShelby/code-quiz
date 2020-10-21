var mainContentEl = document.querySelector(".main-content");

// Object constructor function for all quiz questions/answers
function quizQuestion(questionText, answer1, answer2, answer3, answer4, correctAnswer) {
    this.questionText = questionText;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
}

// All quiz questions/answers created using above object constructor
var quizQuestion1 = new quizQuestion("Commonly used data types do NOT include:", "strings", "booleans", "alerts", "numbers", "alerts");

var quizQuestion2 = new quizQuestion("The condition in an if / else statement is enclosed with ______.", "quotes", "curly brackets", "parenthesis", "square brackets", "parenthesis");

var quizQuestion3 = new quizQuestion("Arrays in JavaScript can be used to store ________.", "numbers and strings", "other arrays", "booleans", "all of the above", "all of the above");

var quizQuestion4 = new quizQuestion("String values must be enclosed within ______ when being assigned to variables.", "commas", "curly brackets", "quotes", "parenthesis", "curly brackets");

var quizQuestion5 = new quizQuestion("A very useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loops", "console.log", "console.log");


var createStartEl = function() {
    // create start section
    var startSectionEl = document.createElement("section");
    startSectionEl.className = "start-section";

    // add HTML content to start section
    startSectionEl.innerHTML = "<h3 class='start-title'>" + "Coding Quiz Challenge" + "</h3><p class='start-description'>" + "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!" + "</p>";

    // create start button
    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "btn-start";
    startQuizBtn.setAttribute("onclick", "createQuizEl()");
    startQuizBtn.innerHTML = "Start Quiz";
    startSectionEl.appendChild(startQuizBtn);

    startButton = document.querySelector("#btn-start");

    // get main content element
    mainContentEl = document.querySelector(".main-content");
    // add start section to main content element
    mainContentEl.appendChild(startSectionEl);

}



// This function creates HTML quiz elements, including section, h3, ol, and buttons
var createQuizEl = function() {
            var startSectionEl = document.querySelector(".start-section");
            startSectionEl.remove();

            // create quiz section
            var quizSectionEl = document.createElement("section");
            quizSectionEl.className = "quiz-section";

            // create question heading element
            var questionTitleEl = document.createElement("h3");
            questionTitleEl.className = "question-title";
            quizSectionEl.appendChild(questionTitleEl);

            // create ordered list element
            var answerListEl  = document.createElement("ol");
            answerListEl.className = "answer-list";

            // create answer button 1
            var answerBtn1 = document.createElement("button");
            answerBtn1.className = "btn";
            answerBtn1.setAttribute("id", "1");
            answerListEl.appendChild(answerBtn1);

            // create answer button 2
            var answerBtn2 = document.createElement("button");
            answerBtn2.className = "btn";
            answerBtn2.setAttribute("id", "2");
            answerListEl.appendChild(answerBtn2);

            // create answer button 3
            var answerBtn3 = document.createElement("button");
            answerBtn3.className = "btn";
            answerBtn3.setAttribute("id", "3");
            answerListEl.appendChild(answerBtn3);

            // create answer button 4
            var answerBtn4 = document.createElement("button");
            answerBtn4.className = "btn";
            answerBtn4.setAttribute("id", "4");
            answerListEl.appendChild(answerBtn4);

            // create answer feedback footer
            var answerFeedbackEl = document.createElement("footer");
            answerFeedbackEl.className = "answer-feedback";

            // append title and list to new section element
            quizSectionEl.appendChild(answerListEl);
            quizSectionEl.appendChild(answerFeedbackEl);

            // get main content element
            mainContentEl = document.querySelector(".main-content");
            // add quiz section to main content element
            mainContentEl.appendChild(quizSectionEl);

            addQuestionInfo(questionTitleEl, answerBtn1, answerBtn2, answerBtn3, answerBtn4, 0);
}

createStartEl();

var addQuestionInfo = function(questionTitleEl, answerBtn1, answerBtn2, answerBtn3, answerBtn4, i) {
    // All quiz question/answer object variables saved in an array
    var allQuestions = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5]

        questionTitleEl.innerHTML = allQuestions[i].questionText;
        answerBtn1.innerHTML = "<li>" + allQuestions[i].answer1 + "</li>";
        answerBtn2.innerHTML = "<li>" + allQuestions[i].answer2 + "</li>";
        answerBtn3.innerHTML = "<li>" + allQuestions[i].answer3 + "</li>";
        answerBtn4.innerHTML = "<li>" + allQuestions[i].answer4 + "</li>";

        mainContentEl.addEventListener("click", responseValidator);
}

var responseValidator = function(event) {
    var allQuestions = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5]
    var buttonSelection = event.target.innerText;
    var correctAnswer = allQuestions[0].correctAnswer;

    console.log(buttonSelection);
    console.log(correctAnswer);

    if (buttonSelection === correctAnswer && buttonSelection === document.querySelector(".btn")) {
        console.log("CORRECT");
        var answer = "correct!";
        // Add all quiz components for next question?
        // addQuestionInfo(questionText, answerBtn1, answerBtn2, answerBtn3, answerBtn4, i);
    }
    else if (buttonSelection != correctAnswer && buttonSelection === document.querySelector(".btn")) {
        console.log("FALSE");
        var answer = "incorrect!";
    }

    feedback(answer);
}

var feedback = function(answer) {
    answer = document.querySelector("answer-feedback");
}



