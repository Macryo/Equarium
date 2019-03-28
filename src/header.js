let hamburger = document.getElementById('hamburger');
let hambi = document.getElementById('hambi');
let menu_list = document.getElementById('menu_list');

export default function mobileNav() {
    hamburger.style=" height: 100vh; width: 100vw; background: var(--dark-blue)";
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
    document.getElementById('faceright').style.display = 'none';
    document.getElementById('faceleft').style.display = 'none';
    document.getElementById('exit').style.display = 'none';
    document.getElementById('logo').style.left = "20%";
    hamburger.style.background = 'transparent';
    hambi.style.display = 'block'
    menu_list.style.display = 'none';
}