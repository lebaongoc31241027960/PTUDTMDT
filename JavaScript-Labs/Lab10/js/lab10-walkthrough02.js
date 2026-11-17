// Exercises 10.1–10.2: jQuery setup and basic selectors
$(function () {
    var msg = $("#msgArea");
    msg.val("Here is some new text");

    // Exercise 10.2: the PDF asks you to test these one at a time.
    // $("#first").html("new Title"); // replaces the contents of #first
    // msg.val("My class is " + msg.attr("class"));

    // Keep the supplied form visible in the completed walkthrough.
    $("#pageTitle").html("New Title");
    msg.val("My class is " + msg.attr("class"));
    $("button").css("background-color", "red");
    $("body").css("background-color", "ivory");
    $(".center-icons").addClass("selected");
});
