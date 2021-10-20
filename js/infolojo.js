
const menuMobileTag = document.querySelector('#menu-mobile')
const htmlGeneral = document.querySelector('#general')
const TIME_ANIMATION_SCROLL_TOP = 1000
let navMobile = 1
let accesiblemode = -1


/** Init menu bottom to scroll up or scroll down*/

$(document).ready(() => {

    document.querySelector('#scrollTop').style.display = "none"
    menuMobile()

    $(window).scroll(() => {
        // if scroll > 200 muestra el botom si no ocultalo
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn()
        
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(() => {
        $('html, body').animate({
            scrollTop:0
        },TIME_ANIMATION_SCROLL_TOP)
        return false
    });

});


/**
 * Show an hidde menu
 */
const menuMobile = () => {
    navMobile *= -1
    navMobile===-1?menuMobileTag.style.display="none":menuMobileTag.style.display = "block"

}


/**
 * change size
 */
const changeSize = () => {
    accesiblemode *= -1
    console.log(accesiblemode)
    accesiblemode===1?htmlGeneral.classList.add('font-accesible'):htmlGeneral.classList.remove('font-accesible')

}
    