const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')


//how to generate a hex color code ?
//Hex color code is # following by 6-symbol code value
//0-9 and A-F made of up to three 2-symbol elements.
btn.addEventListener('click', () => {
//my hex color generator
let hexColor = '#';
for (let i = 0; i < 6; i++ ){
    hexColor += hex[randomNumber()]
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})

//generate random number to choose from Hex array (0 until F)
function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}