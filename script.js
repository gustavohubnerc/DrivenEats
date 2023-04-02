let infoPrato;
let infoPreco1;
let pedido1;

let infoBebida;
let infoPreco2;
let pedido2;

let infoSobremesa;
let infoPreco3;
let pedido3;

function selectedFood(selecionados1) {
  const selecionadoAnterior1 = document.querySelector(".meal .selecionados");

  if (selecionadoAnterior1 !== null) {
    selecionadoAnterior1.classList.remove("selecionados");
  }

  selecionados1.classList.add("selecionados");
  const elementoPrato = document.querySelector(".prato-nome");
  const elementoPreco1 = document.querySelector(".preco");
  infoPrato = elementoPrato.textContent;
  infoPreco1 = elementoPreco1.textContent;
  pedido1 = selecionados1;
  finalizarPedido();
}
function selectedDrink(selecionados2) {
  const selecionadoAnterior2 = document.querySelector(".drink .selecionados");

  if (selecionadoAnterior2 !== null) {
    selecionadoAnterior2.classList.remove("selecionados");
  }
  selecionados2.classList.add("selecionados");
  const elementoBebida = document.querySelector(".bebida-nome");
  const elementoPreco2 = document.querySelector(".preco");
  infoBebida = elementoBebida.textContent;
  infoPreco2 = elementoPreco2.textContent;
  pedido2 = selecionados2;
  finalizarPedido();
}
function selectedSobremesa(selecionados3) {
  const selecionadoAnterior3 = document.querySelector(".dessert .selecionados");

  if (selecionadoAnterior3 !== null) {
    selecionadoAnterior3.classList.remove("selecionados");
  }
  selecionados3.classList.add("selecionados");
  const elementoSobremesa = document.querySelector(".sobremesa-nome");
  const elementoPreco3 = document.querySelector(".preco");
  infoSobremesa = elementoSobremesa.textContent;
  infoPreco3 = elementoPreco3.textContent;
  pedido3 = selecionados3;
  finalizarPedido();
}
function finalizarPedido() {
  if (pedido1!== undefined && pedido2!== undefined && pedido3!== undefined) {
    const pedidoFeito = document.querySelector(".botaoSelecionar");
    document.querySelector(".botaoSelecionar").removeAttribute("disabled");
    pedidoFeito.classList.add(".botaoFinalizar");
    pedidoFeito.innerHTML = "Fechar Pedido";
  }  
}
function mensagemWhatsapp() {
    infoPreco1 = infoPreco1.replace('R$', '');
    infoPreco2 = infoPreco2.replace('R$', '');
    infoPreco3 = infoPreco3.replace('R$', '');

    infoPreco1 = infoPreco1.replace(',', '.');
    infoPreco2 = infoPreco2.replace(',', '.');
    infoPreco3 = infoPreco3.replace(',', '.');

    let precoTotal = Number(infoPreco1) + Number(infoPreco2) + Number(infoPreco3);
    
    let mensagem= `Olá, gostaria de fazer o pedido:
    - Prato: ${infoPrato}
    - Bebida: ${infoBebida}
    - Sobremesa: ${infoSobremesa}
    Total: R$ ${precoTotal.toFixed(2)}`;
    const whats = encodeURIComponent(mensagem);
    window.open(`https://wa.me/32988636723?text=${whats}`);
    console.log(precoTotal);
}