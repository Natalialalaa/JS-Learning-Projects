/*update and delete items from a grocery list and create a simple CRUD (Create, Read, Update, and Delete) application.

CRUD plays a very important role in developing full stack applications. Without it, you wouldn't be able to do things like edit or delete posts on your favorite social media platform.  

Key concepts covered:

DOMContentLoaded
new Date()
createAttribute()
setAttributeNode()
appendChild()
filter()
map()
localStorage.setitem/getitem object -> allows you to save key/value pairs in the browser.
localStorage.setItem(key, value);

json.stringify() is useful for, say, converting an object to a string format
which enbales it to be sent as data to a server or for use in other 
languages

json.parse() turns a string object back into a regular object
*/

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
//*** Submit value */
form.addEventListener("submit", addItem);
//*** Clear items */
clearBtn.addEventListener("click", clearItems);

window.addEventListener('DOMContentLoaded', setupItems);

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
        createListItem(id, value)
        //ALERT
        displayAlert("item added to the list", "success");
        addToLocalStorage(id, value);
        setBackToDefault();

    //editing item : if value is not empty and editFlag is true
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed", "danger");

        //editLocalStorage
        editLocalStorage(editID, value);
        setBackToDefault()
    //0 item storage/input: 
    } else {
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


//7:00;
//clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {
        items.forEach(function (item) {
            //*list = <div class="grocery-list">
            list.removeChild(item);
        });
    }
    //remove 'clear items' button automatically when all items has removed
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem('list');
}   

//delete and edit icons
function deleteItem(e){
    //using current target to get specific/ current element
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    //delete 'clear items' button and left over spaces when all notes has been removed.
    if(list.children.length === 0){
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
    removeFromLocalStorage(id);
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;

    grocery.value = editElement.innerHTML;
    editFlag = true;
    //accessing the specific element to edit by unique ID
    editID = element.dataset.id;

    submitBtn.textContent = "edit";
}

//set back entry field to default (auto erase field once value submitted)
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}




// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    //ES6 object
    const grocery = {id, value};

    let items = getlocalStorage();
    items.push(grocery);

    localStorage.setItem('list', JSON.stringify(items))
    //console.log("added to local storage")
}

function removeFromLocalStorage(id) {
    let items = getlocalStorage();

    items = items.filter(function(item) {
        if(item.id !== id){
            return item;
        }
    })
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getlocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items));
}

function getlocalStorage() {
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

//***local storage API */


// setItem
// getItem
// removeItem
// save as strings
//localStorage.setItem('orange', JSON.stringify(["item", "item2"]));
//const oranges = JSON.parse(localStorage.getItem("orange"));
//console.log(oranges);
//localStorage.removeItem("orange");


// ****** SETUP ITEMS **********

function setupItems(){
    let items = getlocalStorage();
    if(items.length > 0){
    items.forEach(function(item){
        createListItem(item.id, item.value)
    })
    container.classList.add('show-container');
    }
}

function createListItem(id, value){
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
        
    /****accessing delete and edit button by element. instead of document. (even bubbling / dynamic node), 
         because this item is not currently exist in .html on the first load */
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');

        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);

    //*******************************************************************************************************/

        //append element to list / <div class="grocery-list">
        list.appendChild(element);

        //  visibility: visible; on this new class will override :hidden; value on .grocery-container
        container.classList.add("show-container");
}