const colors = ["red", "green", "blue", "white"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
const randomNumber = getRandomNumber(); 
//testing : console.log(getRandomNumber());
//DOM of body's background colour =  random color in Colors array
document.body.style.backgroundColor = colors[randomNumber];
//changing html element with .color class to random color in array 
color.textContent = colors[randomNumber]
});

//make randomizer system - of Colors array
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}