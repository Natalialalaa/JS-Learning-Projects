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
        
        //ALERT
        displayAlert("item added to the list", "success");
        addToLocalStorage(id, value);
        setBackToDefault();

    //editing item : if value is not empty and editFlag is true
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed", "danger");

        //editLocalStorage
        editLocalStorage(editID);
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
    //removeFromLocalStorage();
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
function addToLocalStorage(id,value) {
    console.log("added to local storage")
}

function removeFromLocalStorage(id) {

}

function editLocalStorage(id, value) {

}

// ****** SETUP ITEMS **********
