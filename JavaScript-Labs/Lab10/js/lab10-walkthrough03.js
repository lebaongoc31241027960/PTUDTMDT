// Exercise 10.3: Advanced jQuery selectors
$(function () {
    // Highlight password inputs.
    $(":password").css("background-color", "yellow");
    // Highlight every fourth child in the form.
    $("form :nth-child(4n)").css("background-color", "yellow");
    // Highlight labels containing the word "word".
    $('label:contains("word")').css("color", "black");
});
