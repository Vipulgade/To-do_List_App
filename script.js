const myInput = document.getElementById("myInput");
const myInput1=document.getElementById("myInput1");
const myUL = document.getElementById("myUL");
const myUL1 = document.getElementById("myUL1");

function addTask() {
    if ((myInput.value === ""))  {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
      //let li1 = document.createElement("li1");
        li.innerHTML = myInput.value;
        myUL.appendChild(li);
        //li1.innerHTML = myInput1.value;
        //myUL1.appendChild1(li1);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // × character
        li.appendChild(span);
        //li1.appendChild1(span);
    }
    myInput.value = "";
   // myInput1.value="";
    saveData();
}
function addDetails() {
    if ((myInput1.value === ""))  {
        alert("You must write something!");
    } else {
       // let li = document.createElement("li");
      let li1 = document.createElement("li");
       
        li1.innerHTML = myInput1.value;
        myUL1.appendChild(li1);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // × character
       li1.appendChild(span);
    }
   
    myInput1.value="";
    saveData();
}

myUL.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
       
            
            ev.target.classList.toggle("checked");
            alert("Task is completed");
            
    } else if (ev.target.tagName === "SPAN") {
        ev.target.parentNode.remove();
        alert("Task is remove from list");
    }
    else if(ev.target.tagName !== "LI") {
       
            
        ev.target.classList.toggle("checked");
        alert("Task is updated");}
        
}, false);
myUL1.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
       
            
            ev.target.classList.toggle("checked");
            alert("Task is completed");
            
    } else if (ev.target.tagName === "SPAN") {
        ev.target.parentNode.remove();
        alert("Task is remove from list");
    }
    else if(ev.target.tagName !== "LI") {
       
            
        ev.target.classList.toggle("checked");
        alert("Task is updated");}
        
}, false);

function saveData() {
    localStorage.setItem("data", myUL.innerHTML);
    localStorage.setItem("data1", myUL1.innerHTML);
}

function showTask() {
    myUL.innerHTML = localStorage.getItem("data");
    myUL1.innerHTML = localStorage.getItem("data1");
}

showTask();