export function handleValidSpeakUs(input) {

    const typeInput = input.dataset.type;

    if(validators[typeInput]) {
        validators[typeInput](input);
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove("component__input__container--invalid");
        input.parentElement.querySelector(".component__message__error").innerHTML = "";
    } else {
        input.parentElement.classList.add("component__input__container--invalid");
        input.parentElement.querySelector(".component__message__error").innerHTML =
        showErrorMessage(typeInput, input);  
    }
}


const typeErrors = [
    'valueMissing',
    'patternMismatch',
    'customError'
];


const errorMessage = {
    name: {
      valueMissing: "El nombre no puede estar vacío",
      patternMismatch: "El nombre debe contener entre 1 y 40 caracteres.",
    },
    message: {
      valueMissing: "El mensaje no puede estar vacío",
      customError: "El mensaje debe contener entre 1 y 120 caracteres.",
    }
};


const validators = {
    message: (input) => validateMessage(input),
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


function validateMessage(input) {
    let status = "";
    if(input.value.length > 120) {
        status = "El mensaje debe contener entre 1 y 120 caracteres";
    }
    input.setCustomValidity(status);
}
