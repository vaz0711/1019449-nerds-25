var link = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".submit-form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
  username.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !text) {
    evt.preventDefault();
    username.classList.add("invalid-input");
    email.classList.add("invalid-input");
    text.classList.add("invalid-input");
  }
});
