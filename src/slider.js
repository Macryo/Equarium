const BgUrls = ["url('../Images/Slider_placeholder/slider1.jpg')",
"url('../Images/Slider_placeholder/slider.jpeg')",
"url('../Images/Slider_placeholder/slider2.jpg')"]

const slider = document.getElementById('slider');

function changeBg1(){
    slider.style.backgroundImage = BgUrls[0]
}

function changeBg2() {
    slider.style.backgroundImage = BgUrls[1]
}

function changeBg3() {
    slider.style.backgroundImage = BgUrls[2]
}



module.exports = {changeBg1, changeBg2, changeBg3};