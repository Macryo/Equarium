var slideIndex = 1;
var sliderTimeout;
showSlides(slideIndex);

function changeSlide(n) {
    if (sliderTimeout !== undefined) {
        clearTimeout(sliderTimeout);
    }
    plusSlides(n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    sliderTimeout = setTimeout(function () {
        plusSlides(1)
    }, 8000); // Change image every 8 seconds
}


module.exports = {
    changeSlide,
    currentSlide,
};