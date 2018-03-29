function RadioChoice(){
    let radios = document.getElementsByName('radio');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == 'true'){
                confirm("You are wrong!");
                break;
            }
            else{
                confirm("Good!");
                break;
            }
        }
    }
}

function true_false(){
    let message;
    let answer = confirm("The new Star Wars trilogy is worse than the Prequels");
    if (answer == true){
        message = 'I can see that you are a man/woman of culture too.';
    }
    else{
        message = 'You where the chosen one!';
    }
    alert(message);
}

function true_false2(){
    let message;
    let answer = confirm("The new Star Wars trilogy is worse than the Prequels");
    answer ? 
        message = 'I can see that you are a man/woman of culture too.' : 
        message = 'You where the chosen one!'
    alert(message);
}

function numbers1(){
    let answer = prompt("What is your age?");
    if(answer === ''){
        alert('No answer was given');
    }
    else if(answer){
        if(!isNaN(answer)){
            alert("You are " + answer + " years old!");
        }
        else{
            alert('Answer was not a number')
        }
    }
    else{
        alert('Cancelled');
    }
}

function load(){
    true_false2();
    numbers1();
}

function Car(brand, model, used, current_miles){
    this.brand = brand;
    this.model = model;
    this.used = used;
    if(this.used === true){
        this.current_miles = current_miles;
    }
    else{
        this.current_miles = 0;
    }
}

let mycar = new Car("Acura", "Integra", false);

console.log(mycar.current_miles);

function copyObject(new_value, object){
    return Object.assign({color: new_value},object);
}

newCar = copyObject('grey', mycar);
console.log(newCar.brand,newCar.model,newCar.used,newCar.current_miles, newCar.color);

function stringMagic(p1,p2,p3){
    p3 = p3 || 'test';
    sentence = p1 + p2 + p3;
    console.log(sentence);
}

stringMagic("Soc","Cah");
stringMagic("Soh","Cah","Toa");

let sentance = function(p1,p2,p3){
    p3 = p3 || 'test';
    return p1 + p2 + p3;
}

console.log(sentance("one", "two"));
console.log(sentance("one", "two", "three"));

let phrase = (p1, p2, p3) => {
    p3 = p3 || 'test'; 
    return p1 + p2 + p3;
};

console.log(phrase("let", "it"));
console.log(phrase("let", "it", "go"));