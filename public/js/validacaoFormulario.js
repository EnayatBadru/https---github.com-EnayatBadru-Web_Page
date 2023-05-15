// Seleciona o formulário
const form = document.querySelector('#form');

// Seleciona os campos de usuário e senha
const user = document.querySelector('#user');
const pass = document.querySelector('#pass');

// Seleciona os campos span para selecionar os erros do usuario e senha
const userError = document.querySelector('#userError');
const passwordError = document.querySelector('#passwordError');

// Adiciona um listener para o submit do formulário
form.addEventListener('submit', function(e) {
  // Verifica se o campo de usuário está vazio
  if (user.value.trim() === '') {
    e.preventDefault();
    userError.innerHTML = "Por favor, informe o usuário";
    return false;
  }

  // Verifica se o campo de senha está vazio
  if (pass.value.trim() === '') {
    e.preventDefault();
    passwordError.innerHTML = "Por favor, informe a senha";
    return false;
  }

  // Verifica se a senha tem no mínimo 6 caracteres
  if (pass.value.length < 6) {
    e.preventDefault();
    passwordError.innerHTML = "A senha deve ter no mínimo 6 caracteres";
    return false;
  }

  // Se todas as validações passaram, permite o submit do formulário
  return true;
});
