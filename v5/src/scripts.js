// SHOW OR HIDDE MOBILE MENU
let showHidden = 0; //0 --> hidden / 1 --> show
function showHiddenMenu(){
    //getMenu
    const menu = document.getElementById('menu-mobile');
    if(showHidden === 0){
        //show nav
        menu.classList.remove('menu-empty');//default class to hide menu
        menu.classList.add('menu-mobile');//class to show menu
        showHidden = 1;
    }else if(showHidden === 1){
        //hide nav
        menu.classList.remove('menu-mobile');
        menu.classList.add('menu-empty');
        showHidden = 0;
    }
    //send to console the menu´s status
    console.log(showHidden);
}