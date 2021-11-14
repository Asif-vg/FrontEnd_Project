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
        // behavior: "smooth"

    })
});

let customNav = document.querySelector(".custom-nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        customNav.style.position = "fixed";
        customNav.style.right = "0";
        customNav.style.left = "0";
        customNav.style.backgroundColor = "#fff"
            // customNav.style.transition = "all 0.3s linear"
        customNav.style.zIndex = "10"
        customNav.classList.add("active");



    } else {
        customNav.style.position = "relative";
        customNav.style.transition = "all 0.3s linear"
        customNav.classList.remove("active");



    }
})