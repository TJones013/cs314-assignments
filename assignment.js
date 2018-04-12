//First Area
function sectionJump(objButton){
    window.location.hash = objButton.value;
}

//Section 1
function backgroundChange(objButton){
    document.body.style.backgroundColor = objButton.value;
}

//Section 2
function alternateBackground(){
    let bt = document.getElementById("alternate_button");

    if(document.body.style.backgroundColor == "pink"){
        document.body.style.backgroundColor = "orange";
        bt.innerHTML = "Click for pink!";
    }
    else if(document.body.style.backgroundColor == "orange"){
        document.body.style.backgroundColor = "pink";
        bt.innerHTML = "Click for orange!";
    }
    else{
        document.body.style.backgroundColor = "pink";
        bt.innerHTML = "Click for orange!";
    }
}

//Section 3
function addText(){
    let infield_value = document.getElementById("text_part").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(infield_value));
    ul.appendChild(li);
}

//Section 4
function removeLi(objButton){
    let ul = document.getElementById("list2");
    let item = document.getElementById(objButton.id);
    ul.removeChild(item);
}

//Section 5
function highlightItem(item){
    var lis = document.getElementById("list3").getElementsByTagName("li");
    for(let i=0; i<lis.length; i++){
        console.log(lis.length);
        if(item.id == lis[i].id){
            document.getElementById(item.id).style.color = "yellow";
        }
        else{
            document.getElementById(lis[i].id).style.color = "black";
        }
    }
}

