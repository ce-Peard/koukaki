jQuery(document).ready(function ($) {

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
      trait1.style.transform = "rotate(45deg) translate(5px, 5px)";
      trait2.style.opacity = "0";
      trait3.style.transform = "rotate(-45deg) translate(5px, -5px)";
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
  liensMenu.forEach(lien => {
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

  /************** INITIALIZE SWIPER ********/
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
  function animateCloudsOnScroll() {
    const cloud = document.querySelector(".cloud");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    // clouds.forEach((cloud) => {
    const cloudPosition = cloud.getBoundingClientRect().top + window.scrollY;

    // Vérifie si le nuage est visible à l'écran
    if (
      cloudPosition < scrollPosition + windowHeight &&
      cloudPosition + cloud.clientHeight > scrollPosition
    ) {
      // Nuage visible à l'écran
      if (scrollPosition > cloudPosition) {
        // Défilement vers le haut : appliquer animation reverse
        cloud.classList.add("cloud-animation-reverse");
        cloud.classList.remove("cloud-animation");
      } else {
        // Défilement vers le bas : appliquer animation normale
        cloud.classList.add("cloud-animation");
        cloud.classList.remove("cloud-animation-reverse");
      }
    } else {
      // Nuage non visible à l'écran : retirer les animations
      cloud.classList.remove("cloud-animation");
      cloud.classList.remove("cloud-animation-reverse");
    }
    // });
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

/* Apparition au défilement */
/*API Intersection Observer pour détecter quand des éléments de la page deviennent visibles à mesure que l'utilisateur fait défiler la page*/

const ratio = 0.1; /*l'élément est considéré comme visible lorsque 10 % de celui-ci est visible dans la fenêtre*/
const options = {
  root: null /*observe toute la fenêtre*/,
  rootMargin: "0px" /*sans marge supplémentaire*/,
  threshold: ratio /*utilise le ratio défini précédemment*/,
};

const handleIntersect = function (entries, observer) {
  /*Définit une fonction de rappel qui est appelée chaque fois que les éléments observés entrent dans ou sortent de la vue.*/
  entries.forEach(function (entry) {
    /*pour chaque élément observé, vérifie si le ratio d'intersection de cet élément est supérieur au ratio défini*/ if (
      entry.intersectionRatio > ratio
    ) {
      /*si oui*/
      entry.target.classList.remove(
        "appear"
      ); /*il supprime la classe CSS "appear" de l'élément */
      observer.unobserve(entry.target); /*et cesse de l'observer */
    }
  });
};

document.documentElement.classList.add(
  "appear-loaded"
); /*Ajoute la classe CSS "appear-loaded" à l'élément racine du document HTML lorsque le DOM est chargé*/
window.addEventListener("DOMContentLoaded", function () {
  /*Attend que le DOM soit complètement chargé avant d'exécuter le code à l'intérieur de la fonction de rappel.*/ const observer =
    new IntersectionObserver(
      handleIntersect,
      options
    ); /* à l'intérieur de cette fonction, un nouvel observateur d'intersection est créé */
  document.querySelectorAll(".appear").forEach(function (r) {
    /* Sélectionne tous les éléments ayant la classe CSS "appear" et pour chacun d'eux, observe leur intersection avec la fenêtre en utilisant l'observateur d'intersection créé précédemment. Lorsque ces éléments deviennent visibles selon le ratio défini, la fonction handleIntersect sera appelée*/ observer.observe(
      r
    );
  });
  // console.log(observer);
});
