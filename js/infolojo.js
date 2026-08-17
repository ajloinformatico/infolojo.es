import {
    htmlParent,
    menuMobileTag,
    htmlGeneral,
    btnScrollToTop,
    DARK_STYLE_NAME,
    aboutMeIcon,
    myprojectIcon,
    curriculumIcon,
    contactMeIcon,
    triggerAccesibility,
    triggerDarkMode,
    triggerUpdateThteme,
    linkToKeepIt,
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
let darkMode = false;
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
    manageRevealAnimations();
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
        toggleTheme();
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
 * Show a view with fadeIn or a fadeOut animation.
 * @param {Element} element 
 * @param {Boolean} show 
 */
const showAnimatedElement = (element, show) => {
    (show) ? $(element).fadeIn() : $(element).fadeOut();
 } 

/**
 * Apply the current dark mode state to the whole page.
 * Dark styles cascade from the "dark" class on <html>.
 */
const setTheme = () => {
    log("Update style");
    applyToggleDarkMode(htmlParent, darkMode);
}

/**
 * Toggle dark mode state, persist it and apply it.
 */
const toggleTheme = () => {
    darkMode = !darkMode;
    localStorage.setItem(DARK_MODE_LOCAL_STORAGE, darkMode ? DARK_MODE_LOCAL_STORAGE_ENABLED : DARK_MODE_LOCAL_STORAGE_DISSABLED);
    setTheme();
}

/**
 * Load dark mode status from localstorage
 */
const CheckDarkModeStatus = () => {
    darkMode = localStorage.getItem(DARK_MODE_LOCAL_STORAGE) === DARK_MODE_LOCAL_STORAGE_ENABLED;
} 

/**
 * Add scroll reveal animations to sections and project cards.
 * Elements fade up as they enter the viewport. Falls back to
 * showing everything when IntersectionObserver is not supported.
 */
const manageRevealAnimations = () => {
    if (!('IntersectionObserver' in window)) {
        return;
    }
    const sections = document.querySelectorAll('main > section');
    const cards = document.querySelectorAll('.projects > div');

    const reveal = (element) => element.classList.add('reveal');

    sections.forEach(reveal);
    cards.forEach((card, index) => {
        reveal(card);
        card.style.transitionDelay = ((index % 4) * 0.07) + 's';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                setTimeout(() => {
                    entry.target.classList.remove('reveal');
                    entry.target.style.transitionDelay = '';
                }, 900);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));
    cards.forEach(card => observer.observe(card));
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
