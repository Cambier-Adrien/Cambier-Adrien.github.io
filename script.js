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
        languageSelector.classList.remove('visible');
        return;
    } else {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        window.location.href = `../french/${currentPage}`;
    }
  });

  en.addEventListener('click', function() {
    const metaLanguage = document.querySelector('meta[http-equiv="Content-Language"]');
    if (metaLanguage && metaLanguage.getAttribute('content') === 'en') {
        languageSelector.classList.remove('visible');
        return;
    } else {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        window.location.href = `../english/${currentPage}`;
    }
  });
}

toggleLanguage();

function searchPortfolio() {
  const theme = document.querySelector("#theme");
  const year = document.querySelector("#year");
  const themeSelect = document.querySelector("#project-theme");
  const yearSelect = document.querySelector("#project-year");
  const projectBox = document.querySelectorAll(".project-box");
  const themeText = document.querySelector("#project-theme div p");
  const yearText = document.querySelector("#project-year div p");
  const imgYearArrow = document.querySelector("#project-year div img[src='../img/vers-le-bas.png']");
  const imgThemeArrow = document.querySelector("#project-theme div img[src='../img/vers-le-bas.png']");

  themeSelect.addEventListener('click', function() {
    const tAll = document.querySelector("#tAll");
    const info = document.querySelector("#info");
    const network = document.querySelector("#network");
    const cyber = document.querySelector("#cyber");
    const imgtAll = document.querySelector("#tAll img");
    const imgInfo = document.querySelector("#info img");
    const imgNetwork = document.querySelector("#network img");
    const imgCyber = document.querySelector("#cyber img");
    theme.classList.toggle("visible");
    imgThemeArrow.classList.toggle("rotate90deg");

    info.addEventListener('click', function() {
      year.classList.remove("visible");
      imgInfo.classList.remove("invisible");
      imgNetwork.classList.add("invisible");
      imgCyber.classList.add("invisible");
      imgtAll.classList.add("invisible");
      imgYearArrow.classList.add("rotate90deg");
      themeText.textContent ="Informatique";
      projectBox.forEach(box => {
        if (box.contains(box.querySelector('.info'))) {
          box.style.display = "flex";
        } else {
          box.style.display = "none";
        }
      });
    });

    network.addEventListener('click', function() {
      year.classList.remove("visible");
      imgInfo.classList.add("invisible");
      imgNetwork.classList.remove("invisible");
      imgCyber.classList.add("invisible");
      imgtAll.classList.add("invisible");
      imgYearArrow.classList.add("rotate90deg");
      themeText.textContent ="Réseaux";
      projectBox.forEach(box => {
        if (box.contains(box.querySelector('.network'))) {
          box.style.display = "flex";
        } else {
          box.style.display = "none";
        }
      });
    });

    cyber.addEventListener('click', function() {
      year.classList.remove("visible");
      imgInfo.classList.add("invisible");
      imgNetwork.classList.add("invisible");
      imgCyber.classList.remove("invisible");
      imgtAll.classList.add("invisible");
      imgYearArrow.classList.add("rotate90deg");
      themeText.textContent ="Cybersécurité";
      projectBox.forEach(box => {
        if (box.contains(box.querySelector('.cyber'))) {
          box.style.display = "flex";
        } else {
          box.style.display = "none";
        }
      });
    });

    tAll.addEventListener('click', function() {
      year.classList.remove("visible");
      imgInfo.classList.add("invisible");
      imgNetwork.classList.add("invisible");
      imgCyber.classList.add("invisible");
      imgtAll.classList.remove("invisible");
      imgYearArrow.classList.add("rotate90deg");
      themeText.textContent ="Tout";
      projectBox.forEach(box => {
          box.style.display = "flex";
      });
    });

  });

  yearSelect.addEventListener('click', function() {
    const yAll = document.querySelector("#yAll");
    const y2023 = document.querySelector("#y2023");
    const y2024 = document.querySelector("#y2024");
    const c2023 = document.querySelector("#c2023");
    const c2024 = document.querySelector("#c2024");
    const img2023 = document.querySelector('#y2023 img');
    const img2024 = document.querySelector('#y2024 img');
    const imgyAll = document.querySelector("#yAll img");
    year.classList.toggle("visible");
    imgYearArrow.classList.toggle("rotate90deg");

    y2023.addEventListener('click', function() {
      c2023.style.display = "flex";
      c2024.style.display = "none";
      yearText.textContent ="2023";
      theme.classList.remove("visible");
      img2023.classList.remove("invisible");
      img2024.classList.add("invisible");
      imgyAll.classList.add("invisible");
      imgThemeArrow.classList.add("rotate90deg");
    });

    y2024.addEventListener('click', function() {
      
      c2023.style.display = "none";
      c2024.style.display = "flex";
      yearText.textContent ="2024";
      theme.classList.remove("visible");
      img2024.classList.remove("invisible");
      img2023.classList.add("invisible");
      imgyAll.classList.add("invisible");
      imgThemeArrow.classList.add("rotate90deg");
    });

    yAll.addEventListener('click', function() {
      
      c2023.style.display = "flex";
      c2024.style.display = "flex";
      yearText.textContent ="Tout";
      theme.classList.remove("visible");
      img2024.classList.add("invisible");
      img2023.classList.add("invisible");
      imgyAll.classList.remove("invisible");
      imgThemeArrow.classList.add("rotate90deg");
    });
    
  });
}


searchPortfolio();

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
