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

let names = document.querySelector("[name='name']").value;
let emails = document.querySelector("[name='email']").value;
let phones = document.querySelector("[name='phone']").value;
let subject = document.querySelector("[name='subject']").value;
let txtarea = document.querySelector("[name='txtarea']").value;
let customBtn = document.querySelector(".custom-btn");

customBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (names == "") {
        document.querySelector(".message-name").style.display = "inline"
    } else if (names = document.querySelector("[name='name']").value) {
        document.querySelector(".message-name").style.display = "none"

    }
    console.log(names);
    if (emails == "") {
        document.querySelector(".message-email").style.display = "inline"
    }
    if (phones == "") {
        document.querySelector(".message-phone").style.display = "inline"
    }
    if (subject == "") {
        document.querySelector(".message-subject").style.display = "inline"
    }
    if (txtarea == "") {
        document.querySelector(".message-txt").style.display = "inline"
    }





})
document.querySelector("[name='email']").addEventListener("focus", function(e) {
    e.preventDefault();
    if (document.querySelector("[name='name']").value == "") {
        document.querySelector(".message-name").style.display = "inline-block";
    }
})


document.querySelector("[name='phone']").addEventListener("focus", function(e) {
    e.preventDefault();
    if (document.querySelector("[name='email']").value == "") {
        document.querySelector(".message-email").style.display = "inline-block";
    }
})
document.querySelector("[name='subject']").addEventListener("focus", function(e) {
    e.preventDefault();
    if (document.querySelector("[name='phone']").value == "") {
        document.querySelector(".message-phone").style.display = "inline-block";
    }
})
document.querySelector("[name='name']").addEventListener("focus", function(e) {
    e.preventDefault();
    if (document.querySelector("[name='subject']").value == "") {
        document.querySelector(".message-subject").style.display = "inline-block";
    }
})

document.querySelector("[name='name']").addEventListener("change", function(e) {
    e.preventDefault();
    let value = this.value;

    if (value != "") {
        document.querySelector(".message-name").style.display = "none";

    }
})
document.querySelector("[name='email']").addEventListener("change", function(e) {
    e.preventDefault();
    let value = this.value;

    if (value != "") {
        document.querySelector(".message-email").style.display = "none";

    }
})
document.querySelector("[name='subject']").addEventListener("change", function(e) {
    e.preventDefault();
    let value = this.value;

    if (value != "") {
        document.querySelector(".message-subject").style.display = "none";

    }
})
document.querySelector("[name='phone']").addEventListener("change", function(e) {
    e.preventDefault();
    let value = this.value;

    if (value != "") {
        document.querySelector(".message-phone").style.display = "none";

    }
})
document.querySelector("[name='txtarea']").addEventListener("change", function(e) {
    e.preventDefault();
    let value = this.value;

    if (value != "") {
        document.querySelector(".message-txt").style.display = "none";

    }
})