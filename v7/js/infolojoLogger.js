const CLASS_NAME = "infolojoLogger.js"

/**
 * Show message in log
 * @param {String} message message to show in console. Its required.
 * @param {String} className class name as default it is null.
 */
export const customLog = (message, className = null) => {
    console.log(className ? "class: " + className + " - " + message : message)
}

/**
 * Call customLog from infolojoLogger with private class name
 * and message
 * @param {String} message 
 */
const log = (message) => {
    customLog(message, CLASS_NAME)
}

log("loading infolojoLogger.js module")