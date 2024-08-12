
function checkFirstName(event){
    var firstName=document.querySelector("#first-name");
    var errImg=document.querySelector("#error-img-fn");
    var errmsg=document.querySelector("#error-msg-fn");
    if (firstName.value===""){
        errImg.style.display="block"
        errmsg.style.display="block"

    }
    else{
        errImg.style.display="none"
        errmsg.style.display="none"
    }
}


function checkLastName(event){
    var lastName=document.querySelector("#last-name");
    var errImg=document.querySelector("#error-img-ln");
    var errmsg=document.querySelector("#error-msg-ln");
    if (lastName.value===""){
        errImg.style.display="block"
        errmsg.style.display="block"
    }
    else{
        errImg.style.display="none"
        errmsg.style.display="none"
    }
}
function checkEmail(event){
    var email=document.querySelector("#email");
    var errImg=document.querySelector("#error-img-email");
    var errmsg=document.querySelector("#error-msg-email");
    if (email.value===""){
        errImg.style.display="block"
        errmsg.style.display="block"
    }
    else{
        errImg.style.display="none"
        errmsg.style.display="none"
    }
}
function checkPassword(event){
    var password=document.querySelector("#password");
    var errImg=document.querySelector("#error-img-password");
    var errmsg=document.querySelector("#error-msg-password");
    if (password.value===""){
        errImg.style.display="block"
        errmsg.style.display="block"
    }
    else{
        errImg.style.display="none"
        errmsg.style.display="none"
    }
}