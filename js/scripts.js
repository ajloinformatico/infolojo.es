

//Menu desplegable
var showHidden = 0; // when it is 0 menu is hidden and when its is 1 menu is showed

/**
 * Show and hidden menu
 */
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


var theme = "light";
/**
 * Change button theme and change all themes calling change_themes()
 */
function themeButton() {
    $(document).ready(function () {
        $('.switch').click(function () {
            $(this).toggleClass("switchOn");
            if(theme === "light"){
                changeTheme("light");
                theme = "dark"
            }else{
                changeTheme("dark");
                theme = "light";
            }
        });
    });
}

function changeTheme(theme){
    return true;
}