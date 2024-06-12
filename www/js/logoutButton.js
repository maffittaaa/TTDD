started = onAwake()

function onAwake() {

    if (document.URL == "https://ttdd.onrender.com/login.html") {
        $.ajax({
            type: "POST",
            url: "/login/Logout",
            success: function (data) {
                console.log("Logged out successfully")
            },
            error: function (err) {
                console.log(err);
            }
        })
    } else {
        $.ajax({
            type: "GET",
            url: "/login/CheckLogin",
            success: function (data) {
                if (data.logged == false) {
                    document.getElementById("loginButton").innerHTML = "🔐 Login"
                    return false;
                } else {
                    document.getElementById("loginButton").innerHTML = "❌ Logout"
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
}