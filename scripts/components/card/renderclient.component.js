import { createNewCard } from "../card/card.component.js"

export function renderClient(data) {

  const category1 = document.querySelector('[data-starwars]')
  const category2 = document.querySelector('[data-consolas]')
  const category3 = document.querySelector('[data-diversos]')
  
  category1.innerHTML = '';
  category2.innerHTML = '';
  category3.innerHTML = '';

  const device = screen.width < 1024 ?4 :6;

  let countCard1 = 0;
  let countCard2 = 0;
  let countCard3 = 0;

  data.forEach(({id, category, name, price, image, cod}) => {
      const newCard = createNewCard(id, name, price, image, cod, false);
      if(category === 'Star Wars') {
        if(countCard1 < device) {
          category1.appendChild(newCard);
          countCard1++;
        }
      } else if(category === 'Consolas') {
        if(countCard2 < device) {
          category2.appendChild(newCard);
          countCard2++;
        }
      } else {
        if(countCard3 < device) {
          category3.appendChild(newCard);
          countCard3++;
        }
      }
  });   
}