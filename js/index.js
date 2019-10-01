// Your code goes here
let body = document.querySelector("body");
let home = document.querySelector(".home");
let header = document.querySelector(".main-navigation")
let navBar = document.querySelector("nav")
let links = document.querySelectorAll("a")
let busImg = document.querySelector(".intro img")

body.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
});

home.addEventListener("click", event => {
    event.target.style.backgroundColor = "yellow"; 
    event.stopPropagation();
});

window.addEventListener("scroll", () => {body.style.backgroundColor = "blue"});

body.addEventListener("mouseover", event => {event.target.style.backgroundColor = "white"});

links.forEach(link => {
    link.addEventListener("click", event => {
        event.target.style.color = "white";
        event.stopPropagation();
        event.preventDefault();
    });

    link.addEventListener("wheel", event => {
        event.target.style.border = "1px solid black"
    })
});

header.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "grey"
    event.stopPropagation()
})

navBar.addEventListener("dblclick", event => {event.target.style.backgroundColor = "blue"})

body.addEventListener("keydown", event => event.target.style.backgroundColor = "pink")

busImg.addEventListener("drag", event => event.target.style.opacity = ".1")

busImg.addEventListener("dragend", event => event.target.style.opacity = "1")

window.addEventListener("resize", event => body.style.backgroundColor = "salmon")

header.addEventListener("mousemove", event => {event.target.style.backgroundColor = "brown"})