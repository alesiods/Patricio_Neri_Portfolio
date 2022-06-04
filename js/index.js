document.getElementById("verMas").addEventListener("click", () => {
    document.getElementById("verMas").style.display = "none";
    document.querySelectorAll(".ocultar").forEach((element) => {
        element.classList.remove("ocultar");
    });
});
