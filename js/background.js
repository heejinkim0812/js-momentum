const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
]
const backgroundForm = document.querySelector("body");
const choosenImage = images[Math.floor(Math.random()*images.length)];
backgroundForm.setAttribute('background', `img/${choosenImage} `);
//backgroundForm.id = "bgImg";

//const bg = document.createElement("div");
//const bgImage = document.createElement("img");
//bg.id = "bg";
//bgImage.src = `img/${choosenImage}`;
//bg.appendChild(bgImage);
//document.body.prepend(bg);