let circles = document.querySelector(".circle");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700) {
        circles.classList.add("active");
    } else {
        circles.classList.remove("active");

    }
})

circles.addEventListener("click", function() {

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

// let prcingPlan = document.querySelectorAll(".pricing-plan");
// let clicka = document.querySelector(".ca");

// clicka.addEventListener("click", (e) => {
//     e.preventDefault();
//     for (let i = 0; i < prcingPlan.length; i++) {

//         if (prcingPlan[i].style.display = "none") {
//             prcingPlan[i].classList.add("active")
//         } else {
//             prcingPlan[i].classList.remove("active")

//         }
//     }
// })

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
});

// ******* jQuery end here *******