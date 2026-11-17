// Exercises 9.5–9.6: Load events and debugging
window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".movingDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            console.log("Mouseover triggered by " + e.target.id, e);
        });
    }
});
