var nav_links = document.querySelector(".nav_links");
var hamburger = document.querySelector(".hamburger");
var bar1 = document.querySelector(".bar1");
var bar2 = document.querySelector(".bar2");
var bar3 = document.querySelector(".bar3");

document.querySelector(".hamburger").addEventListener ("click", function() {
    console.log("Toggling fadein class")
    nav_links.classList.toggle("fadein")
    hamburger.classList.toggle("open")
    bar1.classList.toggle("bar_open")
    bar2.classList.toggle("bar_open")
    bar3.classList.toggle("bar_open")
})