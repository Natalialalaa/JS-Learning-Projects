/*
learn how to create a counter and write conditions 
to change color based on positive or negative numbers displayed.
This project can be used in other projects like a pomodoro clock.

!! Key concepts covered:

document.querySelectorAll()
forEach()
addEventListener()
currentTarget and classList properties 
 [tuto :(https://www.youtube.com/watch?v=XYzSyPlY7_E), (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)] 
textContent

-----------------------------------------------------------*/

//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((button) => 
    button.addEventListener('click', (event) => {

        //display every class or class value this current clicked element has.
        //then store it in clickedBtn Variable
        const clickedBtn = event.currentTarget.classList;
        
        //math conditions to update the Count variable's value, 
        //when currently clicked button class contains relatable value name.
        if(clickedBtn.contains('decrease')) {
            count--;
        } else if (clickedBtn.contains('increase')) {
            count++;
        } else if (clickedBtn.contains('reset')) {
            count = 0;
        }

        //generate the contents of this <span id ="value">0</span> element from html page.
        value.textContent = count;
        
        //ternary operator to decide different colours for different values
        count > 0 ? value.style.color = 'green' : count < 0 ? value.style.color = 'red' : value.style.color = 'black';
    }

));