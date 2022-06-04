
 /* Function displays drop-down menu */
 function navDropDownMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.style.padding = "60px 0px 0px 0px";
    }
}

/* Toggles between hamburger and X-window-close icon */
function iconToggle(icon_switch) {
    icon_switch.classList.toggle("fa-window-close");
}
