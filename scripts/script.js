/* Opens and closes the small-screen navigation menu. */
function hamburger() {
    var menu = document.getElementById("menu-links");
    var button = document.getElementById("menu-button");
    var isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
    button.setAttribute("aria-expanded", String(!isOpen));
}
