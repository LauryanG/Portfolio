function toggle() {
    if(document.getElementById("flexSwitchCheckDefault").checked == true) {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
}