let acci = document.querySelectorAll(".acci");
let accp = document.querySelectorAll(".accp");

for (let i = 0; i < acci.length; i++) {

    acci[i].addEventListener("click", (e) => {
        e.preventDefault();

        accp[i].classList.toggle("show")
        acci[i].children[0].classList.toggle("show");


    })
}

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

let month = document.getElementById("month")
let year = document.getElementById("year")
let planItemInner = document.querySelectorAll(".plan-item-inner")
let check = document.querySelector(".check")
let week = document.querySelector(".week")

for (let i = 0; i < planItemInner.length; i++) {
    month.addEventListener("click", (e) => {
        e.preventDefault();
        planItemInner[i].classList.remove("active")
        check.classList.remove("active");
        week.classList.remove("show")


    })
    year.addEventListener("click", (e) => {
        e.preventDefault();
        planItemInner[i].classList.add("active")
        check.classList.add("active");
        week.classList.add("show")



    })
}