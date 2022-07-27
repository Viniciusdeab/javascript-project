// classList - para mostrar/pegar todas as classes;
// contains - verifica o classList para uma classe específica;
// add - adiciona classes;
// remove - remove classes;
// toggle - para adicionar a alternar na classe; 

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    links.classList.toggle("show-links");

});