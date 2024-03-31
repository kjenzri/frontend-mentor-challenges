import { validateForm } from "./scripts/script";
import { openMenu } from "./scripts/script";

const email_form = document.getElementById('email-form');
email_form.addEventListener('submit', validateForm);

const hamburger_menu = document.querySelector('.hamburger-menu');
hamburger_menu.addEventListener('click', openMenu);

const avatars = document.querySelectorAll(".avatar");
avatars.forEach(avatar => {
    avatar.addEventListener('swiped-left', function(e) {
        console.log(e.target); // element that was swiped
        console.log(e.detail); // see event data below
    });

    avatar.addEventListener('swiped-right', function(e) {
        console.log(e.target); // element that was swiped
        console.log(e.detail); // see event data below
    });
});
