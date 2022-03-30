// classList - shows/gets all classes
// contains - checks classList for specific class, return false or true
// add - add class
// remove - remove class
// toggle - toggles class
/*
30/03/2022
Creating responsive navbar for any kind of websites!

Key concepts covered:

document.querySelector()
addEventListener()
classList.toggle()
classList.remove()
+ css transition, overflow, line 179 : x:after transform: rotate
--------------------------------------------------------------------*/

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

/* Looong method :'( 
navToggle.addEventListener('click', () => {
    === see how classList token works ->
    console.log(navLinks.classList) ====

    if (navLinks.classList.contains('show-links')) {
        navLinks.classList.remove('show-links')
    } else {
        navLinks.classList.add('show-links')
    }
});
*/

/* Faster one ! :)*/
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle("show-links")
});