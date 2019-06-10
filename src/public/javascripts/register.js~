function registerAccount() {
    var FNField = document.getElementById("firstNameInput").value;
    var LNField = document.getElementById("lastNameInput").value;
    var E1Field = document.getElementById("emailInput").value;
    var E2Field = document.getElementById("email2Input").value;
    var P1Field = document.getElementById("passwordInput").value;
    var P2Field = document.getElementById("password2Input").value;

    if (FNField === "" || LNField === "" || E1Field === "" || E2Field === "" || P1Field === "" || P2Field === "") {
        alert("Please fill in all fields.");
    } else if (E1Field != E2Field) {
        alert("Your email doesn't match. Please try again.");
    } else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(E1Field)) {
        alert("Your email is invalid. Please try again.");
    } else if (P1Field != P2Field) {
        alert("Your password doesn't match. Please try again.");
    } else {
        var regEmail = document.getElementById("emailInput").value;
        var regPassword = document.getElementById("passwordInput").value;
        var regFName = document.getElementById("firstNameInput").value;
        var regLName = document.getElementById("lastNameInput").value;
        var radios = document.getElementsByName("role");
        var role = "individual";
        if (radios[0].checked) {
            role = "individual";
        } else {
            role = "restaurant";
        }
        var regUser = { email: regEmail, password: regPassword, firstName: regFName, lastName: regLName, role: role };
        var sRegUser = JSON.stringify(regUser);

        var sendRegister = new XMLHttpRequest();
        sendRegister.open("POST", "/register", true);
        sendRegister.setRequestHeader("Content-type", "application/json");
        sendRegister.send(sRegUser);
        sendRegister.onreadystatechange = function() {
            if (sendRegister.readyState === 4) {
                var res = JSON.parse(this.responseText);
                if (res.status) {
                    alert("Registration Success! You will now be redirected to the login page.");
                    window.open("login.html", "_self");
                } else {
                    alert(res.message);
                }
            }
        };
    }
}
