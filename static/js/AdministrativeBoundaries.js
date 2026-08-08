function toggleTree(id, element) {

    let tree = document.getElementById(id);
    let arrow = element.querySelector(".arrow");

    if (tree.style.display === "block") {

        tree.style.display = "none";
        arrow.classList.remove("fa-minus");
        arrow.classList.add("fa-plus");

    } else {

        tree.style.display = "block";
        arrow.classList.remove("fa-plus");
        arrow.classList.add("fa-minus");

    }
}
function Showlayer(icon) {

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");

    if (icon.classList.contains("fa-eye")) {
        console.log("Layer On");
        
    } else {
        console.log("Layer Off");
    }
}