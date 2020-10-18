//TODO : Slide the banner after a certain ammount of time!!

const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/*SHOW*/
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');