const email_form = document.getElementById('email-form');
email_form.addEventListener('submit', validateForm);

function validateForm(e) {
    const form = e.target;
    const formErrorMessage = form.querySelector("p");
    formErrorMessage.style.visibility = "hidden";
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      formErrorMessage.style.visibility = "visible";
    }
  };