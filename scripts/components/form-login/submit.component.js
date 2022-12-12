import { userServices } from "../../services/user.service.js";
import { storageService } from "../../services/storage.service.js";

export function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this);

    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;

    let valid = false;

    userServices
        .listUsers()
        .then((data) => {
            data.forEach((user) => {
                if(email.toLowerCase() === user.email.toLowerCase() && password === user.password) {
                    valid = true;
                }
            }); 
            
            if(valid) {
                this.reset();
                storageService.store('token', uuid.v4());
                window.location.href = 'administrator.html'
            } else {
                alert('Combinación email-password inválida')
            }
        })
        .catch((error) => alert('Ocurrio un error, intente más tarde.'));    

}
