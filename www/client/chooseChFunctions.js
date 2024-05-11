var started = onAwake()

var slots
var lookingForMatch = false
var chosing = false
var slotChosen = 0
var char

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
                char = JSON.parse(data.characters)
                document.getElementById("account").innerHTML = data.name + " XP: ";
                return true;
            }
        },
        error: function (err) {
            console.log(err);
        }
    })

    for (let i = 1; i < 11; i++) {
        document.getElementById("ch_" + i).disabled = true;
    }

    slots = {
        "slot_1": 0,
        "slot_2": 0,
        "slot_3": 0,
        "slot_4": 0,
        "slot_5": 0
    }
    console.log("started");
}

function setCharacters(){
    for (let i = 1; i < 11; i++) {
        document.getElementById("ch_" + i).disabled = true;
    }

    for (let i = 0; i < char.length; i++) {
        document.getElementById("ch_" + char[i].player_character_character_id).disabled = false;
    }
}

setInterval(checkMatchFound, 1000)
function checkMatchFound() {
    $.ajax({
        type: "GET",
        url: "/login/CheckLogin",
        success: function (data) {
            console.log(data)
            if (data.logged == false) {
                window.location.replace("/login.html");
                return false;
            }
        },
        error: function (err) {
            console.log(err);
        }
    })

    if (lookingForMatch) {
        $.ajax({
            type: "GET",
            url: "/match/checkMatchFound",
            success: function (data) {
                if (data.matchFound == true) {
                    console.log(data);
                    window.location.replace("/match.html");
                }
                else {
                    console.log(data);
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
}

function pickCharacters(slot_Id, ch_Id) {
    if (ch_Id != null) {
        var alreadyChosen = false;

        for (let i = 1; i < 6; i++) {
            if (slots["slot_" + i + ""] == ch_Id) {
                alreadyChosen = true;
            }
            console.log(slots["slot_" + i + ""], ch_Id);
        }

        if (alreadyChosen == false) {
            document.getElementById("slot_" + slotChosen + "").innerHTML = document.getElementById("ch_" + ch_Id + "").innerHTML;

            slots["slot_" + slotChosen + ""] = ch_Id;

            console.log(slots);

            for (let i = 1; i < 6; i++) {
                document.getElementById("slot_" + i + "").disabled = false;
            }
            for (let i = 1; i < 11; i++) {
                document.getElementById("ch_" + i + "").disabled = true;
            }

            chosing = false;
        } else {
            document.getElementById("characters").innerHTML = "You can't pick the same character twice";
        }

    } else {
        if (chosing == true) {
            for (let i = 1; i < 6; i++) {
                document.getElementById("slot_" + i + "").disabled = false;
            }
            for (let i = 1; i < 11; i++) {
                document.getElementById("ch_" + i + "").disabled = true;
            }

            chosing = false
        } else {
            for (let i = 1; i < 6; i++) {
                document.getElementById("slot_" + i + "").disabled = true;
            }

            setCharacters(char)

            document.getElementById("slot_" + slot_Id + "").disabled = false;

            slotChosen = slot_Id;

            chosing = true;
        }
    }
}

function choseCharacters() {
    var empty = true;

    for (let i = 1; i < 6; i++) {
        if (slots["slot_" + i + ""] != 0) {
            empty = false;
        }
    }

    if (empty == false) {
        slots = JSON.stringify(slots)
        $.ajax({
            type: "POST",
            url: "/match/choseCharacters",
            data: {
                "slots": slots,
            },
            success: function (data) {
                console.log(data)
                if (data.success) {
                    document.getElementById("characters").innerHTML = data.charactersChosen + " chosen. Looking for a match now...";
                    document.getElementById("chosen").disabled = true;
                    lookingForMatch = true;
                } else {
                    slots = JSON.parse(slots);
                    var char = JSON.parse(data.charactersFond);

                    document.getElementById("characters").innerHTML = "Chose another character";

                    for (let i = 1; i < 6; i++) {
                        var notIn = true;

                        for (let j = 0; j < char.length; j++) {
                            if (slots["slot_" + i + ""] == char[j] && notIn == true) {
                                notIn = false;
                            }
                        }

                        if (notIn == true) {
                            document.getElementById("slot_" + i + "").innerHTML = "chose slot";
                            slots["slot_" + i + ""] = 0;
                        }
                    }
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
}


