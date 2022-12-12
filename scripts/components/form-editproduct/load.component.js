import { handleSubmitEditProduct } from "./submit.component.js";
import { handleValidEditProduct } from "./validation.component.js";

export function loadFormEditProduct() {


    const fileInput = document.getElementById('inputImage')
    fileInput.addEventListener('blur', (input) => {
        handleValidEditProduct(input.target);
    });

    
    const inputs = document.querySelectorAll('.input__editform');
    inputs.forEach((input) => {
        input.addEventListener('blur', (input) => {
            handleValidEditProduct(input.target);
        });
    });
    

    const myForm = document.querySelector('#formEditProduct');
    myForm.addEventListener('submit', handleSubmitEditProduct);
}
