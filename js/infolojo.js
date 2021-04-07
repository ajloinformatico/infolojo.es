

const menuMobileTag = document.querySelector('#menu-mobile')
let navMobile = 1

/**
 * Show an hidde menu
 */
const menuMobile = () => {

    navMobile===1?menuMobileTag.style.display="none":menuMobileTag.style.display = "block"
}
    