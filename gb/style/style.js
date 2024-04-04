function hidlogform(){
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = "none";

}
function hidsigform(){
    var loginForm = document.getElementById('signup-form');
    loginForm.style.display="none";
}



function hiddenLoginForm() {
    var loginForm = document.getElementById('login-form');
    var blur = document.getElementById('blur');

    var intervalId = setInterval(function() {
        var currentOpacity = parseFloat(loginForm.style.opacity);
        if (currentOpacity > 0) {
            loginForm.style.opacity = (currentOpacity - 0.1).toString();
            blur.style.opacity = (currentOpacity - 0.1).toString();
        } else {
            loginForm.style.display = "none";
            blur.style.display = "none";
            clearInterval(intervalId);
        }
    }, 10); 
}
function hiddenSignupForm() {
    var loginForm = document.getElementById('signup-form');
    var blur = document.getElementById('blur');

    var intervalId = setInterval(function() {
        var currentOpacity = parseFloat(loginForm.style.opacity);
        if (currentOpacity > 0) {
            loginForm.style.opacity = (currentOpacity - 0.1).toString();
            blur.style.opacity = (currentOpacity - 0.1).toString();
        } else {
            loginForm.style.display = "none";
            blur.style.display = "none";
            clearInterval(intervalId);
        }
    }, 10); 
}


function showLoginForm() {
 
    var loginForm = document.getElementById('login-form');
    var blur = document.getElementById('blur');
    loginForm.style.opacity = "0";
    blur.style.opacity = "0";
    loginForm.style.display = "unset";
    blur.style.display = "unset";
    var intervalId = setInterval(function() {
        var currentOpacity = parseFloat(loginForm.style.opacity);
        if (currentOpacity < 1) {
            loginForm.style.opacity = (currentOpacity + 0.1).toString();
            blur.style.opacity = (currentOpacity + 0.1).toString();
        } else {
            clearInterval(intervalId);
        }
    }, 10);
}
function showSignupForm() {
    var loginForm = document.getElementById('signup-form');
    var blur = document.getElementById('blur');
    loginForm.style.opacity = "0";
    blur.style.opacity = "0";
    loginForm.style.display = "unset";
    blur.style.display = "unset";
    var intervalId = setInterval(function() {
        var currentOpacity = parseFloat(loginForm.style.opacity);
        if (currentOpacity < 1) {
            loginForm.style.opacity = (currentOpacity + 0.1).toString();
            blur.style.opacity = (currentOpacity + 0.1).toString();
        } else {
            clearInterval(intervalId);
        }
    }, 10);
}

function gotol(toto){
    window.location.href = "?q=" + toto + "&s=v&y=z";
}

function navBarOpt() {
    const phone = document.getElementById('navphonexx');
    const itag = document.getElementById('itagr');
    if (phone.style.maxHeight === "" || phone.style.maxHeight === "0px") {
        itag.classList.remove('fa-bars');
        itag.classList.add('fa-xmark');
        phone.style.maxHeight = "1000px"; 

    } else {
        phone.style.maxHeight = "0px";
        itag.classList.remove('fa-xmark');
        itag.classList.add('fa-bars');
    }
}



