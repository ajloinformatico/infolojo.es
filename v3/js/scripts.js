
//Menu desplegable
let showHidden = 0; // when it is 0 menu is hidden and when its is 1 menu is showed



/*Show and hidden menu*/
function menuMobile() {
    const menuDesktop = document.getElementById('menu');

    if (showHidden === 0) {
        menuDesktop.classList.remove('menu-empty');
        menuDesktop.classList.add('menu-des');
        showHidden = 1;
        console.log("showHidden = 1");

    } else if (showHidden === 1) {
        menuDesktop.classList.remove('menu-des');
        menuDesktop.classList.add('menu-empty');
        showHidden = 0;
        console.log("showHidden = 0");
    }
}
/*Change style dark and white*/
function changeStyle() {
    return true;
}