let addbtn = document.querySelector(".add");
let container = document.querySelector(".container");

function addTodo() {

    const todo = document.querySelector("#todo").value.trim();
    if (todo === "") return;

    // main todo container
    let todoAdded = document.createElement("p");
    todoAdded.classList.add("todo");

    // span for text
    let textSpan = document.createElement("span");
    textSpan.textContent = todo;

    // edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.color = "white";
    editBtn.style.backgroundColor = "blue";
    editBtn.classList.add("active");

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.color = "white";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.classList.add("active");

    // append elements
    todoAdded.appendChild(textSpan);
    todoAdded.appendChild(editBtn);
    todoAdded.appendChild(deleteBtn);
    container.appendChild(todoAdded);

    // 📝 EDIT LOGIC
    let previousText = "";
    editBtn.addEventListener('click',()=>{
        if(editBtn.textContent==="Edit"){
            previousText=textSpan.textContent;
            let newInput=document.createElement("input");
            newInput.type="text";
            newInput.value=textSpan.textContent;

            todoAdded.replaceChild(newInput,textSpan);
            editBtn.textContent="Save";
        }
        else{
            let newSpan=document.createElement("span");
            newSpan.textContent=todoAdded.querySelector("input").value.trim();
            todoAdded.replaceChild(newSpan,todoAdded.querySelector("input"));
            if(newSpan.textContent.length==0){
                newSpan.textContent=previousText;
            }

            textSpan=newSpan
            editBtn.textContent="Edit";
        }
    })

    // ❌ DELETE LOGIC
    deleteBtn.addEventListener("click", () => {
        todoAdded.remove();
    });

    document.querySelector("#todo").value = "";
}

addbtn.addEventListener("click", addTodo);
