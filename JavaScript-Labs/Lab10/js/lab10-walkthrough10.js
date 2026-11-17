// Exercise 10.10: jqXHR handling
$(function () {
    $(".animLoading").hide();
    $("#consume").on("click", function () {
        $(".animLoading").show();
        $("#results").html("<ul></ul>");
        var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
        $.get(url)
            .done(function (data) {
                $.each(data, function (index, value) {
                    $("<li></li>").text(value.name).appendTo("#results ul");
                });
            })
            .fail(function (xhr, status, error) {
                $("#results").html("<p>Failed loading data - status=" + status + " error=" + error + "</p>");
            })
            .always(function () {
                $(".animLoading").fadeOut("slow");
            });
    });
});
