//when the document is loaded
$(document).ready(function (){
    $.fn.initVal();
    console.log("Validation form loaded");
})






//assign function to $ .fn.initval ()
$.fn.initVal = function (){

    //JQUERY VALIDATION PLUGING
    //https://jqueryvalidation.org/
    $("#contactForm").validate({
        //rules for inputs
        rules:{
            name: {
                required: true,
                minlength: 3,
                maxlength: 30,
            },
            affair:{
                required: true,
                minlength: 3,
                maxlength: 30,
            },
            mail:{
                required: true,
                email: true
            },
            check_politica: "required",
            informado: "required"

        },
        //message of errors
        messages:{
            name:{
                required:  " This field is required",
                minlength: " The field must be composed of at least 3 characters",
                maxlength: " The field must be composed of less than 31 characters",
                text:    " this field does not accept numeric characters"
            },
            affair:{
                required:  " This field is required",
                minlength: " The field must be composed of at least 3 characters",
                maxlength: " The field must be composed of less than 31 characters",
                text:    " this field does not accept numeric characters"
            },
            mail:{
                required: " This field is required",
                email: " The email is not valid"
            },
            check_politica: " please check it to continue",
            informado: " please check it to continue"
        }

    })

}

