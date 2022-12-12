import { handleSubmitSpeakUs } from "./submit.component.js";
import { handleValidSpeakUs } from "./validation.component.js";

export function loadFormSpeakUs() {

    const inputs = document.querySelectorAll('.input__SpeakUs');
    inputs.forEach((input) => {
        input.addEventListener('blur', (input) => {
            handleValidSpeakUs(input.target);
        });
    });
    
    const textareas = document.querySelectorAll('.textarea__SpeakUs');
    textareas.forEach((textarea) => {
        textarea.addEventListener('blur', (textarea) => {
            handleValidSpeakUs(textarea.target);
        });
    });
    
    const myForm = document.querySelector('#formSpeakUs');
    myForm.addEventListener('submit', handleSubmitSpeakUs);
} 
