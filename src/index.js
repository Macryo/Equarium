import _ from 'lodash';
import validate from './form';
import {
  changeSlide,
  currentSlide,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart
} from './slider';
import {MeetUsMobileBehavior, MeetUsDesktopBehavior} from './meetus';
import VanillaTilt from 'vanilla-tilt';

// media queries variables//
var x = window.matchMedia("(max-width: 480px)")
var z = window.matchMedia("(min-width: 481px)")
// media queries variables//


// slider functionality//
document.querySelector('#dot1').addEventListener('click', function(){currentSlide(1)});
document.querySelector('#dot2').addEventListener('click', function(){currentSlide(2)});
document.querySelector('#dot3').addEventListener('click', function(){currentSlide(3)});

isMobile(x) // Call listener function at run time
x.addListener(isMobile) // Attach listener function on state changes
let element = document.querySelector("#sliderImg1")
VanillaTilt.init(element);
function isMobile(x) {
  if (x.matches) { // If media query matches
    document.getElementById("sliderImg1").src = "../Images/Slider_placeholder/bg_mobile.png";
    element.vanillaTilt.destroy();
  } else {
    document.getElementById("sliderImg1").src = "../Images/Slider_placeholder/2blobki.png";
    VanillaTilt.init(element);
  }
}
// slider functionality

// contact form 

document.getElementById('form').addEventListener('submit', validate);

//contact form
// slider functionality//


//meetus functionality//
MeetUsMobileBehavior(x) // Call listener function at run time
x.addListener(MeetUsMobileBehavior) // Attach listener function on state changes

MeetUsDesktopBehavior(z) // Call listener function at run time
z.addListener(MeetUsDesktopBehavior) // Attach listener function on state changes
//








// document.querySelector('#sliderImg1').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg1').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg1').addEventListener('touchend', handleTouchEnd)

// document.querySelector('#sliderImg2').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg2').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg2').addEventListener('touchend', handleTouchEnd)

// document.querySelector('#sliderImg3').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg3').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg3').addEventListener('touchend', handleTouchEnd)












