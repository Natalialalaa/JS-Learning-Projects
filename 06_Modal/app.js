/* ---------------------------------
Key concepts covered:

document.querySelector()
addEventListener()
classList.add() - classList.remove() rplaced by classList.toggle()
----------------------------------- */

const modal = document.querySelector(".modal");
const modalShadow = document.querySelector(".overlay"); 

const closeBtn = document.querySelector(".close-modal");;
const openBtn = document.querySelector(".show-modal");

const toggleModal = () => {
  modal.classList.toggle("hidden");
  modalShadow.classList.toggle("hidden");
};

openBtn.addEventListener("click", toggleModal);
modalShadow.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);



