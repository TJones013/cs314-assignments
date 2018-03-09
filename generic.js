function myFunction(x) {
    x.classList.toggle("change");
    var nav = document.getElementById("nav");
    var body = document.getElementById("body");
    if (nav.style.display === "none"){
        nav.style.display = "block";
        body.style.overflow = "hidden";
    }
    else{
        nav.style.display = "none";
        body.style.overflow = "auto";
    }
}