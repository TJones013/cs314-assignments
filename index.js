
//Char Swap
function charSwap(input){
    let first = input.substr(0,1);
    let temp_message = input.substr(1,(input.length - 2)); 
    let last = input.substr((input.length - 1), input.length);
    let final_message = last + temp_message + first;
    console.log(final_message);
}

//Char Swap Execute
//charSwap("testing");

//Hi String
function hiString(input){
    let first = input.substr(0,2);
    if(first === "Hi"){
        console.log(input);
    }
    else{
        message = "Hi" + input;
        console.log(message);
    }
}

//Hi String Execute
//hiString("Heya");
//hiString("Hiya");

//Three Chars to Front
function threeChars(input){
    if(input.length < 3){
        console.log("String insufficient length");
    }
    else{
        let last = input.substr((input.length - 3),input.length);
        let new_str = last + input;
        console.log(new_str);
    }
}

//Three Chars to Front Execute
threeChars("Test123");

//Strings to Sentance
function toSentance(input){
    let message = input.split(",");
    let alert_message = "Input from user:";
    for(let i=0; i < message.length-1; i++){
        alert_message = alert_message + message[i] + ", ";
    }
    alert_message = alert_message + message[message.length-1];
    console.log(alert_message);
}

//Strings to Sentance Execute
toSentance("to,many,cooks,on,the,dance,floor");

//Upper or Lower
function upper_lower(input){
    if(input.length < 3){
        let upper = input.toUpperCase();
        console.log(upper);
    }
    else{
        let first = input.substr(0,3);
        let rest = input.substr(3,input.length);
        first = first.toLowerCase();
        let final = first + rest;
        console.log(final);
    }
}

//Upper or Lower Execute
upper_lower("no");
upper_lower("I'M NOT YELLING");

//Integer Swap
function integerSwap(){
    let numbers = arguments;
    console.log(numbers);
    let message = "Input values are "
    for(let i=0; i<numbers.length-1;i++){
        message = message + numbers[i] + ", ";
    }
    message = message + numbers[numbers.length-1];
    console.log(message);
}

//Integer Swap Execute
integerSwap(1,2,3,4,5);

//Longest String
function longString(){
    let longest = "";
    for(let i=0; i<arguments.length;i++){
        if(arguments[i].length >= longest.length){
            longest = arguments[i];
        }
    }
    alert(longest);
}

//Longest String Execute
longString("Hello", "world", "test", "acknowledgment");

//Largest Even Number
function largeEven(){
    let largest = 0;
    for(let i=0; i<arguments.length;i++){
        if(arguments[i] % 2 === 0){
            if(arguments[i] >= largest){
                largest = arguments[i];
            }
        }
    }
    alert(largest);
}

//Largest Even Number Execute
largeEven(2,5,14,583,27,44);

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
date();

//Unlimited Function
function unlimited(){
    let string = "";
    for(let i =0; i<arguments.length;i++){
        string = string + arguments[i];
    }
    alert(string);
}

//Unlimited Function Execute
unlimited("Hey", "Theyre", "Dilila", "Whats", "It", "Like","In", "NewYork","City");
unlimited("Hello", "World", "!");