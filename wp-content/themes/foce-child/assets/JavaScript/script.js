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
