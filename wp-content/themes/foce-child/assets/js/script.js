
jQuery(document).ready(function($) {


  /*MENU BURGER*/
// Icone menu burger

  const icone_menuBurger = document.querySelector('.icone_menu-burger');
  const trait1 = document.querySelector('.trait1');
  const trait2 = document.querySelector('.trait2');
  const trait3 = document.querySelector('.trait3');

  icone_menuBurger.addEventListener('click', function() {
    icone_menuBurger.classList.toggle('crossed');
    if (icone_menuBurger.classList.contains('crossed')) {
      trait1.style.transform = 'rotate(45deg) translate(5px, 5px)';
      trait2.style.opacity = '0';
      trait3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      trait1.style.transform = 'none';
      trait2.style.opacity = '1';
      trait3.style.transform = 'none';
    }
  });

  // ouverture-fermeture menu-burger

  // document.querySelector('.menu-burger').addEventListener('click', function() {
  //   const menuOuvert = document.querySelector('.menu_ouvert');
  //   if (menuOuvert.style.display === 'flex') {
  //     menuOuvert.style.display = 'none';
  //   } else {
  //     menuOuvert.style.display = 'flex';
  //   }
  // });
  document.querySelector('.menu-burger').addEventListener('click', function() {
    const menuOuvert = document.querySelector('.menu_ouvert');
    if (menuOuvert.style.display === 'flex') {
      menuOuvert.style.opacity = '0'; // Réinitialiser l'opacité à 0
      setTimeout(() => {
        menuOuvert.style.display = 'none'; // Masquer le menu_ouvert après le fade-out
      }, 300); // Délai pour la transition de fade-out
    } else {
      menuOuvert.style.display = 'flex'; // Afficher le menu_ouvert
      setTimeout(() => {
        menuOuvert.style.opacity = '1'; // Ajouter l'opacité à 1 pour le fade-in
      }, 10); // Délai pour déclencher la transition
    }
  });
  

  // Initialize Swiper
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    spaceBetween: 60,
    grabCursor: true,
    centeredSlides: true,  
    loop: true,
    speed: 900,
    preventClicks: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
      on: {
          click(event) {
              swiper.slideTo(this.clickedIndex);
          },
      },
    // autoplay: {
    //   delay: 2500,
    // },
  });


  //FADE-IN SECTIONS

  window.addEventListener("load", function () {
    var sections = document.querySelectorAll(".hidden");
    sections.forEach(function (section) {
      section.classList.remove("hidden");
      section.style.opacity = 0;
      var fadeInEffect = setInterval(function () {
        if (parseFloat(section.style.opacity) < 1) {
          section.style.opacity = parseFloat(section.style.opacity) + 0.1;
        } else {
          clearInterval(fadeInEffect);
        }
      }, 100);
    });
  });

  // ANIMATION TITRES

  // Ajoutez la fonction handleScroll à l'écouteur d'événement "scroll"
  function handleScroll() {
    var elements = document.querySelectorAll(".animatedElement");

    // Pour chaque élément avec la classe .animatedElement
    elements.forEach(function (element) {
      var position = element.getBoundingClientRect();

      // Si l'élément est partiellement visible dans la fenêtre
      if (
        position.top < window.innerHeight &&
        position.bottom >= 0 &&
        position.left < window.innerWidth &&
        position.right >= 0 &&
        !element.classList.contains("animate") // Vérifie que l'élément n'a pas encore été animé
      ) {
        element.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  // SCROLL NUAGES

  function handleScroll() {
    var elements = document.querySelectorAll(".animatedElement");

    elements.forEach(function (element) {
      var position = element.getBoundingClientRect();

      // Vérifie si l'élément est dans la fenêtre en fonction de la position de défilement
      if (
        position.top < window.innerHeight &&
        position.bottom >= 0 &&
        position.left < window.innerWidth &&
        position.right >= 0 &&
        !element.classList.contains("animate")
      ) {
        element.classList.add("animate");
      }
    });
  }

  // //Utilisez un événement de défilement passif pour améliorer les performances
  window.addEventListener("scroll", handleScroll, { passive: true });

}); /* Fin de la balise jQuery */
