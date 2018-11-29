//Cuando bajas 20 px aparece..
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// Funcion de hacerlo subir
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}