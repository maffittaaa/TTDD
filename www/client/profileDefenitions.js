var started = onAwake()
 
function onAwake() {
    $.ajax({
        type: "GET",
        url: "/login/CheckLogin",
        success: function (data) {
            console.log(data)
            if (data.logged == false) {
                window.location.replace("/login.html");
                return false;
            } else {
                // window.location.replace("/game/");
                return true;
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function tryToChangeProfile(){
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
        url: "/match/changeProfile",
        data: {
            "new_name": username,
            "password": password,
            "new_email": email
        },
        success: function (data) {
            console.log(data);
            if(data.changed){
                document.getElementById("message").innerHTML = "You have succefully hange your Username and/or your email";
            }else{
                document.getElementById("message").innerHTML = data.message;
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