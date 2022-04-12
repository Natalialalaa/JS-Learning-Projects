const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener('click', (e) => {
    //id : history/vision/goals
    const id = e.target.dataset.id;

    if (id) {

    btns.forEach((btn) => {
        //remove active from other tab-btn
        btn.classList.remove('active');
        //except : the one being clicked
        e.target.classList.add('active');
    })

    //articles under our button setup
    articles.forEach((article) => {
        article.classList.remove('active')
    })
    
    const element = document.getElementById(id);
    element.classList.add('active');
    
    }
});