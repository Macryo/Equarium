export function expandNav() {
    document.getElementById('nav').classList.remove("hidden");
    document.getElementById('exit').classList.remove("hidden");
    document.getElementById('hambi').classList.remove("hambi");
    document.getElementById('logo').classList.remove("logo");
    document.getElementById('face-left').classList.remove("hidden");
    document.getElementById('face-right').classList.remove("hidden");

    document.getElementById('exit').classList.add("exit");
    document.getElementById('hambi').classList.add("hidden");
    document.getElementById('logo').classList.add("hidden");
    document.getElementById('nav').classList.add("expandNav");

    document.getElementById('exit').addEventListener('click', exit)
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName('menu_child')[i].addEventListener('click', exit);
    }
}

export function exit() {

    document.getElementById('exit').classList.add("hidden");
    document.getElementById('hambi').classList.add("hambi");
    document.getElementById('logo').classList.add("logo");
    document.getElementById('face-left').classList.add("hidden");
    document.getElementById('face-right').classList.add("hidden");

    document.getElementById('exit').classList.remove("exit");
    document.getElementById('hambi').classList.remove("hidden");
    document.getElementById('logo').classList.remove("hidden");
    document.getElementById('nav').classList.remove("expandNav");
}

