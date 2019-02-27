import _ from 'lodash';
import {
  changeSlide,
  currentSlide,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart
} from './slider';

// function component() {
//   let element = document.createElement('div');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }

// document.body.appendChild(component());

// slider functionality
document.querySelector('.prev').addEventListener('click', function(){changeSlide(-1)});
document.querySelector('.next').addEventListener('click', function(){changeSlide(1)});
document.querySelector('#dot1').addEventListener('click', function(){currentSlide(1)});
document.querySelector('#dot2').addEventListener('click', function(){currentSlide(2)});
document.querySelector('#dot3').addEventListener('click', function(){currentSlide(3)});
// slider functionality
// document.querySelector('.HoverOver').style.color = "red";

document.querySelector('#sliderImg1').addEventListener('touchstart', handleTouchStart)
document.querySelector('#sliderImg1').addEventListener('touchmove', handleTouchMove)
document.querySelector('#sliderImg1').addEventListener('touchend', handleTouchEnd)

document.querySelector('#sliderImg2').addEventListener('touchstart', handleTouchStart)
document.querySelector('#sliderImg2').addEventListener('touchmove', handleTouchMove)
document.querySelector('#sliderImg2').addEventListener('touchend', handleTouchEnd)

document.querySelector('#sliderImg3').addEventListener('touchstart', handleTouchStart)
document.querySelector('#sliderImg3').addEventListener('touchmove', handleTouchMove)
document.querySelector('#sliderImg3').addEventListener('touchend', handleTouchEnd)



