// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
//<input>
const grocery = document.querySelector('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
//default mode of editFlag is false
let editFlag = false;
let editID ="";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    //.value attribute is to get the value from <input>  
    const value = grocery.value;
    if (value) {
        //console.log('value is truthy');
    }

    //time.getTime() will returns date as ms(number, not string) since Jan 1, 1970
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        //console.log("add item to list");
    } else if (value && editFlag) {
        //console.log("editing item");
    } else {
        //console.log("there is no item");
        displayAlert("please enter value", "danger");
    }
}
// ****** FUNCTIONS **********
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //after 1 sec, remove this alert
    setTimeout( () => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
