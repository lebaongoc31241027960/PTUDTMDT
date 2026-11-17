// Exercise 10.5: Inserting DOM elements
$(function () {
    var img = $('<img src="images/art/thumbs/13030.jpg" alt="Artwork preview">');
    var panel = $(".panel");
    panel.append(img);
});
