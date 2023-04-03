const menuIcon = document.querySelector('.humberger');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', ()=>{
    navbar.classList.toggle('change')
})