let noteContainer = document.querySelector(".notes-container");
let  addNoteBtn = document.querySelector(".add-note-btn");

function saveData(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}
function showData(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}


function addNote(){
    let note = document.createElement("p");
    note.setAttribute("contenteditable","true");
    note.classList.add("note");

    // add note to container
    noteContainer.appendChild(note);

    // create delete icon
    let image = document.createElement("img");
    image.src="/images/trash-can.png";
    image.classList.add("delete-icon");
    note.appendChild(image);
    saveData();
}

// add
addNoteBtn.addEventListener("click",addNote);
// delete
noteContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveData();
    }
    else{
        // upadte on key release
        Array.from(noteContainer.children).forEach((note)=>{
            note.addEventListener("keyup",saveData);
        });
    }
});

showData();