import _ from 'lodash';
import {
  changeSlide,
  currentSlide,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart
} from './slider';
import VanillaTilt from 'vanilla-tilt';

// function component() {
//   let element = document.createElement('div');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }



// slider functionality

document.querySelector('#dot1').addEventListener('click', function(){currentSlide(1)});
document.querySelector('#dot2').addEventListener('click', function(){currentSlide(2)});
document.querySelector('#dot3').addEventListener('click', function(){currentSlide(3)});
var x = window.matchMedia("(max-width: 480px)")
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
// document.querySelector('.HoverOver').style.color = "red";

// document.querySelector('#sliderImg1').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg1').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg1').addEventListener('touchend', handleTouchEnd)

// document.querySelector('#sliderImg2').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg2').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg2').addEventListener('touchend', handleTouchEnd)

// document.querySelector('#sliderImg3').addEventListener('touchstart', handleTouchStart)
// document.querySelector('#sliderImg3').addEventListener('touchmove', handleTouchMove)
// document.querySelector('#sliderImg3').addEventListener('touchend', handleTouchEnd)

function component() {
  let element = document.createElement('span');
  element.innerHTML = "Wrong email btw";
  return element;
  
}
var form = document.getElementById('form')
 form.insertBefore(component(), form.firstChild);
// console.log(form.querySelectorAll('input'))

// form.appendChild(component());
// document.getElementById('name')

