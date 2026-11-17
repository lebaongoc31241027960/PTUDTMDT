// Exercise 9.4: Simple event handling
var btn = document.getElementById("testButton");
function simpleHandler() {
    var content = document.getElementById("content");
    if (!content || !btn) return;
    if (btn.innerHTML === "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        window.setTimeout(function () { content.style.display = "none"; }, 1000);
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        window.setTimeout(function () { content.className = "makeItNormal"; }, 500);
    }
}
if (btn) btn.addEventListener("click", simpleHandler);
var img = document.getElementById("mainImage");
if (img) {
    img.addEventListener("mouseover", function () { img.className = "makeItGray"; });
    img.addEventListener("mouseout", function () { img.className = "makeItNormal"; });
}
