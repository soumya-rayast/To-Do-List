// for input box
let inputbox = document.getElementById('inputbox')
//  for task container
let taskcontainer = document.getElementById('task-container')
// make a function that add task 
function addtask() {
    if (inputbox.value === '') {
        alert("You Must Write Something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputbox.value;
        taskcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = '';
    saveData();
}

// function for  complete task its checked and for remove
taskcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)
// save the data in local storage browser
function saveData() {
    localStorage.setItem("data", taskcontainer.innerHTML);
}
// show the  data each time we refresh
function showData(){
    taskcontainer.innerHTML = localStorage.getItem("data");
}
showData();