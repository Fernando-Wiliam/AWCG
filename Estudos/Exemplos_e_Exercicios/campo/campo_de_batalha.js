
// Criar uma cont vetor que guarda todos os elementos com draggable true //
const cartasArrastaveis = document.querySelectorAll("[draggable='true']");

//exibindo o vetor. Neste caso veremos todas as tags img, pois são elas que estão dragabble=true
console.log(cartasArrastaveis);

//para cada elemento no vetor, crie o evento dragstar e a função Arrastas 
cartasArrastaveis.forEach((cartaArrastavel) => {
    cartaArrastavel.addEventListener("dragstart", Arrastar);
})


function Arrastar(){
    console.log('Arrastando');

    //Adcione a classe sendoArrastado ao elemento atual
    this.classList.add("sendoArrastado");
}




//Cria um vetor const com todos os elementos da classe aw_posição. Quero pegar todos os espaços onde poderemos soltar as cartar 
const soltaveis = document.querySelectorAll(".aw_posicao");

//exobindo todos os espaços de posição no campo
console.log(soltaveis);

//para cada elemento no vetor, crie o evento dragover e a função ondeSoltar
soltaveis.forEach((soltavel) => {
    soltavel.addEventListener("dragover", ondeSoltar);
})







 function ondeSoltar(){
    //adionca a classe hoverDragg nos espaços onde as cartas podem entrar, para realçar quando por a carta em cima.
    this.classList.add("hoverDragg")



    //guardando nesta cont o elemento que ganho a classe sendoArrastado.
    const elementoArrastado = document.querySelector(".sendoArrastado");


    //Colocando o elemento com a classe sendoArrastado no espaço
    this.appendChild(elementoArrastado);
    console.log(elementoArrastado);

    console.log(this);

    setTimeout( function removerClasse(){
        elementoArrastado.classList.remove("sendoArrastado")
    }, 1000);
    

 }



 soltaveis.forEach((soltavel) => {
     soltavel.addEventListener("dragleave", sairDeOndeSoltar);
 })
 
 function sairDeOndeSoltar(){
    this.classList.remove("hoverDragg");
 }






