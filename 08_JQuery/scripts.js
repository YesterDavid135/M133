$(document).ready(function () {
    $('h1').addClass('red');
    $('h2.blue').addClass('green');
    $('h3#second').addClass('red');
    $('p:first').html("Ich bin kein Paragraph");
    $('p:last').wrapInner('<em></em>');
    $('ul').append("<li id='four'>fünfter Listenpunkt</li>");
    $('li#four').attr("id", "five");
    $('li').each(function () {
        var id = this.id;
        $(this).append('<em>' + id + '</em>');
    });
    $("li").css("font-size", "30px");
    $('li').on('click', function () {
        $(this).remove();
    });

    $("form").on("submit", function (event) {
        event.preventDefault();
        $('ul').append("<li>" + $("input").first().val() + "</li>")
    });

})