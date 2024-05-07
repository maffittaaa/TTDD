function TryToLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    $.ajax({
        type: "POST",
        url: "/login/login",
        data: {
            "login_name": username,
            "login_password": password,
        },
        success: function (data) {
            console.log(data);
            if (data.loggedIn){
                document.getElementById("message").innerHTML = "Welcome " + data.username;
                window.location.replace("/choseCharacters.html");
            } else {
                document.getElementById("message").innerHTML = "Wrong stuff, try again";
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function TryToRegister(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var check_password = document.getElementById("check_password").value;
    var email = document.getElementById("email").value;

    $.ajax({
        type: "POST",
        url: "/register/register",
        data: {
            "login_name": username,
            "login_password": password,
            "login_check_password": check_password,
            "login_email": email
        },
        success: function (data) {
            console.log(data);
            if(data.registered){
                document.getElementById("message").innerHTML = "Hi!, " + data.username + " you are now registered";
            }else{
                document.getElementById("message").innerHTML = data.message;
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function GoToRegister(){
    window.location.replace("/register.html");
}

function GoToLogin() {
    window.location.replace("/login.html");
}