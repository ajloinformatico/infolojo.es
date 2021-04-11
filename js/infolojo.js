
const menuMobileTag = document.querySelector('#menu-mobile')
const htmlGeneral = document.querySelector('#general')
let navMobile = -1
let accesiblemode = -1


document.onload = () => {
    

    menuMobile()
}



/**
 * Show an hidde menu
 */
const menuMobile = () => {
    navMobile *= -1
    navMobile===-1?menuMobileTag.style.display="none":menuMobileTag.style.display = "block"

}


/**
 * change size
 */
const changeSize = () => {
    accesiblemode *= -1
    console.log(accesiblemode)
    accesiblemode===1?htmlGeneral.classList.add('font-accesible'):htmlGeneral.classList.remove('font-accesible')

}
    