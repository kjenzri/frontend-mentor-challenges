export function validateForm(e) {
    const form = e.target;
    const formErrorMessage = form.querySelector("p");
    formErrorMessage.style.visibility = "hidden";
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      formErrorMessage.style.visibility = "visible";
    }
};

export function openMenu(){
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

export function swipe(event){
  const avatar = event.target.closest(".avatar");
  let avatar_index = avatar.attributes["data-index"].value;
  const button = document.querySelector(`.caroussel-button[data-index="${avatar_index}"]`);

  if(event.detail.dir == "right"){
    avatar_index++;
    if(avatar_index > 3){
      avatar_index = 0;
    }
  }
  else if(event.detail.dir == "left"){
    avatar_index--;
    if(avatar_index < 0){
      avatar_index = 3;
    }
  }

  var nextAvatar = document.querySelector(`.avatar[data-index="${avatar_index}"]`);
  var nextButton = document.querySelector(`.caroussel-button[data-index="${avatar_index}"]`);
  
  avatar.attributes["data-is-active"].value = false;
  button.attributes["data-is-active"].value = false;
  nextAvatar.attributes["data-is-active"].value = true;
  nextButton.attributes["data-is-active"].value = true;
}