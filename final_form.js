let answers = [1887,"Thayne", "Spike", 2017];

function formCheck(){
    let count = 0;
    var question1 = document.forms["quiz_form"]["year"].value;
    var question2 = document.forms["quiz_form"]["president"].value;
    var question3 = document.forms["quiz_form"]["mascot"].value;
    var question4 = document.forms["quiz_form"]["basketball"].value;
    let submit = [question1,question2,question3,question4];
    for(let i = 0;i < submit.length; i++){
        if(submit[i] == answers[i]){
            count++;
        }
    }
    if(question1 == ''){
        alert("Question one cannot be empty");
    }
    else if(question2 == ''){
        alert("Question one cannot be empty");
    }
    else if(question3 == ''){
        alert("Question one cannot be empty");
    }
    else if(question4 == ''){
        alert("Question one cannot be empty");
    }
    else{
        $("#response").append(
            "<p>Answer 1: " + question1 + "</p>" +
            "<p>Answer 2: " + question2 + "</p>" +
            "<p>Answer 3: " + question3 + "</p>" +
            "<p>Answer 4: " + question4 + "</p>" +
            "<p>Correct Answers: " + count + "</p>"
        );
    }
}