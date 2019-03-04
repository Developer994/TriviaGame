// Since we give the user 29 seconds to choose the right option, we need a timer starting from 29 seconds.
var timer = 30;

// Holds our interval id when the program is executed
var intervalId;


// Var for generating a question
var questionGenerated

// Getting the elements onto JS
var question = document.getElementById("Question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");


// The Questions Array
var questions = [
    {
        question: "what is 1 + 1?",
        choiceA: "1",
        choiceB: "3",
        choiceC: "2",
        choiceD: "5",
        correct: "C"
    },

    {
        question: "what is 5 x 5?",
        choiceA: "50",
        choiceB: "40",
        choiceC: "30",
        choiceD: "25",
        correct: "D"
    },

    {
        question: "what is 6 + 6?",
        choiceA: "10",
        choiceB: "13",
        choiceC: "12",
        choiceD: "15",
        correct: "C"
    },
    {
        question: "what is 3 + 3?",
        choiceA: "7",
        choiceB: "17",
        choiceC: "6",
        choiceD: "5",
        correct: "C"
    }];


var lastQuestion = questions.length - 1;
// The currentQuestion variable bascially will keep track of whether or not there are still questions left before the last question.
var currentQuestion = 0;
var score = 0;


// Creates a function that will render the question. 
function renderQuestion() {
    let q = questions[currentQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

// In order to have the program actually show the question and the choices, we have to use the renderQuestion function again.
renderQuestion();

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// The function to have the timer's number decrease
function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the #show-number tag.
    $("#timer-count").html("<h2>" + timer + "</h2>");


    //  Once number hits zero...
    if (timer === 0) {
        // Timer Stops
        stop();
        currentQuestion++;
        if (currentQuestion < lastQuestion) {
            currentQuestion++;
            // The added  renderQuestion() allows the game to move on to the next question.
            renderQuestion();
            timer = 30;

        }
    }

}

function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);

}

//  Runs the program
run();

$(".choice").on("click", function () {

    var id = this.id;

    // alert(id)
    console.log(id);

    console.log(this);


});

// This function here is to check if the user's choice is correct.
function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        // If the user is right
        document.getElementById("Outcome").innerHTML = "You're Correct!"
        console.log("Correct answer was chosen");
        score++;
        setTimeout(questions.scoreCount, 3 * 1000);
    } else {
        document.getElementById("Outcome").innerHTML = "Sorry, but that was incorrect";
        // If the user is wrong
        console.log("Wrong answer was chosen")

    }
    timer = 0;
    if (currentQuestion < lastQuestion) {
        currentQuestion++;

        // The added  renderQuestion() allows the game to move on to the next question.
        renderQuestion();
        timer = 30;
    } else {
        console.log("The game is finished");
        clearInterval(intervalId);
    }
}






