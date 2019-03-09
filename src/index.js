import _ from 'lodash';
import {
  changeSlide,
  currentSlide,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart
} from './slider';

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
// document.querySelector('.HoverOver').style.color = "red";
var x = window.matchMedia("(max-width: 480px)")
isMobile(x) // Call listener function at run time
x.addListener(isMobile) // Attach listener function on state changes
var z = window.matchMedia("(min-width: 481px)")
isNotMobile(z) // Call listener function at run time
z.addListener(isNotMobile) // Attach listener function on state changes

function isNotMobile(z) {
  if (z.matches) { // If media query matches
    try {
      document.getElementById("meet_us_grid").style.display = "grid";
      document.getElementById("meetus_expand").remove();
      document.getElementById("meetus_expand_button").remove();
    } catch (error) {
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
    

  }
}

function more(){

  if (document.getElementById("more").innerHTML === "więcej +") {
    document.getElementById("meet_us_grid").style.display = "grid";
    document.getElementById("more").innerHTML = "mniej -";

  } else {
    if (document.getElementById("more").innerHTML === "mniej -") {
        document.getElementById("meet_us_grid").style.display = "none";
        document.getElementById("more").innerHTML = "więcej +";
    }
  }
  
}

function isMobile(x) {
  if (x.matches) { // If media query matches
    document.getElementById("meet_us_grid").style.display = "none";
    
    document.getElementById("meet_us").appendChild(document.createElement("div")).setAttribute("id", "meetus_expand")
    document.getElementById("meetus_expand").innerHTML = "<p>Nasz zespół</p><p>Poznaj nasz zespół</p>"
    document.getElementById("meet_us").appendChild(document.createElement("div")).setAttribute("id", "meetus_expand_button")
    document.getElementById("meetus_expand_button").innerHTML = "<p id='more'>więcej +</p>"
    
    document.getElementById("more").addEventListener("click", more);
    
  }
}
// if (document.getElementById("more").innerHTML === "mniej -") {
//   document.getElementById("meet_us_grid").style.display = "none";
//   document.getElementById("more").innerHTML = "więcej +";
// } 


document.querySelector('#sliderImg1').addEventListener('touchstart', handleTouchStart)
document.querySelector('#sliderImg1').addEventListener('touchmove', handleTouchMove)
document.querySelector('#sliderImg1').addEventListener('touchend', handleTouchEnd)

document.querySelector('#sliderImg2').addEventListener('touchstart', handleTouchStart)
document.querySelector('#sliderImg2').addEventListener('touchmove', handleTouchMove)
document.querySelector('#sliderImg2').addEventListener('touchend', handleTouchEnd)

document.querySelector('#sliderImg3').addEventListener('touchstart', handleTouchStart)
document.querySelector('#sliderImg3').addEventListener('touchmove', handleTouchMove)
document.querySelector('#sliderImg3').addEventListener('touchend', handleTouchEnd)



