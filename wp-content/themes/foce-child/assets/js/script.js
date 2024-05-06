jQuery(document).ready(function ($) {
  /*MENU BURGER*/
  /*MENU BURGER*/

  // Sélection des éléments nécessaires
  const icone_menuBurger = document.querySelector(".icone_menu-burger");
  const trait1 = document.querySelector(".trait1");
  const trait2 = document.querySelector(".trait2");
  const trait3 = document.querySelector(".trait3");
  const menuOuvert = document.querySelector(".menu_ouvert");
  const liensMenu = document.querySelectorAll(".menu_ouvert a"); // Sélection de tous les liens dans le menu ouvert

  // Fonction pour ouvrir ou fermer le menu
  function toggleMenu() {
    icone_menuBurger.classList.toggle("crossed");
    if (icone_menuBurger.classList.contains("crossed")) {
      trait1.style.transform = "rotate(45deg) translate(7px, 5px)";
      trait2.style.opacity = "0";
      trait3.style.transform = "rotate(-45deg) translate(7px, -5px)";
      menuOuvert.style.display = "flex";
      setTimeout(() => {
        menuOuvert.style.opacity = "1";
      }, 10);
    } else {
      trait1.style.transform = "none";
      trait2.style.opacity = "1";
      trait3.style.transform = "none";
      menuOuvert.style.opacity = "0";
      setTimeout(() => {
        menuOuvert.style.display = "none";
      }, 300);
    }
  }

  // Ajout de l'écouteur d'événements sur l'icône du menu burger
  icone_menuBurger.addEventListener("click", toggleMenu);

  // Ajout de l'écouteur d'événements sur chaque lien du menu pour fermer le menu après un clic
  liensMenu.forEach((lien) => {
    lien.addEventListener("click", () => {
      if (menuOuvert.style.display === "flex") {
        icone_menuBurger.classList.remove("crossed");
        trait1.style.transform = "none";
        trait2.style.opacity = "1";
        trait3.style.transform = "none";
        menuOuvert.style.opacity = "0";
        setTimeout(() => {
          menuOuvert.style.display = "none";
        }, 300);
      }
    });
  });

  // Initialize Swiper
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    spaceBetween: 60,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 900,
    preventClicks: true, //permet de mettre en pause au clic
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
    autoplay: {
      delay: 2500,
    },
  });

  //FADE-IN SECTIONS

  // window.addEventListener("load", function () {
  //   var sections = document.querySelectorAll(".hidden");
  //   sections.forEach(function (section) {
  //     section.classList.remove("hidden");
  //     section.style.opacity = 0;
  //     var fadeInEffect = setInterval(function () {
  //       if (parseFloat(section.style.opacity) < 1) {
  //         section.style.opacity = parseFloat(section.style.opacity) + 0.1;
  //       } else {
  //         clearInterval(fadeInEffect);
  //       }
  //     }, 100);
  //   });
  // });

  // ANIMATION TITRES au scroll

  // SCROLL NUAGES

  // Animation au scroll
  // Fonction pour animer les nuages lors du défilement de la page
  let lastScrollPosition = 0;

  function animateCloudsOnScroll() {
    const clouds = document.querySelectorAll(".cloud");
    const currentScrollPosition = window.scrollY;
  
    clouds.forEach(cloud => {
      let displacement = (currentScrollPosition - lastScrollPosition) / 5; // Diviseur pour réduire l'effet
      let currentTransform = parseFloat(cloud.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  
      // Appliquer le nouveau déplacement
      cloud.style.transform = `translateX(${currentTransform + displacement}px)`;
    });
  
    // Mise à jour de la dernière position de défilement
    lastScrollPosition = currentScrollPosition;
  }
  
  // Écouter l'événement de défilement de la fenêtre pour animer les nuages
  window.addEventListener("scroll", animateCloudsOnScroll);
  
  // Animer les nuages lors du chargement initial de la page
  animateCloudsOnScroll();

  // function handleScroll() {
  //   var elements = document.querySelectorAll(".animatedElement");

  //   elements.forEach(function (element) {
  //     var position = element.getBoundingClientRect();

  //     // Vérifie si l'élément est dans la fenêtre en fonction de la position de défilement
  //     if (
  //       position.top < window.innerHeight &&
  //       position.bottom >= 0 &&
  //       position.left < window.innerWidth &&
  //       position.right >= 0 &&
  //       !element.classList.contains("animate")
  //     ) {
  //       element.classList.add("animate");
  //     }
  //   });
  // }

  // //Utilisez un événement de défilement passif pour améliorer les performances
  // window.addEventListener("scroll", handleScroll, { passive: true });
}); /* Fin de la balise jQuery */

// animation fade-in des sections

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".appear"); //récuperer ttes les sections avec la classe appear

  const observer = new IntersectionObserver( //définit notre observer
    function (entries) {
      //passer en paramètre à cet observer tous les élémts à observer
      entries.forEach(function (entry) {
        //pr chaque élémt à observer
        if (entry.isIntersecting) {
          //si l'élémt est actuelmt affiché à l'écran
          entry.target.classList.add("fade-in-active"); //alors ajouter la classe fade-in-active pour activer l'animation d'apparition au scroll
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach(function (section) {
    //pour ttes les sections récupérées
    observer.observe(section); //inscrit ces sections dans la liste des élemts observés par notre intersectionObserver
  });
});
