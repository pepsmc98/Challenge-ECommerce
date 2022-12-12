import { loadFormSpeakUs } from "../components/form-speakus/load.component.js";
import { productService } from "../services/product.service.js";
import { loadSearch } from "../components/search/search.component.js"
import { renderClient } from "../components/card/renderclient.component.js"
import { loadAllProductsCategory } from "../components/card/renderallcategory.component.js";

loadFormSpeakUs();
loadSearch();
loadAllProductsCategory();

productService
  .listProduct()
  .then((products) => renderClient(products, 'client'))
  .catch(() => alert('Ocurrio un error'));

