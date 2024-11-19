document.getElementById('calcularNivelRiesgo').addEventListener('click', function() {
  // Capturar la puntuación extra de Grupo C
  let puntuacionExtraC = parseInt(document.getElementById('extraGrupoC').value);

  // Determinar el nivel de riesgo basado en la puntuación
  let nivelRiesgo;
  if (puntuacionExtraC >= 1 && puntuacionExtraC <= 1) {
    nivelRiesgo = 'Nivel 0: Riesgo inapreciable - Intervención no necesaria';
  } else if (puntuacionExtraC >= 2 && puntuacionExtraC <= 3) {
    nivelRiesgo = 'Nivel 1: Riesgo bajo - Intervención puede ser necesaria';
  } else if (puntuacionExtraC >= 4 && puntuacionExtraC <= 7) {
    nivelRiesgo = 'Nivel 2: Riesgo medio - Intervención necesaria';
  } else if (puntuacionExtraC >= 8 && puntuacionExtraC <= 10) {
    nivelRiesgo = 'Nivel 3: Riesgo alto - Intervención necesaria pronto';
  } else if (puntuacionExtraC >= 11 && puntuacionExtraC <= 15) {
    nivelRiesgo = 'Nivel 4: Riesgo muy alto - Intervención actuación inmediata';
  } else {
    nivelRiesgo = 'Puntuación no válida';
  }

  // Mostrar el resultado del nivel de riesgo
  document.getElementById('nivelRiesgo').innerText = nivelRiesgo;
});