import _ from 'lodash';
import {changeSlide, currentSlide} from './slider';
function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());

// slider functionality
document.querySelector('.prev').addEventListener('click', function(){changeSlide(-1)});
document.querySelector('.next').addEventListener('click', function(){changeSlide(1)});
document.querySelector('#dot1').addEventListener('click', function(){currentSlide(1)});
document.querySelector('#dot2').addEventListener('click', function(){currentSlide(2)});
document.querySelector('#dot3').addEventListener('click', function(){currentSlide(3)});
// slider functionality



