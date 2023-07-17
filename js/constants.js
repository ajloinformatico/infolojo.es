console.log("Loading constants.js module")


// region elements
const body = document.body;
const htmlParent = document.documentElement
const menuMobileTag = document.querySelector('#menu-mobile');
const btnScrollToTop = document.querySelector('#scrollTop');
const htmlGeneral = document.querySelector('#general');
const test = "test"
// endregion elements

// region menuIcons
// Note I need query selector all because i have to buttons one for desktop menu and another for mobile menu.
// TODO continue doing it and modifing click events. Also I have to remove from html onClick methods
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



export {
    body,
    htmlParent,    
    menuMobileTag,
    htmlGeneral,
    btnScrollToTop,
    test,
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
    linkToKeepIt
}
