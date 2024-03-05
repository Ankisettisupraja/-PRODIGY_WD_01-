document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var sections = document.querySelectorAll(".content");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }

        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 80) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});
