//VARIABLES
var current = 0;
var questions = ["What is the name of the engine that came in the third generation Acura Integra Type R?",
                 "In other regions where Acura does not exist, what is the name of the Acura RSX?",
                 "What is the name of the engine series found in high performance Hondas since the early 2000s?"];
var answers = ["B18C", "Integra", "K Series"];
var totalCorrect = 0;
//LISTENERS
$("#submitBtn").on("click", function(){
    getUserAnswer();
    disableButton($(this));
});

$("#nextBtn").on("click", function(){
    enableButton(document.getElementById("submitBtn"));
    clearText();
    $("#right").hide();
    $("#wrong").hide();
    nextQuestion();
});

$("#retryBtn").on("click", function(){
    location.reload(true);
    console.log("you pressed the button");
});

//FUNCTIONS
window.onload = initialize();
function initialize(){
    displayQuestion();
}

function displayQuestion(){
    if(current <= questions.length){
      $("#question").append("<h4>" + questions[current] + "</h4>");
    }
}

function clearText(){
    document.getElementById("usersAnswer").value = "";
}

function disableButton(btn){
    console.log(btn);
    btn.prop("disabled", true);
    btn.attr("class", "btn btn-danger");
}

function enableButton(btn){
    console.log(btn);
    btn.removeAttribute("disabled");
    btn.setAttribute("class", "btn btn-success");
}

function getUserAnswer(){
    var ans = document.getElementById('usersAnswer').value;
    console.log(ans);
    if(ans.toLowerCase() == answers[current].toLowerCase()){
        totalCorrect += 1;
        $("#right").show();
        console.log(totalCorrect);    
    }
    else{
        $("#wrong").show();
    }
}

function nextQuestion(){
    current += 1;
    if(current < questions.length){
      $("#question").empty();
      displayQuestion();
    }
    else{
      $("#question").empty();
      $("#answer").empty();
      $("#nextBtn").hide();
      $("#retryBtn").show();
      displayResult();
    }
    console.log(current);
}

function displayResult(){
  $("#question").append("<br />");
  $("#question").append("<br />");
  $("#question").append("<br />");
  $("#question").append("<br />");
  $("#question").append("<h4>You got "  + totalCorrect + "/" + questions.length + " correct! Wow!</h4>");
}