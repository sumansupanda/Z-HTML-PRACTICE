// document.getElementById("userIcon").addEventListener("click", function () {
//     document.getElementById("see-the-game").classList.toggle("show");
// });

document.addEventListener("DOMContentLoaded", function () {
    let userIcon = document.getElementById("userIcon");
    let popup = document.getElementById("see-the-game");

    userIcon.addEventListener("click", function (event) {
        popup.classList.toggle("show");
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!popup.contains(event.target) && event.target !== userIcon) {
            popup.classList.remove("show");
        }
    });
});
