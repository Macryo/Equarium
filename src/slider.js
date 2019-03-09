
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
    var dots = document.getElementsByClassName("dot");
    var texts = document.getElementsByClassName("text");
    if (n > texts.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = texts.length
    }
    for (i = 0; i < texts.length; i++) {
        
        texts[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    texts[slideIndex - 1].style.display = "block";
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
        } else {
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
        } else {
            changeSlide(1)
        }
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