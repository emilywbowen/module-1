var h1 = document.createElement("h1")

h1.textContent = "JavaScript made this!"

var header = document.getElementById("header");
h1.textContent = "JavaScript made this!";
header.append(h1)

h1.className = "header";
document.getElementById("header").appendChild(h1);
//document.body.textContent="JavaScript made this!";


const mySpan = document.createElement("span")
mySpan.innerHTML = "<span class = 'name'>Emily Bowen</span> wrote the JavaScript"
h1.appendChild(mySpan)
//document.getElementsByTagName("span")[0];
// mySpan.style.color = "purple"
// mySpan.textContent = "Emily Bowen"

const messages = document.getElementsByClassName("message");

messages[0].textContent = "Hey, how are you?";
messages[1].textContent = "I'm feeling rather flat.";
messages[2].textContent = "Why? What happened?";
messages[3].textContent = "I wanted pancakes but got ran over by a bus.";

var button = document.getElementById("clear-button")
function myFunction() {
    var container = document.getElementById("maindiv")
    container.replaceChildren();
}

var select = document.getElementById("theme-drop-down")
function onChange() {
    for(let i = 0; i < messages.length; i++) {
        if (i % 2 === 0){ 
            messages[i].style.backgroundColor = "red"
        } else {
            messages[i].style.backgroundColor = "black" 
            messages[i].style.color = "white"
        }
    }
}
function onChangeTwo() {
    for(let i = 0; i < messages.length; i++) {
        if (i % 2 === 0){ 
            messages[i].style.backgroundColor = "burlywood"
        } else {
            messages[i].style.backgroundColor = "lightblue" 
        }
    }
}
function getValue () {
    var e = document.getElementById("theme-drop-down");
    var value = e.value;
    //var text = e.options[e.selectedIndex].text;
    if (value === "theme-one"){
        onChangeTwo()
    } else if(value === "theme-two"){
        onChange()
    }console.log(value)
}
select.addEventListener("change", getValue)

var butt = document.getElementById("myButt")
var inputBox = document.getElementById("input")

function newFunction (e) {
    e.preventDefault()
    var newDiv = document.createElement("div")
    document.body.append(newDiv)
    newDiv.textContent = inputBox.value
}

butt.addEventListener("click", newFunction)
