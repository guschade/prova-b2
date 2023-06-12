function isPerfectSquare(number) {
  let sqrt = Math.sqrt(number);
  return Number.isInteger(sqrt);
}

function checkPerfectSquare() {
  let number = parseInt(document.getElementById("numberInput").value);

  let result = isPerfectSquare(number);

  let output = document.getElementById("output");
  if (result) {
    output.textContent = number + " é um quadrado perfeito.";
  } else {
    output.textContent = number + " não é um quadrado perfeito.";
  }
}
