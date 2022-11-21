console.log("hola mundo");

const $menuNavegacion = document.querySelector("nav");

$menuNavegacion.addEventListener("click", e=>{
    console.log(e.target)
    if (e.target.matches("#btn-menu")) {
        $menuNavegacion.classList.remove("btn-menu-open");
        $menuNavegacion.classList.add("btn-menu-close");
        document.querySelector("header").classList.remove("modal");
        document.getElementById("btn-menu").style.display = 'none';
    }

})
document.querySelector("header").addEventListener("click",e=>{
    console.log(e.target)
    if (e.target.matches("#btn-hamburguer")) {
        $menuNavegacion.classList.remove("btn-menu-close");
        $menuNavegacion.classList.add("btn-menu-open");
document.querySelector("header").classList.add("modal");
        document.getElementById("btn-menu").style.display = 'block';
    }
})