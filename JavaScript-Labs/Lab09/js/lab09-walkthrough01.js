// Exercise 9.1: Basic DOM selection
var msg = document.getElementById("msgArea");
if (msg) {
    msg.value = "Here is some text";
    var title = document.getElementById("pageTitle");
    if (title) title.innerHTML = "New Title";
    var first = document.getElementById("first");
    if (first) msg.value = first.innerText;
}
