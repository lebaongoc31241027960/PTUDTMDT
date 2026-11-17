// Exercise 9.7: Working with forms
function setBackground(e) {
    e.target.style.backgroundColor = e.type === "focus" ? "#FFE393" : "white";
}
window.addEventListener("load", function () {
    var fields = document.querySelectorAll("input[type=text], input[type=password]");
    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});
