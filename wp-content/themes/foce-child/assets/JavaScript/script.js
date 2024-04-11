document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");

  const checkVisibility = () => {
    fadeIns.forEach((fadeIn) => {
      const sectionOffset = fadeIn.offsetTop;
      const windowHeight = window.innerHeight;
      const scroll = window.scrollY || window.pageYOffset;

      if (scroll + windowHeight > sectionOffset) {
        fadeIn.classList.add("visible");
      }
    });
  };

  const handleScrollAndResize = () => {
    checkVisibility();
  };

  window.addEventListener("scroll", handleScrollAndResize);
  window.addEventListener("resize", handleScrollAndResize);

  checkVisibility();
});
