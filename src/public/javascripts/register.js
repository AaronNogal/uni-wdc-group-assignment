function registerAccount() {
    var FNField = document.getElementById("firstNameInput").value;
    var LNField = document.getElementById("lastNameInput").value;
    var E1Field = document.getElementById("emailInput").value;
    var E2Field = document.getElementById("email2Input").value;
    var P1Field = document.getElementById("passwordInput").value;
    var P2Field = document.getElementById("password2Input").value;

    if (FNField === "" || LNField === "" || E1Field === "" || E2Field === "" || P1Field === "" || P2Field === "") {
        alert("Please fill in all fields.");
    } else if (E1Field !== E2Field) {
        alert("Your email doesn't match. Please try again.");
    } else if (P1Field !== P2Field) {
        alert("Your password doesn't match. Please try again.");
    } else {
        var regEmail = document.getElementById("emailInput").value;
        var regPassword = document.getElementById("passwordInput").value;
        var regFName = document.getElementById("firstNameInput").value;
        var regLName = document.getElementById("lastNameInput").value;

        var regUser = {
            email: regEmail,
            password: regPassword,
            fName: regFName,
            lName: regLName
        };

        var sRegUser = JSON.stringify(regUser);

        var sendRegister = new XMLHttpRequest();
        sendRegister.open("POST", "/register", true);

        sendRegister.onLoad = function() {
            console.log("Registeration Success");
        };

        sendRegister.setRequestHeader("Content-type", "application/json");
        sendRegister.send(sRegUser);

        alert("Registration Success! You will now be redirected to the login page.");
        window.open("login.html", "_self");
    }
}
