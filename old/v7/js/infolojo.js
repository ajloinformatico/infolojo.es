import {
    body,
    htmlParent,    
    menuMobileTag,
    htmlGeneral,
    btnScrollToTop,
    inputFormElement,
    textAreaFormElement,
    projectsBorderBottom,
    aboutMeSections,
    resalstBlueElements,
    resalstRedElements,
    header,
    footer,
    sendEmailButton,
    DARK_STYLE_NAME,
    DARK_TEXT,
    LIGHT_TEXT,
    aboutMeIcon,
    myprojectIcon,
    curriculumIcon,
    contactMeIcon,
    triggerAccesibility,
    triggerDarkMode,
    triggerUpdateThteme,
    linkToKeepIt,
    keepItDiv,
    iconsFab,
    iconsFav,
    DARK_MODE_LOCAL_STORAGE,
    DARK_MODE_LOCAL_STORAGE_ENABLED,
    DARK_MODE_LOCAL_STORAGE_DISSABLED
} from './constants.js'

import {
    navTo
} from './scrollHelper.js'

import {
    customLog
} from './infolojoLogger.js'

const CLASS_NAME = "infolojo.js"

// region localStorageStates
// menu mobile state
let navMobile = 1;

// accesibility mode state
let accessibilityMode = -1;

// dark mode state
let darkMode = true;
// endregion localStorageStates

/**
 * Call customLog from infolojoLogger with private class name
 * and message
 * @param {String} message 
 */
const log = (message) => {
    customLog(message, CLASS_NAME)
}

/**
 * load state methods 
 */
window.onload = () => {
    log("Loading infolojo.js module")
    //hidde btn to scroll up and menu btn
    btnScrollToTop.style.display = "none";
    menuMobile();
    manageScrollToTopButton();
    CheckDarkModeStatus();
    setTheme();
    addOnClickEvents();
}


const addOnClickEvents = () => {

    // region menuIcons
    aboutMeIcon.forEach(element => element.addEventListener('click', () => {
            navTo('#about-me');
    }));

    myprojectIcon.forEach(element => element.addEventListener('click', () => {
        navTo('#my-projects')
    }));

    curriculumIcon.forEach(element => element.addEventListener('click', () => {
        log("Antonio José Lojo Ojeda curricum downloaded");
    }));

    contactMeIcon.forEach(element => element.addEventListener('click', () => {
        navTo('#contact-me');
    }));

    triggerAccesibility.forEach(element => element.addEventListener('click', () => {
        changeSize();
    }));
    
    triggerDarkMode.forEach(element => element.addEventListener('click', () => {
        setTheme();
    }));

    triggerUpdateThteme.forEach(element => element.addEventListener('click', () => {
        menuMobile();
    }));
    // endregion menuIcons

    // region internalLinks
    linkToKeepIt.addEventListener('click', () => {
        navTo(linkToKeepIt);
    });
    // endregion internalLinks
}

/** manage scroll to top */
const manageScrollToTopButton = () => {
    window.addEventListener("scroll", () => {
        // show scroll button if scroll is bigger than 200
        showAnimatedElement(btnScrollToTop, (window.scrollY > 200));

        // Add onClick in btnScrollToTop to do scroll animated
        btnScrollToTop.addEventListener('click', () => {
            navTo(null, 0)
            return false;
        });
    });
}

/**
 * Show a view with fadeIn or a fadeOut animation.
 * @param {Element} element 
 * @param {Boolean} show 
 */
const showAnimatedElement = (element, show) => {
    (show) ? $(element).fadeIn() : $(element).fadeOut();
 } 

/**
 * Change style between dark and light by calling
 * toogleDarkMode();
 */
const setTheme = () => {
    log("Update style");
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
        toggleDarkMode(btnScrollToTop, true);

        // Note: Access button
        triggerAccesibility.forEach(element => toggleDarkMode(element, true))
        
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
        toggleDarkMode(btnScrollToTop, false);

        // Note: Access button
        triggerAccesibility.forEach(element => toggleDarkMode(element, false));

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
    let triggerAcce = null;
    triggerAccesibility.forEach(element => () => {
        triggerAccesibility = element
    })
    
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
   log("update accesibility with " + navMobile);
   navMobile===-1?menuMobileTag.style.display="none":menuMobileTag.style.display = "block";

}

/**
 * change size
 */
const changeSize = () => {
    accessibilityMode *= -1;
    log("update accesibility with " + accessibilityMode);
    accessibilityMode===1?htmlGeneral.classList.add('font-accesible'):htmlGeneral.classList.remove('font-accesible');
}
