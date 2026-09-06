import {
    customLog
} from './infolojoLogger.js';

const CLASS_NAME = "scrollHelper.js"
const TIME_ANIMATION_SCROLL_TOP = 500;

/**
 * Call customLog from infolojoLogger with private class name
 * and message
 * @param {String} message 
 */
const log = (message) => {
    customLog(message, CLASS_NAME)
}

log("Loading scrollHelper.js module")


/**
 * Function to perform a smooth scroll to a specific element
 * @param {string} element element to go 
 * @param {Number} position position to go
 * @returns {void}
 */
export const navTo = (element = null, position = null) => {
    if (element != null) {
        smoothScrollToElement(element)
    } else if (position != null) {
        smoothScrollToPosition(position)
    }
}

/**
 * Function to perform a smooth scroll to a specific position
 * @param {Element} element 
 * @param {Duration} duration 
 */
const smoothScrollToElement = (element, duration = TIME_ANIMATION_SCROLL_TOP) => {
    $('html, body').animate({
        scrollTop:$(element).offset().top
    },duration);
    log('navigate to ' + element);
}

 /**
  * Performace a smooth scroll to a position
  * @param {Number} postion position y to do the smooth scroll 
  * @param {Number} duration duration of smooth scroll
  */
 const smoothScrollToPosition = (postion, duration = TIME_ANIMATION_SCROLL_TOP) => {
    const startingY = window.pageYOffset;
    const startTime = performance.now();

    const step = (timestamp) => {
        const currentTime = timestamp || performance.now();
        const timeElapsed = currentTime - startTime;
        const scrollY = Math.max(
            startingY - (timeElapsed / duration) * startingY,
            0
        );
        window.scrollTo(postion, scrollY);

        if (timeElapsed < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}
