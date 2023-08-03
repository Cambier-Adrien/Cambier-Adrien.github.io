function toggleMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const backgroundNav = document.querySelector('.background-nav');
    const Nav = document.querySelector('.nav-links');
    const close = document.querySelector('.close');
    const links = document.querySelectorAll('.nav-links .links');
    const nameMenuText = document.querySelector('.name-menu-text');
  
    hamburgerMenu.addEventListener('click', function() {
        backgroundNav.classList.remove('hidden');
        Nav.classList.add('menu-on');
    });
    close.addEventListener('click', function(){
        backgroundNav.classList.add('hidden');
        Nav.classList.remove('menu-on');
    });
    nameMenuText.addEventListener('click', function(){
        backgroundNav.classList.add('hidden');
        Nav.classList.remove('menu-on');
    });
    links.forEach(link=>{
        link.addEventListener('click',function(){
            backgroundNav.classList.add('hidden');
            Nav.classList.remove('menu-on');
        });
    });
  }
  
  toggleMenu();

  function addSmoothScrollToAnchors() {
    const anchors = document.querySelectorAll('a[href^="#"]');
  
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement de clic par défaut
  
        const targetId = anchor.getAttribute('href'); // Obtient la valeur de l'attribut href
        const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible
  
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset; // Calcul du décalage
  
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Utilise l'animation fluide
          });
        }
      });
    });
  }
  
  addSmoothScrollToAnchors();