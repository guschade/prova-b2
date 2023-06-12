function calculateFactorial() {
  let number = parseInt(document.getElementById("numberInput").value);

  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  let output = document.getElementById("output");
  output.textContent = "O fatorial de " + number + " é " + factorial + ".";
}
