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
        if (startingX == evt.changedTouches[0].clientX){
            var dots = document.getElementsByClassName("dot");
            switch (evt.path[0].id) {
                case "sliderImg1":
                    dots[1].style.backgroundColor = "white";
                    dots[2].style.backgroundColor = "white";
                    currentSlide(1);
                    
                    break;
                case "sliderImg2":
                    dots[0].style.backgroundColor = "white";
                    dots[2].style.backgroundColor = "white";
                    currentSlide(1);
                    
                    break;
                case "sliderImg3":
                    dots[1].style.backgroundColor = "white";
                    dots[0].style.backgroundColor = "white";
                    currentSlide(3);
                    
                break;
            }
        }
        else {
            changeSlide(-1)
        }
        
    } else if (change > threshold) {
        
        if (startingX == evt.changedTouches[0].clientX) {
            var dots = document.getElementsByClassName("dot");
            switch (evt.path[0].id) {
                
                case "sliderImg1":
                    dots[1].style.backgroundColor = "white";
                    dots[2].style.backgroundColor = "white";
                    currentSlide(1);
                    
                    
                    break;
                case "sliderImg2":
                    dots[0].style.backgroundColor = "white";
                    dots[2].style.backgroundColor = "white";
                    currentSlide(1);
                    
                    break;
                case "sliderImg3":
                    dots[1].style.backgroundColor = "white";
                    dots[0].style.backgroundColor = "white";
                    currentSlide(3);
                    
                    break;
            }
        }
         else {
            changeSlide(1)
        }
    } else {
        return
    }
}
function isMobile(x) {
    if (x.matches) { // If media query matches
        document.getElementById("sliderImg1").src = "../Images/Slider_placeholder/bg_mobile.png";
        document.getElementById("sliderImg2").src = "../Images/Slider_placeholder/bg_mobile.png";
        document.getElementById("sliderImg3").src = "../Images/Slider_placeholder/bg_mobile.png";
    } else {
        document.getElementById("sliderImg1").src = "../Images/Slider_placeholder/2blobki.png";
        document.getElementById("sliderImg2").src = "../Images/Slider_placeholder/2blobki.png";
        document.getElementById("sliderImg3").src = "../Images/Slider_placeholder/2blobki.png";
    }
}

var x = window.matchMedia("(max-width: 480px)")
isMobile(x) // Call listener function at run time
x.addListener(isMobile) // Attach listener function on state changes
module.exports = {
    changeSlide,
    currentSlide,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    startingX
};