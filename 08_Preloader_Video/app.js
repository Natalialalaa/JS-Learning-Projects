//to read : https://thisthat.dev/dom-content-loaded-vs-load/

/*
03/03/2022
Key concepts covered:

document.querySelector()
addEventListener()
classList.contains()
classList.add()
classList.remove()
play()
pause()
*/

//button setup
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause();
    }
    else {
        btn.classList.remove('slide')
        video.play();
    }
});


//preloader setup
const preloader = document.querySelector('.preloader');

window.addEventListener('load' , () => {
    preloader.classList.add("hide-preloader")
});
