'use strict'; /*Strict use of typing*/
console.log("asynchronous web enabled working");

/**
 *Click event. catch url and return loadPage () 
 */
$('main > nav > ul > li > a').on("click", function(e){
    e.preventDefault();
    //get link
    let url = $(this).attr("href");
    console.log(url);
    //Carga la url en la parte superior
    window.history.pushState("object", "new url", url);
    loadPage(url);
});


/**
 * load by ajax article into main index 
 */
const loadPage = url => {
    debugger;
    //if user want come back to home
    if(url.length === 0 || url === "index.html"){
        url = "home";
    }
    //TODO: DELETE IT:
    console.log(url)

    const PAGE_URL = `pages/${url}`;
    console.log(PAGE_URL);

    $.ajax({
        url: PAGE_URL,
        //response es el contenido de la página que se indica en la url
        success: function (data) {
            //$("#contenido").html(data);
            document.getElementById('#contenido').innerHTML = data;
        },
        error: function(){
            $("#content").html("<center><p style='color: red'>Something was wrong</p></center>");
        }
    });
}

//Evento carga una función con un solo parámetro
//Capturamos la url dobde quuere ir y cargamos loadPage() para cargar exactamene la página donde queremos ir
window.onpopstate = e => {
    
    let url = location.pathname;
    console.log(url);

    //método para capturar exactamente lo que queremos
    const loadNextPage = nextPage => {
        let str = nextPage;
        let n = str.split("/")[1];
        console.log(n);

        //Al finbal llama a loadpage
        loadPage(n);
    }
    loadNextPage(url);
}




