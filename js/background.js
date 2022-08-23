var img = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
var bgImg = img[Math.floor(Math.random() * img.length)];

document.body.style.backgroundImage = `url(img/${bgImg})`;
