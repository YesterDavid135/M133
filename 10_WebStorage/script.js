$(document).ready(function () {

    $.getJSON("https://gibm.becknet.ch/warenhaus/getFiliale.php?format=JSON")
        // wenn Request OK
        .done(function (data) {

// Loop über JSON-Daten
            $.each(data, function (key, filiale) {
                $("select").append("<option value='" + filiale.id + "'>" + filiale.stadt + ", " + filiale.strasse + "</option>")
            })
            if (localStorage.getItem("store") != null)
                $("select").val(localStorage.getItem("store")).change();

// wenn Request nicht OK
        }).fail(function () {

        console.log("Request Failed");

    });

})

function getStore(id) {
    $(document).ready(function () {
        localStorage.setItem("store", id);
        let filiale = JSON.parse(localStorage.getItem(id));

        if (filiale == null) {
            $.getJSON("https://gibm.becknet.ch/warenhaus/getFiliale.php?format=JSON&filiale=" + id)
                .done(function (data) {
                    var data = data[0];
                    localStorage.setItem(id, JSON.stringify(data))
                    $('#storeinfo').html("<table><tr><th>Stadt</th><th>Strasse</th><th>&Ouml;ffnungszeiten</th></tr><tr><td>"
                        + data.stadt + "</td><td>" + data.strasse + "</td> <td>" + data.oeffnungszeiten + "</td></tr></table>");
                });
        } else {
            $('#storeinfo').html("<table><tr><th>Stadt</th><th>Strasse</th><th>&Ouml;ffnungszeiten</th></tr><tr><td>"
                + filiale.stadt + "</td><td>" + filiale.strasse + "</td> <td>" + filiale.oeffnungszeiten + "</td></tr></table>");
        }
    })
}

function resetStorage() {
    localStorage.clear();
    $("select").val("").change();
    $("#storeinfo").html("<b>Store info will be displayed here</b>")
}
