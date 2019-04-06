let hamburger = document.getElementById('hamburger');
let hambi = document.getElementById('hambi');
let menu_list = document.getElementById('menu_list');
let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
});


export default function mobileNav() {
    hamburger.style = " height: calc(var(--vh, 1vh) * 100); width: 100vw; min-width: 320px; background: var(--dark-blue)";
    hambi.style.display = 'none'
    menu_list.style.display = 'flex';
    document.getElementById('logo').style.left = "0%";
    document.getElementsByClassName('hidden')[0].style.display = 'flex';
    document.getElementsByClassName('hidden')[1].style.display = 'flex';
    document.getElementsByClassName('hidden')[2].style.display = 'flex';
    document.getElementById("exit").addEventListener('click', exit);

    for(let i = 0; i < 6; i++){
        document.getElementsByClassName('menu_child')[i].addEventListener('click', exit);
    }
}



function exit() {
    hamburger.style.height = '100%';
    hamburger.style.width = '100%';
    hamburger.style.minWidth = '0';
    document.getElementById('faceright').style.display = 'none';
    document.getElementById('faceleft').style.display = 'none';
    document.getElementById('exit').style.display = 'none';
    document.getElementById('logo').style.left = "20%";
    hamburger.style.background = 'transparent';
    hambi.style.display = 'block'
    menu_list.style.display = 'none';
}