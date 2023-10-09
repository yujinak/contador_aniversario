"use strict";

const aniversario = document.getElementById("data-aniversario");
const dataDoAniversario = prompt(
  `Qual o dia do aniversário? \n 
Por favor, escreva em inglês no formato 'Jan 1, 2024, 13:00:00'`,
  "Jan 1, 2024, 13:00:00"
);

aniversario.innerHTML = dataDoAniversario;

const dataDoEvento = new Date(dataDoAniversario);
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diasEmMs) / horasEmMs
  );
  const minutosAteOEvento = Math.floor(
    ((distanciaAteOEvento % diasEmMs) % horasEmMs) / minutosEmMs
  );
  const segundosAteOEvento = Math.floor(
    (((distanciaAteOEvento % diasEmMs) % horasEmMs) % minutosEmMs) / 1000
  );

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    contador.innerHTML = "Feliz Aniversário!";
  } else {
    contador.innerHTML = `O Aniversário começa em:\n ${diasAteOEvento} dias, ${horasAteOEvento} horas, ${minutosAteOEvento} minutos e ${segundosAteOEvento} segundos`;
  }
}, 1000);

const body = document.querySelector(".body");

body.addEventListener("mousemove", function () {
  body.style.backgroundColor = Math.random();
});
