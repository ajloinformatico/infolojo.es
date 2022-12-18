const body = document.body;
const htmlParent = document.documentElement
const menuMobileTag = document.querySelector('#menu-mobile');
const htmlGeneral = document.querySelector('#general');
const btnScrollToTop = document.querySelector('#scrollTop');
const TIME_ANIMATION_SCROLL_TOP = 1000;
let navMobile = 1;
let accessibilityMode = -1;

// Change to localStore
// darkMode vals
let darkMode = true;
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

// local storage dark mode
const DARK_MODE_LOCAL_STORAGE = "DARK_MODE_LOCAL_STORAGE"
const DARK_MODE_LOCAL_STORAGE_ENABLED = "enabled"
const DARK_MODE_LOCAL_STORAGE_DISSABLED = "dissabled"

/**
 * load state methods 
 */
window.onload = () => {
    console.log("run all");
    //hidde btn to scroll up and menu btn
    btnScrollToTop.style.display = "none";
    menuMobile();
    scrollBtn();
    CheckDarkModeStatus();
    setTheme();
}

const scrollBtn = () => {
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
    updateDarkModeStatus();
    
    if (darkMode === true) {
        // Note: Simple elements
        toggleDarkMode(htmlParent, true);
        toggleDarkMode(projectsBorderBottom, true);
        toggleDarkMode(inputFormElement, true);
        toggleDarkMode(textAreaFormElement, true);

        // Note: Multi elemens
        toggleDarkMode(aboutMeSections, true, true);
        toggleDarkMode(resalstBlueElements, true, true);
        toggleDarkMode(resalstRedElements, true, true);
        
        // Note: Icons
        applyToggleDarkModeOnIcon(iconsFab, true);
        applyToggleDarkModeOnIcon(iconsFav, true);

        // Note: Menu
        toggleDarkMode(menuMobileTag, true);

        // Note: header
        toggleDarkMode(header, true);

        // Note: footer
        toggleDarkMode(footer, true);

        // Note: scroll to top buttom
        toggleDarkMode(scrollToTopButton, true);

        // Note: Access button
        toggleDarkMode(triggerAcce, true);

        // Note: Send email button
        toggleDarkMode(sendEmailButton, true);

    } else {
        // Note: Simple elements
        toggleDarkMode(htmlParent, false);
        toggleDarkMode(projectsBorderBottom, false);
        toggleDarkMode(inputFormElement, false);
        toggleDarkMode(textAreaFormElement, false);

        // Note: Multi elements
        toggleDarkMode(aboutMeSections, false, true);
        toggleDarkMode(resalstBlueElements, false, true);
        toggleDarkMode(resalstRedElements, false, true);

        // Note: Icons
        applyToggleDarkModeOnIcon(iconsFab, false);
        applyToggleDarkMode(iconsFav, false);

        // Note: Menu
        toggleDarkMode(menuMobileTag, false);

        // Note: header
        toggleDarkMode(header, false);

        // Note: footer
        toggleDarkMode(footer, false);

        // Note: scroll to top button
        toggleDarkMode(scrollToTopButton, false);

        // Note: Access button
        toggleDarkMode(triggerAcce, false);

        // Note: Send email button
        toggleDarkMode(sendEmailButton, true);
    }
}

/**
 * Save in localstorage darkMode status
 */
const CheckDarkModeStatus = () => {
    darkMode = localStorage.getItem(DARK_MODE_LOCAL_STORAGE) === DARK_MODE_LOCAL_STORAGE_ENABLED;
} 

const updateDarkModeStatus = () => {
    if (darkMode) {
        darkMode = false
        localStorage.setItem(DARK_MODE_LOCAL_STORAGE, DARK_MODE_LOCAL_STORAGE_ENABLED);
    
    } else {
        darkMode = true
        localStorage.setItem(DARK_MODE_LOCAL_STORAGE, DARK_MODE_LOCAL_STORAGE_DISSABLED);
    }
}

/**
 * Set if element must apply dark style
 * @param element html element to update style
 * @param addDark addDark
 * @param isMultiElement Element has more than one element inside the tag
 */
const toggleDarkMode = (element, addDark, isMultiElement = false) => {
    if (!isMultiElement) {
       applyToggleDarkMode(element, addDark)
    } else {
        element.forEach(ele => {
            applyToggleDarkMode(ele, addDark)
        });
    }
} 

/**
 * Set if element must apply dark style
 * @param element htmlElement
 * @param addDark should add
 */
const applyToggleDarkMode = (element, addDark) => {
    try {
        addDark ? element.classList.add(DARK_STYLE_NAME) : element.classList.remove(DARK_STYLE_NAME)
    } catch {
        // no-op
    }
    
}

/**
 * 
 * @param element icon
 * @param addDark boolean that say if text must apply white or black
 */
const applyToggleDarkModeOnIcon = (element, addDark) => {
    element.forEach(ele => {
        try {
            if (ele !== triggerAcce) {
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
    accessibilityMode *= -1;
    console.log(accessibilityMode);
    accessibilityMode===1?htmlGeneral.classList.add('font-accesible'):htmlGeneral.classList.remove('font-accesible');
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
