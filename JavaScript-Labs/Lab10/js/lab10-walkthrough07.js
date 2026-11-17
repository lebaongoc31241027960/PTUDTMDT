// Exercise 10.7: Hover image preview
$(function () {
    $("figure img").on("mouseover", function (e) {
        var alt = $(this).attr("alt") || "Image preview";
        var src = $(this).attr("src");
        var newsrc = src.replace("small", "medium");
        var preview = $('<div id="preview"></div>');
        var image = $('<img>').attr("src", newsrc).attr("alt", alt);
        var caption = $("<p></p>").text(alt);
        preview.append(image, caption);
        $("body").append(preview);
        $(this).addClass("gray");
        $("#preview").css({ top: (e.pageY - 10) + "px", left: (e.pageX + 30) + "px" }).fadeIn(300);
    }).on("mouseleave", function () {
        $(this).removeClass("gray");
        $("#preview").remove();
    }).on("mousemove", function (e) {
        $("#preview").css({ top: (e.pageY - 10) + "px", left: (e.pageX + 30) + "px" });
    });
});
