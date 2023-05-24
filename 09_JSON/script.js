$(document).ready(function () {

    $.getJSON("https://gibm.becknet.ch/warenhaus/getFiliale.php?format=JSON")
        // wenn Request OK
        .done(function (data) {

// Loop über JSON-Daten
            $.each(data, function (key, filiale) {
                $("select").append("<option value='" + filiale.id  + "'>" + filiale.stadt + ", " + filiale.strasse + "</option>")
            })

// wenn Request nicht OK
        }).fail(function () {

        console.log("Request Failed");

    });

})

function getStore(id) {
    $(document).ready(function () {

        $.getJSON("https://gibm.becknet.ch/warenhaus/getFiliale.php?format=JSON&filiale=" + id)
            .done(function (data) {
                var data = data[0];
                $('#storeinfo').html("<table><tr><th>Stadt</th><th>Strasse</th><th>&Ouml;ffnungszeiten</th></tr><tr><td>"
                    + data.stadt + "</td><td>" + data.strasse + "</td> <td>" + data.oeffnungszeiten + "</td></tr></table>");
            });
    })
}
