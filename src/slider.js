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
    if (sliderTimeout !== undefined) {
        clearTimeout(sliderTimeout);
    }
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

let startingX;

function handleTouchStart(evt) {
    startingX = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    let touch = evt.touches[0];
    let change = startingX - touch.clientX;
    if (change <= 0) {
        return;
    }

    evt.preventDefault();
}

function handleTouchEnd(evt) {
    let change = startingX - evt.changedTouches[0].clientX;
    let threshold = screen.width / 3;
    if (change < threshold) {
        console.log(change + " " + threshold)
        changeSlide(-1)
    } else if (change > threshold) {
        console.log(change + " " + threshold)
        changeSlide(1)
    } else {
        return
    }
}


module.exports = {
    changeSlide,
    currentSlide,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    startingX
};