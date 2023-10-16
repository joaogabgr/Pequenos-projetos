listaItem = document.querySelectorAll(".lista__item");

listaItem.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "lightgray"
    })
    element.addEventListener("mouseleave", () => {
        element.style = ""
    })
    element.addEventListener("click", () => {
        for(let i = 0; i < listaItem.length; i++){
            listaItem[i].className = "lista__item"
        }
        element.className = "lista__item ativo"
    })
});