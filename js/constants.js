console.log("Loading constants.js module")


// region elements
const body = document.body;
const htmlParent = document.documentElement
const menuMobileTag = document.querySelector('#menu-mobile');
const btnScrollToTop = document.querySelector('#scrollTop');
const htmlGeneral = document.querySelector('#general');
const inputFormElement = document.querySelector('#_replyto');
const textAreaFormElement = document.querySelector('#message');
const projectsBorderBottom = document.querySelector('.projects');
const aboutMeSections = document.querySelectorAll('.intro-about');
const resalstBlueElements = document.querySelectorAll('.resalt-blue');
const resalstRedElements = document.querySelectorAll('.resat');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const sendEmailButton = document.querySelector('input:last-child');
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
const TIME_ANIMATION_SCROLL_TOP = 500;
const DARK_STYLE_NAME = "dark";
const DARK_TEXT = "black";
const LIGHT_TEXT = "white";
// endregion app performave values

// region icons
const iconsFab = document.querySelectorAll('.fab');
const iconsFav = document.querySelectorAll('.fav');
// endregion icons

// region localStorage states
const DARK_MODE_LOCAL_STORAGE = "DARK_MODE_LOCAL_STORAGE"
const DARK_MODE_LOCAL_STORAGE_ENABLED = "enabled"
const DARK_MODE_LOCAL_STORAGE_DISSABLED = "dissabled"
// endregion localStorage states


export {
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
    TIME_ANIMATION_SCROLL_TOP,
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
    iconsFab,
    iconsFav,
    DARK_MODE_LOCAL_STORAGE,
    DARK_MODE_LOCAL_STORAGE_ENABLED,
    DARK_MODE_LOCAL_STORAGE_DISSABLED
}
