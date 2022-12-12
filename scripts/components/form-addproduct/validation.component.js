export function handleValidAddProduct(input) {
    const typeInput = input.dataset.type;
        
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
    'patternMismatch'
];


const errorMessage = {
    url: {
      valueMissing: "Debe proporcionar alguna imagen para el producto",
    },
    category: {
      valueMissing: "El campo Categoría no puede estar vacío",
    },
    nameproduct: {
      valueMissing: "El campo Nombre no puede estar vacío",
      patternMismatch: "El nombre debe contener entre 1 y 20 caracteres.",
    },
    price: {
      valueMissing: "El campo Precio no puede estar vacío",
    },
    description: {
      valueMissing: "El campo Descripción no puede estar vacío",
      patternMismatch: "La descripción debe contener entre 1 y 150 caracteres.",
    },
    cod: {
      valueMissing: "El campo Código no puede estar vacío",
      patternMismatch: "El código debe contener 6 dígitos numéricos",
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
