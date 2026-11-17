// Exercise 9.3: Creating and removing DOM elements
var first = document.getElementById("first");
if (first) {
    var text = document.createTextNode("This is programmatically created");
    var paragraph = document.createElement("p");
    paragraph.appendChild(text);
    first.appendChild(paragraph);
}
var icons = document.getElementById("iconList");
var itemToDelete = document.getElementById("deleteThisOne");
if (icons && itemToDelete) icons.removeChild(itemToDelete);
