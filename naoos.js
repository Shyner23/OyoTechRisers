// Typing effect for your h1
const heading = document.querySelector("h1");
const text = heading.textContent;
heading.textContent = "";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // speed of typing
    }
}
window.onload = typeEffect;

// Fade-in effect for all images
document.querySelectorAll("img").forEach(img => {
    img.style.opacity = 0;
    img.style.transition = "opacity 1.5s ease-in-out";
    img.onload = () => {
        img.style.opacity = 1;
    };
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Back to top button
const backToTop = document.createElement("button");
backToTop.textContent = "↑ Top";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.background = "#ff9800";
backToTop.style.color = "#fff";
backToTop.style.cursor = "pointer";
backToTop.style.borderRadius = "5px";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = [       
        "#FFC300", 
        "#FF9800", 
        "#D2691E",
 
        
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

