const inputbox = document.getElementById("box");
const list = document.getElementById("list");

function addTask() {
    if(inputbox.value === ''){
        alert("You must write something!");    
    }
    else{
        let li = document.createElement("li");  //createElement - Creates an instance of the element for the specified tag.
        li.innerHTML = inputbox.value;
        list.appendChild(li);  //append one child element each time executed

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";   // \u00d7 is used to create 'x' mark
        li.appendChild(span);
    }
    inputbox.value ="";
    saveData();
}

list.addEventListener("click", function(check) {
    if(check.target.tagName == "LI") {
        check.target.classList.toggle("checked");
        saveData();
    }
    else if (check.target.tagName === "SPAN") {
        check.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data" , list.innerHTML);   //use to save the data on local storage of system
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");    //get all saved task from localstorage
}
showTask();