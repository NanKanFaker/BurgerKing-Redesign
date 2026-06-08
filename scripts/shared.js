/*=============== SHOW MENU ===============*/
function showMenu(menu, toggleBtn) {
    const navMenu = document.getElementById(menu),
        toggleButton = document.getElementById(toggleBtn)
    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}

showMenu('nav-menu', 'nav-toggle');


/*=============== CHANGE BG HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('annouce-bar')

    this.scrollY > 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== SHOW ORDER INFO ===============*/


/*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }

// navLink.forEach( (link)=>{
//     link.addEventListener('click', linkAction)
// })