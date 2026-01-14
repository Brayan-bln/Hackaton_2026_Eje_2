function cambiarEstado(color) {
  const semaforo = document.getElementById("semaforo");
  const estadoTexto = document.getElementById("estadoTexto");
  const mensajeIA = document.getElementById("mensajeIA");

  semaforo.className = color;

  if (color === "verde") {
    estadoTexto.innerText = "Estado: VERDE";
    mensajeIA.innerText =
      "El cliente se encuentra estable. No se requiere acción.";
  }

  if (color === "amarillo") {
    estadoTexto.innerText = "Estado: AMARILLO";
    mensajeIA.innerText =
      "Se detecta una posible inconformidad. Se recomienda contacto preventivo para entender la situación y corregirla.";
  }

  if (color === "rojo") {
    estadoTexto.innerText = "Estado: ROJO";
    mensajeIA.innerText =
      "Riesgo alto de cancelación. Se requiere atención inmediata y prioritaria.";
  }
}
