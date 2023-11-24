const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

const botones = document.querySelectorAll("button");

// Crear un sonido para los botones
const clickHandler = function(event) {
  // Reproducir el sonido
  const audio = new Audio("click.mp3");
  audio.play();
};

// Agregar el evento click global a todos los botones
for (const boton of botones) {
  boton.addEventListener("click", clickHandler);
}