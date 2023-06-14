// Validar uma senha //

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const result = document.getElementById('result');
  
    const hasMinLength = passwordInput.length >= 8;
    const hasUppercase = /[A-Z]/.test(passwordInput);
    const hasLowercase = /[a-z]/.test(passwordInput);
    const hasNumber = /\d/.test(passwordInput);
  
    if (hasMinLength && hasUppercase && hasLowercase && hasNumber) {
      result.textContent = 'A senha atende aos critérios! Parabéns :)';
    } else {
      result.textContent = 'A senha não atende aos critérios... Refaça uma senha válida :(';
    }
  }
