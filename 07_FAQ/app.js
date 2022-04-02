/* Using selectors inside element */

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', () => {
        questions.forEach((questionsitem) => {
            if(questionsitem !== question){
                questionsitem.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
});



/*----------------------------------TRAVERSING DOM
//select all three question buttons, 3 (+) and (-) 
const btns = document.querySelectorAll('.question-btn'); */

/* we want to select the parent of answer field parents, which is the question field,
 then manipulate its class dynamically and changes button 
btns.forEach((btn) => { 
    btn.addEventListener('click', (e) => {
    //console.log(e.currentTarget.parentElement);, this will select <article class="question">
    //console.log(e.currentTarget.parentElement);, this wil select <div class="question-title"></div>
    const question = (e.currentTarget.parentElement.parentElement);
    question.classList.toggle('show-text')
    })
}); */