const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click",addNote);

function addNote(){

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="save fas fa-save"></i> 
        <i class="trash fas fa-trash"></i> 
    </div>
     <textarea></textarea>
    `;


    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click",saveNotes);
    textarea.addEventListener("input",saveNotes);
    trash.addEventListener("click",()=>{

        note.remove();
        saveNotes();

    });


    main.appendChild(note);

}

function saveNotes(){

    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length ===""){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }

}

function loadNotes(){

    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !==null){
        lsNotes.forEach(noteText =>{

        addNote();

        const notes = document.querySelectorAll(".note textarea");
        const lastNote = notes[notes.length -1];
        lastNote.value = noteText;  

        });
    }else{
        addNote();
    }

}

loadNotes();


//helps in changing background color too
const body = document.body;

body.addEventListener("click",changeBackgroundColor);

function changeBackgroundColor(){

    const randomColor = getRandomColor();  // #fffcd4
    body.style.backgroundColor = randomColor;

}

function getRandomColor(){

    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }

    return color;

}
