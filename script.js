function toggleLanguage() {
  const languageSelector = document.querySelector('.language-selector');
  const languageContent = document.querySelector('.language-content');

  languageContent.addEventListener('click', function() {
    languageSelector.classList.toggle('visible');
  });

  const fr = document.querySelector('#fr');
  const en = document.querySelector('#en');

  fr.addEventListener('click', function() {
    const metaLanguage = document.querySelector('meta[http-equiv="Content-Language"]');
    if (metaLanguage && metaLanguage.getAttribute('content') === 'fr') {
      languageSelector.classList.remove('visible'); // Ne cache le sélecteur que si la langue est déjà fr
      return;
    } else {
      window.location.href = "index.html";
    }
  });

  en.addEventListener('click', function() {
    const metaLanguage = document.querySelector('meta[http-equiv="Content-Language"]');
    if (metaLanguage && metaLanguage.getAttribute('content') === 'en') {
      languageSelector.classList.remove('visible'); // Ne cache le sélecteur que si la langue est déjà en
      return;
    } else {
      window.location.href = "index-en.html";
    }
  });
}

toggleLanguage();

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
  close.addEventListener('click', function() {
    backgroundNav.classList.add('hidden');
    Nav.classList.remove('menu-on');
  });
  nameMenuText.addEventListener('click', function() {
    backgroundNav.classList.add('hidden');
    Nav.classList.remove('menu-on');
  });
  links.forEach(link => {
    link.addEventListener('click', function() {
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
      event.preventDefault();

      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

addSmoothScrollToAnchors();