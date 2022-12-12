import { createNewCard } from "../card/card.component.js"

export function renderAdmin(data) {

    const products = document.querySelector('[data-products]')
    products.innerHTML = '';
    data.forEach(({id, name, price, image, cod}) => {
        const newCard = createNewCard(id, name, price, image, cod, true);
        products.appendChild(newCard);
    });
}
