import _ from 'lodash';
import {changeBg1, changeBg2, changeBg3} from './slider';
function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());

// slider functionality
document.getElementById('slider_dot_1').addEventListener('click', changeBg1);
document.getElementById('slider_dot_2').addEventListener('click', changeBg2);
document.getElementById('slider_dot_3').addEventListener('click', changeBg3);
