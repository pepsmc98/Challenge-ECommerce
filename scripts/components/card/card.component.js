import { productService } from "../../services/product.service.js";
import { renderAdmin } from "./renderadmin.component.js";

export const createNewCard = (id, name, price, image, cod, admin) => {

    const card = document.createElement('div');
    card.classList.add('component__card');
    let contenido = '';

    if(admin) {
        contenido = `
        <div class="component__card__tools">
            <img class="component__card__img" src=${image}>
        
            <div class="component__card__buttons">
                
                <button class="component__card__button" type="button" id="${id}">
                    <img src="../assets/generals/deletered.png" alt="Borrar">
                </button>

                <a href="editproduct.html?id=${id}" class="component__card__button">
                    <img src="../assets/generals/editred.png" alt="Editar">
                </a>
    
            </div>
        
        </div>
        <p class="component__card__name">${name}</p>
        <p class="component__card__price">AR$ ${price}</p>
        <p class="component__card__cod">#${cod}</p>
        `;
    
    } else {

        contenido = `
            <img class="component__card__img" src=${image}>
            <p class="component__card__name">${name}</p>
            <p class="component__card__price">AR$ ${price}</p>
            <a class="component__card__link" href="
        `;
        const url = new URL(window.location);
        const where = (url.pathname).indexOf('product.html') > 0 ?'product' :'index';

        if(where === 'product') {            
            contenido += `product.html?id=${id}">Ver producto</a>`
        } else {
            contenido += `screens/product.html?id=${id}">Ver producto</a>`
        }
    }

    card.innerHTML = contenido;

    if(admin) {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {

            if(confirm('¿Realmente quiere eliminar el producto?')) {            
                const id = btn.id;
                productService
                    .deleteProduct(id)
                    .then(() => {
                        productService
                            .listProduct()
                            .then((products) => renderAdmin(products))
                            .catch(() => alert('Ocurrio un error'))
                    })
                    .catch(err => alert('Ocurrió un error'));
            }     
        });        
    }
    
    return card;
}

