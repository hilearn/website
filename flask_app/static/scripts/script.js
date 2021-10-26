
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// accordion
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", () => {
        //console.log(question);
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
                //console.log(item);
            }
        });

        question.classList.toggle("show-text");

        //console.log(question);
    });
});
