function formCheck(){
    var question1 = document.forms["quiz_form"]["year"].value;
    var question2 = document.forms["quiz_form"]["president"].value;
    var question3 = document.forms["quiz_form"]["mascot"].value;
    var question4 = document.forms["quiz_form"]["basketball"].value;
    if(question1 == ''){
        alert("Question one cannot be empty");
    }
    else if(question1 == 1887){
        var q1 = document.getElementById('q1');
        q1.style.background == "green";
    }
    else{
        
    }
}