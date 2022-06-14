document.getElementById("verMas").addEventListener("click", () => {
    document.getElementById("verMas").style.display = "none";
    document.getElementById("verMenos").style.display = "block";
    document.querySelectorAll(".ocultar").forEach((element) => {
        element.classList.add("mostrar");
    });
});


document.getElementById("verMenos").addEventListener("click", () => {
    document.getElementById("verMenos").style.display = "none";
    document.getElementById("verMas").style.display = "block";
    document.querySelectorAll(".mostrar").forEach((element) => {
        element.classList.remove("mostrar");
    });
    document.getElementById("proyectos").scrollIntoView({behavior: "smooth"});
});