let listContainer = document.querySelector("ul");
let btn = document.querySelector("button");
let input = document.querySelector(".task-input");




//save data
let saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}
let getData = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}

let addItem = ()=>{
    //read the value
    if(input.value == null || input.value ===""){
        alert("Please add a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        //add cross button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
    input.value="";

}



//STRIKE AND REMOVE FUNCTION
listContainer.addEventListener("click", function (e) {
   let target = e.target; 
   if(target.tagName==="LI"){
        target.classList.toggle("checked");
   }
   else if(target.tagName==="SPAN"){
    target.parentElement.remove();
   }
   saveData();
});


//add task button event listner
btn.addEventListener('click', addItem);
input.addEventListener("keypress",function(event){
    if(event.key === 'Enter'){
        btn.click();
    }
});

getData();


