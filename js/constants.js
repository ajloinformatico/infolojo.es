import {
    customLog
} from './infolojoLogger.js'


const CLASS_NAME = "constants.js"

// region elements
const htmlParent = document.documentElement
const menuMobileTag = document.querySelector('#menu-mobile');
const btnScrollToTop = document.querySelector('#scrollTop');
const htmlGeneral = document.querySelector('#general');
// endregion elements

// region menuIcons
// Note I need query selector all because i have to buttons one for desktop menu and another for mobile menu.
const aboutMeIcon = document.querySelectorAll('.aboutmeLink');
const myprojectIcon = document.querySelectorAll('.myprojectLink');
const curriculumIcon = document.querySelectorAll('.curriculumLink');
const contactMeIcon = document.querySelectorAll('.contactMelink');
const triggerAccesibility = document.querySelectorAll('.trigger-acce');
const triggerDarkMode = document.querySelectorAll('.trigger-dark-mode');
const triggerUpdateThteme = document.querySelectorAll('.trigger-menu');
// endregion menuIcons

// region internalScrollLinks
const linkToKeepIt = document.querySelector('#link-to-keep-it');
// endregion internalScrollLinks

// region app perfomance values
const DARK_STYLE_NAME = "dark";
// endregion app performave values

// region localStorage states
const DARK_MODE_LOCAL_STORAGE = "DARK_MODE_LOCAL_STORAGE"
const DARK_MODE_LOCAL_STORAGE_ENABLED = "enabled"
const DARK_MODE_LOCAL_STORAGE_DISSABLED = "dissabled"
// endregion localStorage states


/**
 * Call customLog from infolojoLogger with private class name
 * and message
 * @param {String} message 
 */
const log = (message) => {
    customLog(message, CLASS_NAME)
}

export {
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
}

log("Loading constants.js module")