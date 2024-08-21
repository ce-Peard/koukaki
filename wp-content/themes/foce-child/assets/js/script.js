jQuery(document).ready(function ($) {
  /*************/
  /*MENU BURGER*/
  /*************/

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
    lien.addEventListener("click", (event) => {
      event.preventDefault(); // Ajouter cette ligne
      if (menuOuvert.style.display === "flex") {
        icone_menuBurger.classList.remove("crossed");
        trait1.style.transform = "none";
        trait2.style.opacity = "1";
        trait3.style.transform = "none";
        menuOuvert.style.opacity = "0";
        setTimeout(() => {
          menuOuvert.style.display = "none";
          window.location.hash = lien.getAttribute("href"); // Naviguer manuellement à l'ancre
        }, 300);
      }
    });
  });

  /*******************/
  /*INITIALIZE SWIPER*/
  /*******************/

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

  /***************/
  /*SCROLL NUAGES*/
  /***************/

  let lastScrollPosition = 0;
  //stocke la dernière position de défilement de la fenêtre. Initialement fixée à 0

  function animateCloudsOnScroll() {
    //fonction est appelée à chaque fois que l'utilisateur fait défiler la page
    const clouds = document.querySelectorAll(".cloud");
    //sélectionne tous les éléments de la page qui ont la classe "cloud"
    const currentScrollPosition = window.scrollY;
    //stocke la position actuelle de défilement de la fenêtre en utilisant window.scrollY ( propriété JS qui renvoie le nombre de pixels que le document a  défilé verticalement à partir du haut de la fenêtre)

    clouds.forEach((cloud) => {
      //pour chaque élément "cloud", on exécute la fonction de rappel
      let displacement = (currentScrollPosition - lastScrollPosition) / 5;
      //on calcule le déplacement des nuages en fonction de la différence entre la position de défilement actuelle et la dernière position de défilement, divisée par 5 pour réduire l'effet
      let currentTransform =
        parseFloat(
          cloud.style.transform.replace("translateX(", "").replace("px)", "")
        ) || 0;
      //on extrait la valeur actuelle de la transformation translateX de l'élément "cloud" en utilisant parseFloat pour convertir la chaîne en nombre. Si aucune transformation n'est appliquée, la valeur par défaut est 0

      // Appliquer le nouveau déplacement
      cloud.style.transform = `translateX(${
        //met à jour la transformation translateX de l'élément "cloud" en ajoutant le déplacement calculé à la transformation actuelle
        currentTransform + displacement
      }px)`;
    });

    lastScrollPosition = currentScrollPosition;
    //met à jour la variable lastScrollPosition avec la position de défilement actuelle pour qu'elle soit prête pour la prochaine itération
  }

  // Écouter l'événement de défilement de la fenêtre pour animer les nuages
  window.addEventListener("scroll", animateCloudsOnScroll);

  animateCloudsOnScroll();
  //ajout d'un écouteur d'événement à la fenêtre pour appeler la fonction animateCloudsOnScroll à chaque fois que l'utilisateur fait défiler la page
}); /* Fin de la balise jQuery */

/******************/
/*FADE-IN SECTIONS*/
/******************/

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".appear"); //récuperer ttes les sections avec la classe appear

  const observer = new IntersectionObserver( //définit notre observer
    function (entries) {
      //passer en paramètre à cet observer tous les éléments à observer
      entries.forEach(function (entry) {
        //pour chaque élément à observer
        if (entry.isIntersecting) {
          //si l'élément est actuellement affiché à l'écran
          entry.target.classList.add("fade-in-active");
          //alors ajouter la classe fade-in-active pour activer l'animation d'apparition au scroll
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach(function (section) {
    //pour toutes les sections récupérées
    observer.observe(section);
    //inscrit ces sections dans la liste des élements observés par notre intersectionObserver
  });
});
