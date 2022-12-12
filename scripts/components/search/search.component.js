import { productService } from "../../services/product.service.js";
import { renderClient } from "../card/renderclient.component.js"
import { renderAdmin } from "../card/renderadmin.component.js";

export function loadSearch() {
    const barSearch = document.querySelector('.head__search__bar');
    barSearch.addEventListener('submit', handleSubmitSearch);

    const iconSearch =  document.querySelector('[data-icon]');
    iconSearch.addEventListener('click', handleClickSearch);
}


function handleSubmitSearch(event) {
    event.preventDefault();
    const inputSearch = document.querySelector('[data-search]');
    const textSearch = inputSearch.value.toLowerCase();

    search(textSearch);

}


function handleClickSearch(event) {
    event.preventDefault();
    const textSearch = prompt('Buscar:').toLowerCase();
    search(textSearch);
}

function search(textSearch) {
    const url = new URL(window.location);
    const where = (url.pathname).indexOf('administrator.html') > 0 ?'admin' :'index';

    let resultSearch = [];
    
    productService
      .listProduct()
      .then (products => {
        
        resultSearch = products.filter(product => (product.name.toLowerCase()).indexOf(textSearch) >= 0);
        
        if(where === 'index') {
            renderClient(resultSearch);
        } else {
            renderAdmin(resultSearch);    
        }
    })
    .catch((error) => console.log(error));
}
