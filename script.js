const display = document.getElementById("display");
const numeros = document.querySelectorAll("[id*=tecla]");
const operadores = document.querySelectorAll("[id*=operador]");

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
  if (operacaoPendente()) {
    const numeroAtual = parseFloat(display.textContent.replace( ' ,', '.'));
    novoNumero = true;
    if (operador == "+") {
      atualizarDisplay(numeroAnterior + numeroAtual);
    } else if (operador == "-") {
      atualizarDisplay(numeroAnterior - numeroAtual);
    } else if (operador == "*") {
      atualizarDisplay(numeroAnterior * numeroAtual);
    } else if (operador == "/") {
      atualizarDisplay(numeroAnterior / numeroAtual);
    }
  }
};

const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto.toLocaleString('BR');
    novoNumero = false;
  } else {
    display.textContent += texto.toLocaleString('BR');
  }
};

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach((numero) => numero.addEventListener("click", inserirNumero));

const selecionarOperador = (evento) => {
  if (!novoNumero) {
    calcular();
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent.replace(',', '.'));
  }
};

operadores.forEach((operador) =>
  operador.addEventListener("click", selecionarOperador)
);
const ativarIgual = () => {
  calcular();
  operador = undefined;
};
document.getElementById("igual").addEventListener("click", ativarIgual);

const limparDisplay = () => (display.textContent = "");
document
  .getElementById("limparDisplay")
  .addEventListener("click", limparDisplay);

const limparCalculo = () => {
  limparDisplay();
  operador = undefined;
  novoNumero = true;
  numeroAnterior = undefined;
};

document
  .getElementById("limparCalculo")
  .addEventListener("click", limparCalculo);


const removeUltimoDigito = () => display.textContent = display.textContent.slice(0, -1)
document.getElementById('backspace').addEventListener('click', removeUltimoDigito )

const existeDecimal = () => display.textContent.indexOf(',') !== -1;
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
    if (!existeDecimal()) {
        if(existeValor()) {
            atualizarDisplay(',')
        } else {
            atualizarDisplay('0,')
        }
    }
} 
    
document.getElementById('decimal').addEventListener('click', inserirDecimal)