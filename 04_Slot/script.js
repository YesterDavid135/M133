let balance = 10.0;

function spin() {
    if (balance < 0.2) {
        console.log("You poor noob");
        return;
    }
    balance -= 0.20;

    var slots = [];

    for (let i = 0; i < 3; i++) {
        slots[i] = Math.round((Math.random() * 5) + 1)
        document.getElementById("slot" + i).innerHTML = "<img src=\"images/" + slots[i] + ".webp\" height='100' width='100'>";
    }

    if (slots[0] === slots[1] && slots[1] === slots[2]) {
        // Winner winner chicken dinner
        balance += slots[0];

        document.getElementById("winstatus").innerHTML = "Leider gewonnen";
        document.getElementById("winstatus").classList.remove("alert-danger");
        document.getElementById("winstatus").classList.add("alert-success");

    } else {

        document.getElementById("winstatus").innerHTML = "Super, du hast verloren";
        document.getElementById("winstatus").classList.remove("alert-success");
        document.getElementById("winstatus").classList.add("alert-danger");
    }

    document.getElementById("balance").innerHTML = balance.toFixed(2);

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("spin").addEventListener("click", spin);
    document.addEventListener('contextmenu', event => event.preventDefault());

})
