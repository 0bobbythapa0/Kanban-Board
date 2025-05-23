// + Add
const popBtn = document.getElementById("popup");

// pop up box
const box = document.getElementById("box");

// input
const input = document.getElementById("input-box")

// submit
const submit = document.getElementById("submit");

// cancel
const cancel = document.getElementById("cancel");

// list
const ul = document.getElementById("list");

// click on '+ Add' button
popBtn.addEventListener("click",()=>{

    // adds show class to box which makes it visible because show class has opacity and visibility property
    box.classList.add("show");

    // need not click on input box
    input.focus();
})

let liCounter = 0;

// click on 'submit' button
submit.addEventListener("click",()=>{

    // gets the value from input box
    const value = input.value;

    // if it is empty a alert message is shown
    if(value.length==0){
        alert("enter task")
    }else{

        // create a li element 
        const li = document.createElement("li");

        // create a p element 
        const p = document.createElement("p");

        // create a button element
        const button = document.createElement("button");
        
        // p innerText is equal to value inside the input box
        p.innerHTML=value;
        // button innerText is equal to 'x'
        button.innerHTML='X';
        // adds remove class to button
        button.classList.add("remove");
        // event listener is added
        button.addEventListener("click",(e)=>{
            // when it is clicked the task(li) is removed from the unordered list
            //ul.removeChild(e.target.parentNode);
            const parent = e.target.parentNode.parentNode;
            const child = e.target.parentNode;
            parent.removeChild(child);
        })
        
        // p is inserted inside the li
        li.appendChild(p);
        // button is inserted inside the li
        li.appendChild(button);

        // apply draggable on the element
        li.setAttribute("draggable",true);

        // store data which is being transferred
        li.addEventListener("dragstart",(e)=>{
            li.classList.add("element");
        })

        li.addEventListener("dragend",(e)=>{
            li.classList.remove("element");
        })

        // li is inserted inside the ul
        ul.appendChild(li);
        // input box is empty
        input.value="";
        // removes the show class from box it make it invisible
        box.classList.remove("show");
    }
})

// click on 'cancel' button
cancel.addEventListener("click",()=>{
    // get value from input box
    const value = input.value;
    // if it not empty then input box is made empty
    if(value.length!=0){
        input.value="";
    }
    // then show class is removed to make it invisible
    box.classList.remove("show");
})

// get all the ul elements
const list = document.querySelectorAll("ul");

// iterate over all the ul elements
for(let i=0;i<list.length;i++)
{
    // add dragover
    list[i].addEventListener("dragover",(e)=>{
        const data = document.querySelector(".element");
        list[i].appendChild(data);
    })
}