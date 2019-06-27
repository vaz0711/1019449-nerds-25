    var link = document.querySelector(".feedback-button");
  
    var popup = document.querySelector(".modal");
    var close = popup.querySelector(".modal-close");
    
    var form = popup.querySelector(".submit-form");
    var username = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
    var text = popup.querySelector("[name=text]");
    
    var isStorageSupport = true;
    var storage = "";
  
    try {
      storage = localStorage.getItem("username");
    } catch (err) {
      isStorageSupport = false;
    }
    
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("visually-hidden");
      
      if (storage) {
        username.value = storage;
        email.value = storage;
        text.focus();
      } else {
        username.focus();
      }
    });
    
    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("visually-hidden");
      //popup.classList.remove("modal-error");
    });
    
    /*form.addEventListener("submit", function (evt) {
      if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
      }
    });*/
    
    /*window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.add("modal-show");
          //popup.classList.remove("modal-error");
        }
      }
    });*/