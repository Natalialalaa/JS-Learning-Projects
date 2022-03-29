/*
29/03/2022 
Create a carousel of reviews with + a button that generates random reviews.
A good feature to have on every professional e-commerce site.

Key concepts covered:
objects
DOMContentLoaded ->
  The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
addEventListener()
array.length
textContent
---------------------------------------------------------------------------------*/

// ! local ! data of members profile , stored in profilesData var  as array of objects 
const profilesData = [
  {
    id: 1,
    name: "Lara Lewis",
    job: "Front-End Dev",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I was very pleased with the first batch of items I obtained from your company; I’m using them every day with my U.S.-produced equipment here in Australia and all around Asia.",
  },
  {
    id: 2,
    name: "Gabriel Johnson",
    job: "Web Designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "I trust that this order, which is for the rest of the items to be included with the relocation of my items, will perform at the same level that the first one has.",
  },
  {
    id: 3,
    name: "Athena Ray",
    job: "SEO Specialist",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
    "Professionaly executed works, I will definitely be recommending you to anyone I know in need of various electronic equipment, converters, and transformers that have to work internationally.",
  },
  {
    id: 4,
    name: "Jason Gates",
    job: "Back-End Dev",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "My experience with this company has been excellent. I found them over the internet and worked with them on the phone over the course of a couple of months. He helped me to identify the type I would need. ",
  },
];


//store items from html document to variables to manipulate;
//Profile
const img = document.getElementById("person-img");
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info");

//Buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//initial member index to show on page
//profileIndex is a global variable, can be accessed/passed directly from below functions
let profileIndex = 0;

//DOMContentLoaded is a event that execute function directly when html page is  loaded , images excluded
window.addEventListener('DOMContentLoaded', () => {
  showMember(profileIndex);
});

function showMember() {
  const currentProfile = profilesData[profileIndex];

  /* this function will change image (.src) or content (.textContent) from html page 
  to currently selected object's type (currentProfile. ---) */

  img.src = currentProfile.img;
  author.textContent = currentProfile.name;
  job.textContent = currentProfile.job;
  info.textContent = currentProfile.text;
}


//show next or prev member's profile when certain button is clicked
nextBtn.addEventListener('click', () => {
  profileIndex++;
  /*when arrived at data limit or max member number, 
  reset to 0 or first member review data */
  if(profileIndex > profilesData.length - 1){
    profileIndex = 0;
  }
  showMember()
});

prevBtn.addEventListener('click', () => {
  profileIndex--;
  /*when arrived at less than 0 or min member number ,
  setup the value of profileIndex to -> its current value - 1 */  
  if(profileIndex < 0){
    profileIndex = profilesData.length -1
  }
  showMember()
});

randomBtn.addEventListener('click', () => {
  profileIndex = Math.floor(Math.random() * profilesData.length)
  showMember()
});