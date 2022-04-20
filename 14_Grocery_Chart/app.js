// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
//<input>
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
//default mode of editFlag is false
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

function addItem(e) {
    //prevent default mode: unsubmit value to server
    e.preventDefault();
    //.value attribute is to access/get the value from <input>/line 22  
    const value = grocery.value;

    //time.getTime() will returns date as ms(number, not string) since Jan 1, 1970
    //funny Dataset / use this methods to generate unique value/number on every submit(because we're not using any external library in this project)
    const id = new Date().getTime().toString();

    //add item to list : if value is not empty and editFlag is false
    if (value && !editFlag) {
        //create <articles> dynamically (with class and our unique ids)
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        
        //insert literal template within articles
        element.innerHTML = 
        `<p class="title">${value}</p>

        <div class="btn-container">
          <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
          <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>                
        </div>`;
        
        //append child between <div class="grocery-list">
        list.appendChild(element);

        //  visibility: visible; on this new class will override :hidden; value on .grocery-container
        container.classList.add('show-container');
        
        //ALERT
        displayAlert("item added to the list", "success");

    //editing item : if value is not empty and editFlag is true
    } else if (value && editFlag) {
        console.log("editing item");
    //there is no item : 
    } else {
        console.log("there is no item");
        //ALERT
        displayAlert("please enter value", "danger");
    }
}

// ****** FUNCTIONS **********
function displayAlert(text, action) {
    //manipulate css text content and class to display alert -> html line 19
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove this alert after 1 sec(1000 msec)
    setTimeout( () => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
