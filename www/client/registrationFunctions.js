var started = onAwake()
 
function onAwake() {
    $.ajax({
        type: "GET",
        url: "/login/CheckLogin",
        success: function (data) {
            console.log(data)
            if (data.logged == false) {
                return false;
            } else {
                window.location.replace("/game/");
                return true;
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function TryToLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var encryptedPassword = encryptPassword(password);

    $.ajax({
        type: "POST",
        url: "/login/login",
        data: {
            "login_name": username,
            "login_password": password
        },
        success: function (data) {
            console.log(data);
            if (data.loggedIn){
                document.getElementById("message").innerHTML = "Welcome " + data.username;
                window.location.replace("/game/");
            } else {
                document.getElementById("message").innerHTML = "Wrong stuff, try again";
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function encryptPassword(password) {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    return hashedPassword;
}

function TryToRegister(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var check_password = document.getElementById("check_password").value;
    var email = document.getElementById("email").value;
    
    if (password !== check_password) {
        document.getElementById("message").innerHTML = "Passwords do not match!";
        return;
    }

    var encryptedPassword = encryptPassword(password);

    $.ajax({
        type: "POST",
        url: "/register/register",
        data: {
            "login_name": username,
            "login_password": encryptedPassword,
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