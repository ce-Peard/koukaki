document.addEventListener('DOMContentLoaded', function() {
    var fadeIns = document.querySelectorAll('.fade-in');
    function checkVisibility() {
        fadeIns.forEach(function(fadeIn) {
            var sectionOffset = fadeIn.offsetTop;
            var windowHeight = window.innerHeight;
            var scroll = window.scrollY || window.pageYOffset;

            if (scroll + windowHeight > sectionOffset) {
                fadeIn.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    checkVisibility();
});

