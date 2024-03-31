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

function openMenu(){
  const data_stateConst = "data-state";
  const closeConst = "close";
  const openConst = "open";
  const menuElementSelectors = Array(".menu", ".menu ul", ".menu > ul > li > a", "body");
  const stateIcon = new Map([
    [openConst, "images/icon-close.svg"],
    [closeConst, "images/icon-hamburger.svg"]
  ]);

  const menuImage = document.querySelector('.hamburger-menu');
  const newState = menuImage.attributes[data_stateConst].value === closeConst ? openConst : closeConst;

  menuElementSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.setAttribute(data_stateConst, newState);  
    });
  });

  menuImage.src = stateIcon.get(newState);
  menuImage.attributes[data_stateConst].value = newState;
}