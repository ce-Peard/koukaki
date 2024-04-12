//FADE-IN SECTIONS

window.addEventListener("load", function () {
  var sections = document.querySelectorAll(".hidden");
  sections.forEach(function (section) {
    section.classList.remove("hidden");
    section.style.opacity = 0;
    var fadeInEffect = setInterval(function () {
      if (section.style.opacity < 1) {
        section.style.opacity = parseFloat(section.style.opacity) + 0.1;
      } else {
        clearInterval(fadeInEffect);
      }
    }, 100);
  });
});

// ANIMATION TITRES

// const h2Elements = document.querySelectorAll('h2');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//     });
// });

// h2Elements.forEach(h2 => {
//     observer.observe(h2);
// });

// Sélectionner les éléments à observer
const targets = document.querySelectorAll('.scroll-animation');

// Options pour l'Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // 0.5 signifie que l'élément sera visible lorsque la moitié de celui-ci est dans la vue
};

// Fonction de callback pour l'Intersection Observer
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

// Créer l'instance de l'Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Observer chaque élément cible
targets.forEach(target => {
  observer.observe(target);
});


// SCROLL NUAGES

// Récupérer les éléments des nuages
const bigCloud = document.querySelector(".big_cloud");
const littleCloud = document.querySelector(".little_cloud");

// Fonction pour animer les nuages en fonction du défilement
function animateClouds() {
  const scrollPosition = window.scrollY;

  // Ajouter une classe pour déclencher l'animation lorsque la section est visible
  const sectionOffset = bigCloud.offsetTop; // Utilisez l'élément bigCloud ou littleCloud selon votre choix
  const windowHeight = window.innerHeight;

  if (scrollPosition + windowHeight > sectionOffset) {
    bigCloud.classList.add("animate");
    littleCloud.classList.add("animate");
  } else {
    bigCloud.classList.remove("animate");
    littleCloud.classList.remove("animate");
  }
}

// Écouter l'événement de défilement de la page et appeler la fonction d'animation
window.addEventListener("scroll", animateClouds);
console.log("j'ai scrollé");
