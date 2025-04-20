// Lightbox functionality with fixes

let currentIndex = 0;

let images = [];

let lightbox, lightboxImg;

 

// Wait for the DOM to load before setting up the gallery

document.addEventListener("DOMContentLoaded", () => {

    // Authentication

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const username = document.getElementById("username").value;

            const password = document.getElementById("password").value;

            const loginMessage = document.getElementById("loginMessage");

 

            if ((username === "admin" && password === "admin123") ||

                (username === "guest" && password === "guest123")) {

                alert("Login successful!");

                window.location.href = "gallery.html";

            } else {

                loginMessage.textContent = "Invalid credentials. Please try again.";

            }

        });

    }

 

    // Lightbox setup (only on the gallery page)

    if (document.querySelector('.gallery')) {

        images = document.querySelectorAll('.gallery img');

        lightbox = document.getElementById('lightbox');

        lightboxImg = document.getElementById('lightbox-img');

 

        images.forEach((img, index) => {

            img.addEventListener("click", () => openLightbox(index));

        });

    }

});

 

function openLightbox(index) {

    currentIndex = index;

    lightboxImg.src = images[currentIndex].src;

    lightbox.style.display = 'flex';

}

 

function closeLightbox() {

    lightbox.style.display = 'none';

}

 

function prevImage(event) {

    event.stopPropagation();

    currentIndex = (currentIndex - 1 + images.length) % images.length;

    lightboxImg.src = images[currentIndex].src;

}

 

function nextImage(event) {

    event.stopPropagation();

    currentIndex = (currentIndex + 1) % images.length;

    lightboxImg.src = images[currentIndex].src;

}