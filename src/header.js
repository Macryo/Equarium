
export default function mobileNav() {
    document.getElementById('hamburger').style.height = '600%';
    document.getElementById('logo').style.left = "0%";
    document.getElementById('hamburger').style.background = 'var(--blue)';
    document.getElementById('hambi').style.display = 'none'
    document.getElementById('menu_list').style.display = 'flex';
    document.getElementsByClassName('hidden')[0].style.display = 'flex';
    document.getElementsByClassName('hidden')[1].style.display = 'flex';
    document.getElementsByClassName('hidden')[2].style.display = 'flex';

    document.getElementById("exit").addEventListener('click', function () {
        document.getElementById('hamburger').style.height = '100%';
        document.getElementById('faceright').style.display = 'none';
        document.getElementById('faceleft').style.display = 'none';
        document.getElementById('exit').style.display = 'none';
        document.getElementById('logo').style.left = "20%";
        document.getElementById('hamburger').style.background = 'transparent';
        document.getElementById('hambi').style.display = 'block'
        document.getElementById('menu_list').style.display = 'none';
    });

}