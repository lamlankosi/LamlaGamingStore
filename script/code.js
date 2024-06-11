let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

let myProducts =
          JSON.parse(localStorage.getItem('myProducts')) ? JSON.parse(localStorage.getItem('myProducts')) : localStorage.setItem('myProducts', JSON.stringify(
            [
                {
                id: 1,
                productName: "PlayStation 5 Slim Console with disc drive (PS5 Slim)",
                category: "Console",
                description: "Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback.Sleek new slim design.",
                amount: 12648.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/PS5-Slim.jpg"
              },
              {
                id: 2,
                productName: "Xbox Series S 1TB Console",
                category: "Console",
                description: "Faster loading times with the custom SSD.Join the fun and play a large selection of engaging free-to-play games on Xbox.Gaming Resolution : 1440p",
                amount: 8300.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/67fb575e-0693-4cc6-aff7-4884483283cc.jpg"
              },
              {
                id: 3,
                productName: "PLAYSTATION PS5 DUALSENSE - GLACIER WHITE",
                category: "Controller",
                description: "Discover a deeper, highly immersive gaming experience1 that brings the action to life in the palms of your hands.Charge and play with a built-in battery  ",
                amount: 1300.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/controller.jpg"
              },
              {
                id: 4,
                productName: "PLAYSTATION PS5 DUALSENSE - Fibre Aqua (LIMITED EDITION)",
                category: "Controller",
                description: "Experience varying levels of force and tension as you interact with your in-game gear and environments.",
                amount: 3600.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/ps5Limited.png"
              },
              {
                id: 5,
                productName: "God Of War Ragnarok (PS5)",
                category: "compact disc",
                description: "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Venture Through All Nine Realms.",
                amount: 567.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/God-Of-War-Ragnarok-Playstation-5.png"
                },
              {
                id: 6,
                productName: "EA Sports FC24 (PS5)",
                category: "compact disc",
                description: "EA SPORTS FC 24 ushers in a new era with 19,000+ licensed players, 700+ teams, and 30+ leagues, offering an innovative and authentic gaming experience.",
                amount: 580.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/FC24.jpg"
                },
              {
                id: 7,
                productName: "Fortnite: The Last Laugh Bundle - PlayStation 5 PS5",
                category: "compact disc",
                description: "Epic Games already gave Fortnite players the chance to embody Gotham’s iconic hero with Fortnite - Batman Caped ",
                amount: 1500.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/fortnite-the-last-laugh-bundle-ps5-cover.jpg"
                },
              {
                id: 8,
                productName: "Playstation PS5 Grand Theft Auto V",
                category: "compact disc",
                description: "Story Mode and Grand Theft Aut- Online. Continue your adventure on PS5™ and transfer both your GTAV Story Mode",
                amount: 390.00,
                img_url: "https://lamlankosi.github.io/eCommerce-Images/gta-grand-theft-auto-5-ps5-new.png"
                },
              
            ]
          ))

//checkout
let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout'))
    : []
