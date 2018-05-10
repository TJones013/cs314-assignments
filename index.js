$(document).ready(function(){
    let frame = document.getElementById("frame");
    $("#workout").click(function(){
        $("#workout_div").toggle();
        $("#food_div").hide();
        $("#other_div").hide();
    });
    $("#food").click(function(){
        $("#food_div").toggle();
        $("#workout_div").hide();
        $("#other_div").hide();
    });
    $("#other").click(function(){
        $("#food_div").hide();
        $("#workout_div").hide();
        $("#other_div").toggle();
    });
    $("#squats").click(function(){
        frame.src = "https://www.youtube.com/embed/2-8gsWZqDBM?rel=0";
    });
    $("#bench").click(function(){
        frame.src = "https://www.youtube.com/embed/TDnfdKOAexk?rel=0";
    });
    $("#clean").click(function(){
        frame.src = "https://www.youtube.com/embed/QnD6B8Ck0T8?rel=0";
    });
    $("#chicken").click(function(){
        frame.src = "https://www.youtube.com/embed/w8fAellnPns?rel=0";
    });
    $("#eggs").click(function(){
        frame.src = "https://www.youtube.com/embed/PUP7U5vTMM0?rel=0";
    });
    $("#drink").click(function(){
        frame.src = "https://www.youtube.com/embed/Q2ezpExQ_k0?start=197";
    });
    $("#shower").click(function(){
        frame.src = "https://www.youtube.com/embed/90Av0TXI3mU";
    });
});

