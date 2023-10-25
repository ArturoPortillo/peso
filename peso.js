let peso;
let esNumero = false;

do {
  peso = prompt("Ingresa tu peso: ");
  if (peso === null) {

    break;
  }
  esNumero = !isNaN(peso) && peso !== '';

  if (!esNumero) {
    alert("No ingresaste un valor válido para el peso. Inténtalo de nuevo.");
  } else {
    alert("Tu peso es: " + peso);
  }

  alert("Gracias!");
} while (!esNumero);