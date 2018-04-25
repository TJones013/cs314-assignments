$(document).ready(function(){
    $.get("https://jsonplaceholder.typicode.com/users").then(function(data){
        $.each(data, function(i, item){
            $("#div_main").append('<div id="div' + i + '">'+
            '<p>' + 'Name: ' + item.name + '</p>' +
            '<p>' + 'Email: ' + item.email + '</p>'+
            '<p>' + 'Company: ' + item.company.name + '</p>'+
            '<button id="button' + i + '">' + 'Click' + '</button>' +
            '</div>');
        });
        $("#button").click(function(){
            console.log('test');
        });
    });
});

/*
let preload_todo = {};

$(document).ready(function(){
    $("#button0").one('click', function(){
        $.get("https://jsonplaceholder.typicode.com/todos").then(function(data){
            $.each(data, function(i, item){
                console.log(item.id);
            });
        });
    });
});
*/

function buttonContent(user){
    let flag = true;
    if(flag){
        $.get("https://jsonplaceholder.typicode.com/todos").then(function(data){
        $.each(data, function(i, item){
            if(user == item.userId){
                console.log(item.id);
            }
        });
    });
    }
}
