const body = document.body;
const htmlParent = document.documentElement
const menuMobileTag = document.querySelector('#menu-mobile');
const htmlGeneral = document.querySelector('#general');
const btnScrollToTop = document.querySelector('#scrollTop');
const btnSetStyle = document.querySelector('trigger-dark-mode');
const TIME_ANIMATION_SCROLL_TOP = 1000;
let firstLoad = true;
let navMobile = 1;
let accesiblemode = -1;

// Change to localStore
// darkMode vals
let darkMode = false;
const DARK_STYLE_NAME = "dark";
const DARK_TEXT = "black";
const LIGHT_TEXT = "white";
const inputFormElement = document.querySelector('#_replyto');
const textAreaFormElement = document.querySelector('#message');
const projectsBorderBottom = document.querySelector('.projects');
const aboutMeSections = document.querySelectorAll('.intro-about');
const resalstBlueElements = document.querySelectorAll('.resalt-blue');
const resalstRedElements = document.querySelectorAll('.resat');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const scrollToTopButton = document.querySelector('#scrollTop');
const triggerAcce = document.querySelector("#trigger-acce");
const sendEmailButton = document.querySelector('input:last-child');

// icons
const iconsFab = document.querySelectorAll('.fab');
const iconsFav = document.querySelectorAll('.fav');
const iconsFav2 = document.querySelectorAll('#fav');

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
 * Change style between dark and light by calling
 * toogleDarkMode();
 */
const setTheme = () => {
    console.log("Update style");
    if (darkMode == false) {
        // Note: Simple elements
        toogleDarkMode(htmlParent, true);
        toogleDarkMode(projectsBorderBottom, true);
        toogleDarkMode(inputFormElement, true);
        toogleDarkMode(textAreaFormElement, true);

        // Note: Multi elemens
        toogleDarkMode(aboutMeSections, true, true);
        toogleDarkMode(resalstBlueElements, true, true);
        toogleDarkMode(resalstRedElements, true, true);
        
        // Note: Icons
        applyToogleDarkModeOnIcon(iconsFab, true);
        applyToogleDarkModeOnIcon(iconsFav, true);
    //    applyToogleDarkModeOnIcon(iconsFav2, true);

        // Note: Menu
        toogleDarkMode(menuMobileTag, true);

        // Note: header
        toogleDarkMode(header, true);

        // Note: footer
        toogleDarkMode(footer, true);

        // Note: scroll to top buttom
        toogleDarkMode(scrollToTopButton, true);

        // Note: Access button
        toogleDarkMode(triggerAcce, true);

        // Note: Send email button
        toogleDarkMode(sendEmailButton, true);

        darkMode = true;

    } else {
        // Note: Simple elements
        toogleDarkMode(htmlParent, false);
        toogleDarkMode(projectsBorderBottom, false);
        toogleDarkMode(inputFormElement, false);
        toogleDarkMode(textAreaFormElement, false);

        // Note: Multi elements
        toogleDarkMode(aboutMeSections, false, true);
        toogleDarkMode(resalstBlueElements, false, true);
        toogleDarkMode(resalstRedElements, false, true);

        // Note: Icons
        applyToogleDarkModeOnIcon(iconsFab, false);
        applyToogleDarkMode(iconsFav, false);

        // Note: Menu
        toogleDarkMode(menuMobileTag, false);

        // Note: header
        toogleDarkMode(header, false);

        // Note: footer
        toogleDarkMode(footer, false);

        // Note: scroll to top button
        toogleDarkMode(scrollToTopButton, false);

        // Note: Access button
        toogleDarkMode(triggerAcce, false);

        // Note: Send email button
        toogleDarkMode(sendEmailButton, true);

        darkMode = false;
    }
}

/**
 * Set if element must apply dark style
 * @param {HTML element} element 
 * @param {Boolean value} addDark 
 * @param {Boolean isMultiElement} isMultiElement
 */
const toogleDarkMode = (element, addDark, isMultiElement = false) => {
    if (!isMultiElement) {
       applyToogleDarkMode(element, addDark)
    } else {
        element.forEach(ele => {
            applyToogleDarkMode(ele, addDark)
        });
    }
} 

/**
 * Set if element must apply dark style
 * @param {HTML element} element 
 * @param {Boolean value} addDark 
 */
const applyToogleDarkMode = (element, addDark) => {
    try {
        addDark ? element.classList.add(DARK_STYLE_NAME) : element.classList.remove(DARK_STYLE_NAME)
    } catch {
        // no-op
    }
    
}

/**
 * 
 * @param {html elemen} element icon
 * @param {boolean} addDark boolean that say if text must apply white or black
 */
const applyToogleDarkModeOnIcon = (element, addDark) => {
    element.forEach(ele => {
        try {
            if (ele != triggerAcce) {
                // no-op
            } else {
                addDark? ele.style.color = LIGHT_TEXT : ele.style.color = DARK_TEXT;
            }
        } catch {
            // no-op
        }
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
