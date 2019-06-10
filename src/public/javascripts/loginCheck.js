function loginCheck() {
    var info = JSON.parse(window.localStorage.getItem("user"));
    if (info) {
        document.getElementById("bannerLogIn").innerHTML = "Log Out";
        document.getElementById("bannerLogIn").href = "/pages/index.html";
        document.getElementById("bannerLogIn").setAttribute("onClick", "logout()");
        document.getElementById("bannerRegister").innerHTML = "Welcome " + info.firstName + " " + info.lastName;
        document.getElementById("bannerRegister").href = "/pages/profile.html";
    } else {
        document.getElementById("bannerLogIn").innerHTML = "Log In";
        document.getElementById("bannerLogIn").setAttribute("onClick", "");
        document.getElementById("bannerLogIn").href = "/pages/login.html";
        document.getElementById("bannerRegister").innerHTML = "Register";
        document.getElementById("bannerRegister").href = "/pages/register.html";
    }
}

window.onload = loginCheck;

function logout() {
    alert("You have been logged out");
    window.localStorage.clear();
    window.open("./index.html", "_self");
}
