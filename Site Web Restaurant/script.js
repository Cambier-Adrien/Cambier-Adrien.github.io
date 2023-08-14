document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        window.scrollTo({
            top: target.offsetTop - 3.5 * parseFloat(getComputedStyle(document.documentElement).fontSize), 
          behavior: 'smooth'   
        });
      }
    });
  });
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuOn = document.querySelector(".menu-on");
const menuOff = document.querySelector(".menu-off");
const navLinks = document.querySelector(".nav-links");
const link = document.querySelectorAll(".nav-links li a");
const menu = document.querySelector('#menu');
const cross = document.querySelector('.cross')

function toggleMenu() {
    menuOn.classList.toggle("show");
    menuOff.classList.toggle("show");
    navLinks.classList.toggle("on");
};

hamburgerMenu.addEventListener('click', toggleMenu);

link.forEach(links => {
    links.addEventListener('click', toggleMenu);
});
menu.addEventListener('click', function(){
    document.querySelector('.menu-background').classList.remove('off');
    document.querySelector('body').style.overflowY = "hidden";
});
cross.addEventListener('click', function(){
    document.querySelector('.menu-background').classList.add('off');
    document.querySelector('body').style.overflowY = "auto";
});