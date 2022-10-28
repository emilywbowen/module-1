const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function(){
    const subItem = createSubItem();
    document.getElementById("list").appendChild(subItem);
});

function createDropDown(){
    const dropDown = document.createElement("select");
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") ;
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    dropDown.addEventListener("change", function(e){
        e.target.style.backgroundColor = e.target.value;
    });
    return dropDown;
}

function createSubItem(){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input");
    subItem.textContent = subItemValue.value;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", ".sub-Item");
    return subItem;
}