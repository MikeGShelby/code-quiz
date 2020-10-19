var quizBtn = document.querySelector(".btn-start");

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

// All quiz question/answer object variables saved in an array
var allQuestions = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5]

// Function will loop through each quiz question with four possible answers
var quizLoop = function() {
    for (i = 0; i < allQuestions.length; i++) {

        var userResponse = window.prompt(allQuestions[i].questionText + "   1. " + allQuestions[i].answer1 + "   2. " + allQuestions[i].answer2 + "   3. " + allQuestions[i].answer3 + "   4. " + allQuestions[i].answer4);

        if (userResponse === allQuestions[i].correctAnswer) {
                window.alert("Correct!");
        }
        else {
            window.alert("False!");
            //Deduct time on the timer
        }
    }
}

var createStartEl = function() {
    // create start section
    var startSectionEl = document.createElement("section");
    startSectionEl.className = "start-section";

    // add HTML content to start section
    startSectionEl.innerHTML = "<h3 class='start-title'>" + "Coding Quiz Challenge" + "</h3><p class='start-description'>" + "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!" + "</p>";

    // create start button
    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "btn-start";
    startQuizBtn.innerHTML = "Start Quiz";

    startSectionEl.appendChild(startQuizBtn);

    // get main content element
    mainContentEl = document.querySelector(".main-content");
    // add start section to main content element
    mainContentEl.appendChild(startSectionEl);

}

createStartEl();


// This function creates quiz elements, including quiz question, answer options, and answer feedback. This will need the following parameters from whichever object is being iterated in the quiz function: quiz
var createQuizEl = function() {
    // create quiz section
    var quizSectionEl = document.createElement("section");
    quizSectionEl.className = "quiz-section";

    // create question heading element
    var questionTitleEl = document.createElement("h3");
    questionTitleEl.className = "question-title";
    questionTitleEl.innerHTML = "QUESTION TEXT";
    quizSectionEl.appendChild(questionTitleEl);

    // create ordered list element
    var answerListEl  = document.createElement("ol");
    answerListEl.className = "answer-list";

    // create answer button 1 and append to list
    var answerBtn1 = document.createElement("button");
    answerBtn1.className = "btn";
    answerBtn1.innerHTML = "<li>" + "ANSWER 1" + "</li>";
    answerListEl.appendChild(answerBtn1);

    // create answer button 2
    var answerBtn2 = document.createElement("button");
    answerBtn2.className = "btn";
    answerBtn2.innerHTML = "<li>" + "ANSWER 2" + "</li>";
    answerListEl.appendChild(answerBtn2);

    // create answer button 3
    var answerBtn3 = document.createElement("button");
    answerBtn3.className = "btn";
    answerBtn3.innerHTML = "<li>" + "ANSWER 3" + "</li>";
    answerListEl.appendChild(answerBtn3);

    // create answer button 4
    var answerBtn4 = document.createElement("button");
    answerBtn4.className = "btn";
    answerBtn4.innerHTML = "<li>" + "ANSWER 4" + "</li>";
    answerListEl.appendChild(answerBtn4);

    // append title and list to new section element
    quizSectionEl.appendChild(answerListEl);

    // create answer feedback footer
    var answerFeedbackEl = document.createElement("footer");
    answerFeedbackEl.className = "answer-feedback";
    answerFeedbackEl.innerHTML = "ANSWER FEEDBACK";
    quizSectionEl.appendChild(answerFeedbackEl);

    // get main content element
    mainContentEl = document.querySelector(".main-content");
    // add quiz section to main content element
    mainContentEl.appendChild(quizSectionEl);
}

createQuizEl();





