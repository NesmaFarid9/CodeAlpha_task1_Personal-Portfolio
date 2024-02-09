let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('.open')
};

ScrollReveal().reveal('.logo', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 200,
    origin: 'left'
   
});
ScrollReveal().reveal('.navbar', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 400,
    origin: 'top'
   
});
ScrollReveal().reveal('.menu-btn', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 520,
    origin: 'right'
   
});
ScrollReveal().reveal('.home-text span', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 600,
    origin: 'top'
   
});
ScrollReveal().reveal('.home-text h1', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 680,
    origin: 'left'
   
});
ScrollReveal().reveal('.home-text p', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 750,
    origin: 'right'
   
});
ScrollReveal().reveal('.main-btn', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 860,
    origin: 'left'
   
});
ScrollReveal().reveal('.share', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 950,
    origin: 'bottom'
   
});
ScrollReveal().reveal('.home-image', {
    distance: '40px',
    duration: 2500,
    reset: true,
    delay: 1000,
    origin: 'right'
   
});
