function loginCheck() {
    var checkLogin = new XMLHttpRequest();
    checkLogin.open("GET", "/loginStatus", true);

    checkLogin.onload = function() {
        var loginStatus = checkLogin.response;

        if (loginStatus === true) {
            document.getElementById("bannerLogIn").innerHTML = "Log Out";
            document.getElementById("bannerLogIn").href = "/index.html";
            document.getElementById("bannerLogIn").setAttribute("onClick", "logout()");
            document.getElementById("bannerRegister").innerHTML = "Account";
            document.getElementById("bannerRegister").href = "/pages/profile.html";
        } else {
            document.getElementById("bannerLogIn").innerHTML = "Log In";
            document.getElementById("bannerLogIn").setAttribute("onClick", "");
            document.getElementById("bannerLogIn").href = "/pages/login.html";
            document.getElementById("bannerRegister").innerHTML = "Register";
            document.getElementById("bannerRegister").href = "/pages/register.html";
        }
    };

    checkLogin.send();
}

window.onload = loginCheck;

function logout() {
    var sendStatus = new XMLHttpRequest();
    sendStatus.open("GET", "/logout", true);
    sendStatus.send();
    alert("You have been logged out");
}
