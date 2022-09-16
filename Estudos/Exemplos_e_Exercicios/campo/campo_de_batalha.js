

const cartasArrastaveis = document.querySelectorAll("[draggable='true']");

console.log(cartasArrastaveis);

cartasArrastaveis.forEach((cartaArrastavel) => {
    cartaArrastavel.addEventListener("dragstart", Arrastar);
})

function Arrastar(){
    console.log('Arrastando');

    this.classList.add("sendoArrastado");
    
}





const soltaveis = document.querySelectorAll(".aw_posicao");

console.log(soltaveis);

soltaveis.forEach((soltavel) => {
    soltavel.addEventListener("dragover", ondeSoltar);
})


 function ondeSoltar(){
    this.classList.add("hoverDragg")

    const elementoArrastado = document.querySelector("sendoArrastado");

    console.log(elementoArrastado)
    this.appendChild(elementoArrastado);
 }



 soltaveis.forEach((soltavel) => {
     soltavel.addEventListener("dragleave", sairDeOndeSoltar);
 })
 
 function sairDeOndeSoltar(){
    this.classList.remove("hoverDragg");
 }





