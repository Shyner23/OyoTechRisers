document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = [       
        "#FFC300", 
        "#FF9800", 
        "#D2691E",
 
        
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});