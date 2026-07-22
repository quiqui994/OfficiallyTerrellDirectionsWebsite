const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".clickable").forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});
