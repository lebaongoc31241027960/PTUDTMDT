// Exercise 9.8: Form validation
function init() {
    var form = document.getElementById("sampleForm");
    if (form) form.addEventListener("submit", checkForEmptyFields);
}
window.addEventListener("load", init);
function checkForEmptyFields(e) {
    var errorArea = document.getElementById("errors");
    if (errorArea) errorArea.className = "hidden";
    var fields = document.querySelectorAll("#sampleForm input[type=text], #sampleForm input[type=password]");
    var fieldList = [];
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value.trim() === "") {
            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }
    if (fieldList.length > 0) {
        var msg = "The following fields can't be empty: " + fieldList.map(function (field) { return field.id; }).join(", ");
        if (errorArea) {
            errorArea.innerHTML = "<p>" + msg + "</p>";
            errorArea.className = "visible";
        } else {
            alert(msg);
        }
        fieldList[0].focus();
    }
}
