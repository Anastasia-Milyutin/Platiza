let buttons = document.querySelectorAll(".block-menu");

buttons.forEach(function (button) {
  let blockQuestionMenu = button.querySelector(".block-question-menu");

  blockQuestionMenu.style.display = "none";

  button.addEventListener("click", function () {
    if (blockQuestionMenu.style.display === "none") {
      blockQuestionMenu.style.display = "block";
    } else {
      blockQuestionMenu.style.display = "none";
    }
  });
});

var openBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".close-btn");
var activeBlock = document.querySelector(".block__button-open_active");


function showBlock() {
  activeBlock.style.display = "block";
}


function hideBlock() {
  activeBlock.style.display = "none";
}


openBtn.addEventListener("click", showBlock);
closeBtn.addEventListener("click", hideBlock);

const menuIcone = document.querySelector(".menu-icon"),
  header = document.querySelector("header");

menuIcone.addEventListener("click", () => {
  menuIcone.classList.toggle("menu-icon-active");
  header.classList.toggle("header__mobile");
});

document.querySelector(".menu-icon").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".menu").classList.toggle("menu-active");
});
