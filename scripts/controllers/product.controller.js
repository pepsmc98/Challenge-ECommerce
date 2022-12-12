import { productService } from "../services/product.service.js";
import { loadFormSpeakUs } from "../components/form-speakus/load.component.js";
import { createNewCard } from "../components/card/card.component.js"

loadFormSpeakUs();


const getInformation = async () => {

    const urlPage = new URL(window.location);
    const id = urlPage.searchParams.get('id');

    if(id == null) {
        alert('Ocurrio un error');
        return;
    }

    try {
        const product = await productService.detailProduct(id); 
		if(product.id) {
            renderProduct(product)
            const productSimilary = await productService.listProductCategory(product.category);
            if(productSimilary.length > 1) {
                renderProductSimilary(productSimilary, product.id);
            }
        } else {
            throw new Error();
        }
	} catch(error) {
        alert('Ocurrio un error');
    }
}


getInformation();


const renderProduct = (product) => {

    const productContainer = document.querySelector('.product')
    productContainer.innerHTML = '';
    let contenido = '';
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('product__imagen__container');
    contenido = `<img class="product__image" src=${product.image} alt="">`;
    imageContainer.innerHTML = contenido;

    productContainer.appendChild(imageContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('product__text');
    contenido = `
        <p class="product__name">${product.name}</p>
        <p class="component__card__price">AR$ ${product.price}</p>
        <p class="product__description">${product.description}</p>
    `;
    textContainer.innerHTML = contenido;
    productContainer.appendChild(textContainer);
}

const renderProductSimilary = (product, filter) => {

    const device = screen.width < 1024 ?4 :6;
    let countCard = 0;

    const products = document.querySelector('[data-similary]')
    products.innerHTML = '';
    product.forEach(({id, name, price, image, cod}) => {
        if(id !== filter) {
            if(countCard < device) {
                const newCard = createNewCard(id, name, price, image, cod, false);
                products.appendChild(newCard);
                countCard++;
            }
        }
    });
}
