let circle = document.querySelector(".circle");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700) {
        circle.classList.add("active");
    } else {
        circle.classList.remove("active");

    }
})

circle.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        left: 0,

    })
});


let customNav = document.querySelector(".custom-nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        customNav.style.position = "fixed";
        customNav.style.right = "0";
        customNav.style.left = "0";
        customNav.style.backgroundColor = "#fff"
        customNav.style.zIndex = "10"
        customNav.classList.add("active");



    } else {
        customNav.style.position = "relative";
        customNav.style.transition = "all 0.3s linear"
        customNav.classList.remove("active");



    }
})



// ******* jQuery start here *******

$(document).ready(function() {
    $('.said-body').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        }
        // nav: true,

    });
    $('.customs-carusel').owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        }
    });
});

// ******* jQuery end here *******