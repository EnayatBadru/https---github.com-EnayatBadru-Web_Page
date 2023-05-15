const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Impedir que o formulário seja enviado
  event.preventDefault();

  // Obter os valores dos campos
  const user = document.getElementById('user').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  const confPass = document.getElementById('confPass').value;

  // Validar os valores dos campos
  const errors = [];
  if (user.length < 3) {
    errors.push('O usuário deve ter pelo menos 3 caracteres.');
  }
  if (pass.length < 6) {
    errors.push('A senha deve ter pelo menos 6 caracteres.');
  }
  if (pass !== confPass) {
    errors.push('As senhas não correspondem.');
  }

  // Exibir mensagens de erro ou enviar o formulário
  const errorContainer = document.getElementById('error-container');
  if (errors.length > 0) {
    errorContainer.innerHTML = errors.join('<br>');
  } else {
    form.submit();
  }
});
