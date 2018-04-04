
//Char Swap
function charSwap(){
    let input = prompt("Enter anything")
    let first = input.substr(0,1);
    let temp_message = input.substr(1,(input.length - 2)); 
    let last = input.substr((input.length - 1), input.length);
    let final_message = last + temp_message + first;
    alert(final_message);
}

//Char Swap Execute
//charSwap("testing");

//Hi String
function hiString(){
    let input = prompt("Enter a string")
    let first = input.substr(0,2);
    if(first === "Hi"){
        alert(input);
    }
    else{
        message = "Hi" + input;
        alert(message);
    }
}

//Hi String Execute
//hiString();

//Three Chars to Front
function threeChars(){
    let input = prompt("Enter a String greater than or equal 3")
    if(input.length < 3){
        alert("String insufficient length");
    }
    else{
        let last = input.substr((input.length - 3),input.length);
        let new_str = last + input;
        alert(new_str);
    }
}

//Three Chars to Front Execute
//threeChars("Test123");

//Strings to Sentance
function toSentance(){
    let input = prompt("Enter Strings seperated by commas")
    let message = input.split(",");
    let alert_message = "Input from user: ";
    for(let i=0; i < message.length-1; i++){
        alert_message = alert_message + message[i] + ", ";
    }
    alert_message = alert_message + message[message.length-1];
    alert(alert_message);
}

//Strings to Sentance Execute
//toSentance();

//Upper or Lower
function upper_lower(){
    let input = prompt("Enter a message")
    if(input.length < 3){
        let upper = input.toUpperCase();
        alert(upper);
    }
    else{
        let first = input.substr(0,3);
        let rest = input.substr(3,input.length);
        first = first.toLowerCase();
        let final = first + rest;
        alert(final);
    }
}

//Upper or Lower Execute
//upper_lower();

//Integer Swap
function integerSwap(){
    let input = prompt("Enter list of numbers split by commas")
    let numbers = input.split(",");
    let temp = numbers[numbers.length-1];
    numbers[numbers.length-1] = numbers[0];
    numbers[0] = temp;
    let message = "Input values are "
    for(let i=0; i<numbers.length-1;i++){
        message = message + numbers[i] + ", ";
    }
    message = message + numbers[numbers.length-1];
    alert(message);
}

//Integer Swap Execute
//integerSwap();

//Longest String
function longString(){
    let my_arguments = prompt("Enter strings seperated by commas").split(",");
    let longest = "";
    for(let i=0; i<my_arguments.length;i++){
        if(my_arguments[i].length >= longest.length){
            longest = my_arguments[i];
        }
    }
    alert(longest);
}

//Longest String Execute
//longString();

//Largest Even Number
function largeEven(){
    let my_arguments = prompt("Enter numbers seperated by commas").split(",");
    let largest = 0;
    for(let i=0; i<my_arguments.length;i++){
        if(my_arguments[i] % 2 === 0){
            if(my_arguments[i] >= largest){
                largest = my_arguments[i];
            }
        }
    }
    alert(largest);
}

//Largest Even Number Execute
//largeEven();

//Current Day Time
function date(){
    let d = new Date();
    let day = d.getDay();

    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    
    let hour = d.getHours();
    let minute = d.getMinutes();
    if(minute < 10){
        minute = "0" + minute;
    }
    let day_phase = "";
    if(hour > 12){
        hour = hour - 12;
        day_phase = "PM";
    }
    else{
        day_phase = "AM";
    }
    let time = hour + ":" + minute + day_phase;
    alert("Today is " + weekday[day] +"\n" + "It is " + time);
}

//Current Date Time Execute
//date();

//Unlimited Function
function unlimited(){
    let string = "";
    for(let i =0; i<arguments.length;i++){
        string = string + arguments[i];
    }
    alert(string);
}

//Unlimited Function Execute
//unlimited("Hey", "Theyre", "Dilila", "Whats", "It", "Like","In", "NewYork","City");
//unlimited("Hello", "World", "!");