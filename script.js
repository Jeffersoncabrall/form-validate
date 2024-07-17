const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório");
  } else {
    setSucessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor insira um email válido");
  } else {
    setSucessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no minimo 7 caracteres");
  } else {
    setSucessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não se conferem");
  } else {
    setSucessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return (formControl.className = "form-control sucess");
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control sucess";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
