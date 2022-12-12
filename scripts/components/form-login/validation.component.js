export function handleValid(input) {
    const typeInput = input.dataset.type;

    if(input.validity.valid) {
        input.parentElement.classList.remove("loginform__input__container--invalid");
        input.parentElement.querySelector(".loginform__message__error").innerHTML = "";
    } else {
        input.parentElement.classList.add("loginform__input__container--invalid");
        input.parentElement.querySelector(".loginform__message__error").innerHTML =
        showErrorMessage(typeInput, input);  
    }
}


const typeErrors = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch'
];


const errorMessage = {
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch:
          "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    }
};
  

function showErrorMessage(typeInput, input) {
    let message = "";
    typeErrors.forEach((error) => {
      if (input.validity[error]) {
          message = errorMessage[typeInput][error];
      }
    });
    return message;
}
