
// let i =0 
// while(i<5){
//     console.log(i);
//     i++;
// }
// let index = 0
// do {
//     console.log(index)
//     index++;
// }while (index>5)
// let cart=[
//     "milk" ,"tea","bread","cheese","pasta",
//     "milk" ,"tea","bread","cheese","pasta",
//  "milk" ,"tea","bread","cheese","pasta"
// ];
// console.log(cart);
// for (let index = 0; index < cart.length ; index++){
//     console.log(cart[index]);
// }
// const number = [3, 10, 5, 20, 8, 15];
// for (let index = 0; index < number.length; index++) {
//     if (number[index] % 2 === 0) {
//         console.log(`${number[index]} is even`)
//     };
//     1
//     {
//         console.log(`${number[index]} is odd`);
//     }
// }
const number = [3, 10, 5, 20, 8, 15];
// console.log { $(mumber[index]) };
let heading = document.querySelector(".heading")
console.log(heading);
let button = document.querySelector(".clickme")
console.log("text")
let inputpassword = document.querySelector(".password")
let showpassword = document.querySelector(".show-password")
showpassword.addEventListener("click", function () {
    if (inputpassword.getAttribute("type") == 'text') {
        inputpassword.setAttribute("type", "password")
    } else {
        inputpassword.setAttribute("type", "text")

    }

});
let emailAddress = document.querySelector(".emailaddress")
let emailAlert = document.querySelector(".email-alert");
let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailAddress.addEventListener("blur", function () {
    let value = emailAddress.value
    if (value == "") {
        emailAlert.innerHTML = "Email is Empty"
        emailAddress.classList.add("border", "border-danger")
    } else if (pattern.test(emailAddress.value) == false) {
        emailAlert.innerHTML = "invalid email"
        emailAddress.classList.remove("border", "border-danger")
    } else {
        emailAlert.innerHTML = ""
        emailAddress.classList.remove("border", "border-danger")
    }
})

let navLink = document.querySelectorAll(".nav-link")

for (let index = 0; index < navLink.length; index++) {
    navLink[index].addEventListener("click", function () {
        for (let j = 0; j < navLink.length; j++) {
            navLink[j].classList.remove("active");
        }
        navLink[index].classList.add("active")
    })
}
localStorage.setItem("g2", ["pierre", "mhommed"])
localStorage.setItem("g3", ["ahmed"])
console.log(localStorage.getItem("g3"))
localStorage.clear();

let ScrollToTop = document.querySelector(".scroll-to-top")
ScrollToTop.addEventListener("click", function () {
    window.scrollTo(0, 0)
    console.log("test");

})

window.addEventListener("scroll", function () {
    console.log(window.scrolly);
    if (window.scrollY >= 500) {
        // ScrollToTop.style.display = 'block';
        ScrollToTop.classList.add("show")
    } else {
        // ScrollToTop.style.display = 'none';
        ScrollToTop.classList.remove("show")
    }

})

let sayHi = (name) => {
    console.log("sayhi ", name);

}
sayHi("ahmed");

setInterval(() => {
    console.log(1);
}, 5000)
setInterval(() => {
    console.log(2);
}, 10000)
setInterval(() => {
    console.log(3);
}, 2000)
setInterval(() => {
    console.log(4);
}, 1000)
