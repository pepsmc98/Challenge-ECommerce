import { productService } from "../../services/product.service.js";

export function handleSubmitEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const fileInput = document.getElementById('inputImage')
    const img = document.getElementById('img-result')
    
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
        
    const comboBox = document.querySelector('[data-category]');
    const category = comboBox.options[comboBox.selectedIndex].text;
    
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;
    const cod = document.querySelector('[data-cod]').value;
    const image = document.querySelector('[data-image]').src;

    productService
        .updateProduct(id, category, name, price, description, cod, image)
        .then(() => {
            fileInput.value = '';
            img.setAttribute('src', '');
            this.reset();
            alert('Producto actualizado');
            window.location.href = 'administrator.html';
        })
        .catch(err => console.log(err));
    

}