import { productService } from "../../services/product.service.js";

export function handleSubmitAddProduct(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const fileInput = document.getElementById('inputImage')
    const img = document.getElementById('img-result')
    const inputUrl = document.getElementById('form-input');
    
    
    const comboBox = document.querySelector('[data-category]');
    const category = comboBox.options[comboBox.selectedIndex].text;

    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;
    const cod = document.querySelector('[data-cod]').value;
    const image = document.querySelector('[data-image]').src;

    productService
        .crearProduct(category, name, price, description, cod, image)
        .then(() => {
            fileInput.value = '';
            img.setAttribute('src', '');
            this.reset();
            inputUrl.setAttribute('required', '')
            alert('Producto agregado');
        })
        .catch(err => console.log(err));
    

}