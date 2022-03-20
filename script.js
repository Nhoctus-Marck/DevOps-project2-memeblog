function dropSubImg() {
    document.getElementById("menu-img").classList.toggle("show");
    document.getElementById("menu-gif").classList.remove("show");
    document.getElementById("menu-stk").classList.remove("show");
    document.getElementById("menu-nswf").classList.remove("show");
}

function dropSubGif() {
    document.getElementById("menu-gif").classList.toggle("show");
    document.getElementById("menu-img").classList.remove("show");
    document.getElementById("menu-stk").classList.remove("show");
    document.getElementById("menu-nswf").classList.remove("show");
}

function dropSubStk() {
    document.getElementById("menu-stk").classList.toggle("show");
    document.getElementById("menu-gif").classList.remove("show");
    document.getElementById("menu-img").classList.remove("show");
    document.getElementById("menu-nswf").classList.remove("show");
}

function dropSubNswf() {
    document.getElementById("menu-nswf").classList.toggle("show");
    document.getElementById("menu-gif").classList.remove("show");
    document.getElementById("menu-stk").classList.remove("show");
    document.getElementById("menu-img").classList.remove("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        var dropdowns = document.getElementsByClassName("container-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}