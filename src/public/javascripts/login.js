function closeRegister() {
    document.getElementById("forgotPasswordBackground").style.display = "none";
}

function forgotPasswordShow() {
    document.getElementById("forgotPasswordBackground").style.display = "block";
    document.getElementById("fogotPasswordBox").style.animationPlayState =
        "running";
}

function login() {
    document.getElementById("loginErrorMessage").style.display = "none";
    var inputEmail = document.getElementById("loginEmailTextarea").value;
    var inputPassword = document.getElementById("loginPasswordTextarea").value;

    var userLogin = { email: inputEmail, password: inputPassword };
    var loginSuccess = "false";

    var sendLogin = new XMLHttpRequest();
    sendLogin.open("POST", "/login", true);

    sendLogin.onload = function() {
        loginSuccess = sendLogin.responseText;

        if (loginSuccess == "true") {
            alert("You have been logged in.");
            window.open("../index.html", "_self");
        } else {
            document.getElementById("loginErrorMessage").style.display =
                "block";
        }
    };

    sendLogin.setRequestHeader("Content-type", "application/json");
    sendLogin.send(JSON.stringify(userLogin));
}

function openRegisterPage() {
    window.open("register.html", "_self");
}

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();

    var googleInfo = {
        id_token: id_token,
        email: profile.getEmail(),
        password: "google",
        fName: profile.getGivenName(),
        lName: profile.getFamilyName()
    };

    var sendGoogle = new XMLHttpRequest();
    sendGoogle.open("POST", "/googleSignIn", true);

    sendGoogle.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var accountExist = sendGoogle.responseText;

            if (accountExist == "true") {
                alert("You have been logged in.");
                window.open("../index.html", "_self");
            } else {
                var sendRegister = new XMLHttpRequest();
                sendRegister.open("POST", "/register", true);

                sendRegister.onLoad = function() {
                    console.log("Google Registeration Success");
                };

                sendRegister.setRequestHeader(
                    "Content-type",
                    "application/json"
                );
                sendRegister.send(JSON.stringify(googleInfo));

                var sendLogin = new XMLHttpRequest();
                sendLogin.open("POST", "/login", true);

                sendLogin.onload = function() {
                    var loginSuccess = sendLogin.responseText;

                    if (loginSuccess == "true") {
                        alert("You have been logged in.");
                        window.open("../index.html", "_self");
                    }
                };

                sendLogin.setRequestHeader("Content-type", "application/json");
                sendLogin.send(JSON.stringify(googleInfo));
            }
        }
    };

    sendGoogle.setRequestHeader("Content-type", "application/json");
    sendGoogle.send(JSON.stringify(googleInfo));
}
