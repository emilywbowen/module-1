const object = document.getElementById("square");


   object.addEventListener("dblclick", function (){ square.style.backgroundColor = "green"})

   object.addEventListener("mousemove", function() {square.style.backgroundColor = "blue"})

   object.addEventListener("mousedown", function(){square.style.backgroundColor = "red"})

   object.addEventListener("mouseup", function() {square.style.backgroundColor = "yellow"})

   object.addEventListener("wheel", myFunction);
   function myFunction() {
    this.style.backgroundColor = "orange";
   }

//const object = querySelector("square");
const square = document.getElementById('square')
window.addEventListener("keydown", keyPress);

function keyPress(e) {
  // e.which
  console.log(e);
  if (e.keyCode == "66") {square.style.backgroundColor = "blue"}
  else if (e.keyCode == "82") {square.style.backgroundColor = "red"} 
  else if (e.keyCode == "71") {square.style.backgroundColor = "green"}
  else if (e.keyCode == "79") {square.style.backgroundColor = "orange"}
  else if (e.keyCode == "89") {square.style.backgroundColor = "yellow"}
  else {square.style.backgroundColor = "black"}}

//const square = document.getElementById('square')
//window.addEventListener("keydown", keyPress);

//function keyPress(e) {
  // e.which
  // if (e.key === 'b') console.log('b')
  //if (e.which == "66") {square.style.backgroundColor = "blue"} 
//  else {square.style.backgroundColor = "black"}}