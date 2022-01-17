
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');

const atualizarDisplay = (texto) =>{
    display: display.textContent += texto;
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));