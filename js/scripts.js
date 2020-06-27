
//Menu desplegable
let showHidden = 0; // when it is 0 menu is hidden and when its is 1 menu is showed



/*Show and hidden menu*/
function menuMobile() {
    const menuDesktop = document.querySelector('.desktop-menu');
    if (showHidden === 0) {
        menuDesktop.style.cssText = 'display: inline-flex; width: 100%;';
        showHidden = 1;
        alert("show menu");
        console.log("showHidden = 1");

    } else if (showHidden === 1) {
        menuDesktop.style.cssText = 'display: none; width: 0;';
        showHidden = 0;
        alert("hidden menu menu");
        console.log("showHidden = 0");
    }
}