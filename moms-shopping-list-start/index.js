const form = document.addItem
const list = document.getElementById("list")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // alert("It's Working")

    // const food = form.title.value
    
    //create list
    const li = document.createElement('li')
    
    list.append(li)
    
    //create div for list names 
    //create element, give element a textcontent, prepend
    const div = document.createElement("div")
    div.textContent = form.title.value
    li.prepend(div)
    
    //create buttons(edit, delete)
    const button = document.createElement("button");
    button.innerHTML = "X";

    var body = document.getElementsByTagName("body")[0];

    button.addEventListener("click", function() {
        
    })    
    //create functions for the buttons(edit, delete)
    //these methods can help with delete btn
    //classList, contains, closest, remove

    form.title.value = ""
})