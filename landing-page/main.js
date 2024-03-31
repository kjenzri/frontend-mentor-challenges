import { validateForm } from "./scripts/script";
import { openMenu } from "./scripts/script";
import { swipe } from "./scripts/script";

const email_form = document.getElementById('email-form');
email_form.addEventListener('submit', validateForm);

const hamburger_menu = document.querySelector('.hamburger-menu');
hamburger_menu.addEventListener('click', openMenu);

const swipe_left = "left";
const swipe_right = "right";

const avatars = document.querySelectorAll(".avatar");
avatars.forEach(avatar => {
    avatar.addEventListener('swiped-left', swipe);

    avatar.addEventListener('swiped-right', swipe);
});
