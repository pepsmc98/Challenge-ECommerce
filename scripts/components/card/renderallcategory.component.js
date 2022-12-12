import { productService } from "../../services/product.service.js";
import { createNewCard } from "../card/card.component.js"

export function loadAllProductsCategory() {
  const categories = document.querySelectorAll('.productsline__top__link');
  categories.forEach((category) => {
    category.addEventListener('click', handleSubmit);
  });
}


function handleSubmit(event) {
  event.preventDefault();
  
  let selectCategory = '';
  let compareCategory = '';

  switch (event.target.name) {
    case 'allstar':
      selectCategory = '[data-starwars]';
      compareCategory = 'Star Wars';
      break;
    case 'alldrives':
      selectCategory = '[data-consolas]';
      compareCategory = 'Consolas';
      break;
    case 'allvarious':
      selectCategory = '[data-diversos]';
      compareCategory = 'Diversos';
      break;
  }
  
  const cards = document.querySelector(selectCategory)
  cards.innerHTML = '';

  productService
    .listProduct()
    .then((products) => {
      products.forEach(({id, category, name, price, image, cod}) => {
      if(category === compareCategory) {
        const newCard = createNewCard(id, name, price, image, cod, false);
        cards.appendChild(newCard);
      }
      });
    }) 
    .catch((error) => console.log(error));
    
}
