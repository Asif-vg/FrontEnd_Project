let acci = document.querySelectorAll(".acci");
let accp = document.querySelectorAll(".accp");
let customNavbar = document.querySelector(".custom-nav")
for (let i = 0; i < acci.length; i++) {

    acci[i].addEventListener("click", (e) => {
        e.preventDefault();

        accp[i].classList.toggle("show")
        acci[i].children[0].classList.toggle("show");


    })
}

let circle = document.querySelector(".circle");


circle.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        left: 0,

    })
});



let right = document.querySelector(".custom-right-content");
let customDesign = document.getElementById("custom-design");
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > customDesign.getBoundingClientRect().top + 200) {
        right.style.transform = "translateX(0px)";
    }
})
let left = document.querySelector(".market-left-content");
let digitalMarketing = document.getElementById("digital-marketing");
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > digitalMarketing.getBoundingClientRect().top + 600) {
        left.style.transform = "translateX(0px)";
    }
})


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
        customNav.style.transition = "all 0.3s linear"
        customNav.classList.remove("active");
    }

    if (window.pageYOffset > 200) {
        circle.classList.add("active");
    } else {
        circle.classList.remove("active");
        customNavbar.style.backgroundColor = "transparent"


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



let formSubmit = document.getElementById("submit");
let forms = document.getElementById("form")

let formInput = document.getElementById("formInput")


formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (formInput.innerHTML == "") {
        forms.classList.add("transform")
    }
})


let c1 = document.querySelector(" #info #c1")
let c2 = document.querySelector(" #info #c2")
let c3 = document.querySelector(" #info #c3")
let c4 = document.querySelector(" #info #c4")
window.addEventListener("scroll", (e) => {
    e.preventDefault();
    if (window.pageYOffset > 150) {
        c1.classList.add("show")
        c2.classList.add("show")
        c3.classList.add("show")
        c4.classList.add("show")
    }
})
let cf1 = document.querySelector(" #features #cf1")
let cf2 = document.querySelector(" #features #cf2")
let cf3 = document.querySelector(" #features #cf3")
let cf4 = document.querySelector(" #features #cf4")
let cf5 = document.querySelector(" #features #cf5")
let cf6 = document.querySelector(" #features #cf6")
window.addEventListener("scroll", (e) => {
    e.preventDefault();
    if (window.pageYOffset > 2000) {
        cf1.classList.add("show")
        cf2.classList.add("show")
        cf3.classList.add("show")
        cf4.classList.add("show")
        cf5.classList.add("show")
        cf6.classList.add("show")
    }
})
let cv1 = document.querySelector(" #video-strax #cv1")
let cv2 = document.querySelector(" #video-strax #cv2")
let cv3 = document.querySelector(" #video-strax #cv3")
let cv4 = document.querySelector(" #video-strax #cv4")
let cv5 = document.querySelector(" #video-strax #cv5")
window.addEventListener("scroll", (e) => {
    e.preventDefault();
    if (window.pageYOffset > 4000) {
        cv1.classList.add("show")
        cv2.classList.add("show")
        cv3.classList.add("show")
        cv4.classList.add("show")
        cv5.classList.add("show")

    }
})
let cm1 = document.querySelector(" #meet #cm1")
let cm2 = document.querySelector(" #meet #cm2")
let cm3 = document.querySelector(" #meet #cm3")
let cm4 = document.querySelector(" #meet #cm4")
let meet = document.querySelector("#meet")
window.addEventListener("scroll", (e) => {
    e.preventDefault();
    if (window.pageYOffset > 6000) {
        cm1.classList.add("show")
        cm2.classList.add("show")
        cm3.classList.add("show")
        cm4.classList.add("show")
    }
})



// ******* jQuery start here *******

$(document).ready(function() {
    $('.custom-owl-carousel2').owlCarousel({
        items: 2,
        margin: 10,
        loop: true,
        nav: true,
        responsiveClass: true,
        autoplay: true,
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
    });
    $('.custom-owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        }
    });
});



// ******* jQuery end here *******