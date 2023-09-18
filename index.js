let buttons = document.querySelectorAll(".block-menu");

buttons.forEach(function(button) {
    let blockQuestionMenu = button.querySelector(".block-question-menu"); 


    blockQuestionMenu.style.display = 'none';

    button.addEventListener("click", function() {
        if (blockQuestionMenu.style.display === "none") {
            blockQuestionMenu.style.display = "block";
        } else {
            blockQuestionMenu.style.display = "none";
        }
    });
});