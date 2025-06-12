// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento de evento
const title = document.querySelector("#my-title");

title.addEventListener("click", (e) => {
    console.log(e);
    // console.log(e.srcElement); // foi depreciado pelo target
    console.log(e.target); // novo elemento
    console.log(e.offsetX); // posição do elemento
    console.log(e.pointerType);
});