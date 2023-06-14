// Calcular Fatorial // 
function calculateFactorial() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const result = document.getElementById('result');
  
    if (inputNumber < 0) {
      result.textContent = 'O número deve ser inteiro positivo.';
      return;
    }
  
    if (inputNumber === 0 || inputNumber === 1) {
      result.textContent = 'O fatorial de ' + inputNumber + ' é 1.';
      return;
    }
  
    let factorial = 1;
    for (let i = 2; i <= inputNumber; i++) {
      factorial *= i;
    }
  
    result.textContent = 'O fatorial de ' + inputNumber + ' é ' + factorial + '.';
  }