const body = document.body;
const menuMobileTag = document.querySelector('#menu-mobile');
const htmlGeneral = document.querySelector('#general');
const btnScrollToTop = document.querySelector('#scrollTop');
const TIME_ANIMATION_SCROLL_TOP = 1000;
let firstLoad = true;
let navMobile = 1;
let accesiblemode = -1;

/**
 * load state methods 
 */
window.onload = () => {
    console.log("run all");
    //hidde btn to scroll up and menu btn
    btnScrollToTop.style.display = "none";
    menuMobile();
    scrollbtn();
}

/**
 * Make ScrollToTop
 */
const scrollbtn = () => {
    $(window).scroll(() => {
        // if scroll > 200 muestra el botom si no ocultalo
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn();
        
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(() => {
        $('html, body').animate({
            scrollTop:0
        },TIME_ANIMATION_SCROLL_TOP);
        return false;
    });
}

/**
 * trigger scroll to top btn
 */
const triggerScrollTop = () => {
    $('html, body').animate({
        scrollTop:0
    },TIME_ANIMATION_SCROLL_TOP);
    return false;
}

/**
 * hide menu on start 
 */
const menuMobile = () => {
   navMobile *= -1;
   navMobile===-1?menuMobileTag.style.display="none":menuMobileTag.style.display = "block";

}

/**
 * change size
 */
const changeSize = () => {
    accesiblemode *= -1;
    console.log(accesiblemode);
    accesiblemode===1?htmlGeneral.classList.add('font-accesible'):htmlGeneral.classList.remove('font-accesible');
}

/**
 * anim go to id element on the web
 * @param {string} element 
 * @returns {void}
 */
const navTo = (element) => {
    $('html, body').animate({
        scrollTop:$(element).offset().top
    },TIME_ANIMATION_SCROLL_TOP);
}