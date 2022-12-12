import { handleSubmitAddProduct } from "./submit.component.js";
import { handleValidAddProduct } from "./validation.component.js";

export function loadFormAddproduct() {


    const fileInput = document.getElementById('inputImage')
    fileInput.addEventListener('blur', (input) => {
        handleValidAddProduct(input.target);
    });

    
    const inputs = document.querySelectorAll('.input__addform');
    inputs.forEach((input) => {
        input.addEventListener('blur', (input) => {
            handleValidAddProduct(input.target);
        });
    });
    

    const myForm = document.querySelector('#formAddProduct');
    myForm.addEventListener('submit', handleSubmitAddProduct);
}
