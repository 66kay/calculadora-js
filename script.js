function calcular(operacion) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado = 0;

  if (operacion == "+") {
    resultado = num1 + num2;
  } else if (operacion == "-") {
    resultado = num1 - num2;
  } else if (operacion == "*") {
    resultado = num1 * num2;
  } else if (operacion == "/") {
    if (num2 == 0) {
      document.getElementById("resultado").textContent = "No se puede dividir por 0";
      return;
    }
    resultado = num1 / num2;
  }

  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}