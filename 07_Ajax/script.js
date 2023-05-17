function getStore(id) {
    if (id == "") {
        document.getElementById("storeinfo").innerHTML = "<b>Store Info will be displayed here</b>";
        return;
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("storeinfo").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "https://gibm.becknet.ch/warenhaus/getFiliale.php?filiale=" + id, true);
    xmlhttp.send();

}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let selectstore = "<option value=\"\">Select a Store:</option>"
        document.getElementById("stores").innerHTML = selectstore + this.responseText;
    }
};
xmlhttp.open("GET", "https://gibm.becknet.ch/warenhaus/getFiliale.php", true);
xmlhttp.send();