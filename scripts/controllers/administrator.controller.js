import { loadFormSpeakUs } from "../components/form-speakus/load.component.js";
import { productService } from "../services/product.service.js";
import { renderAdmin } from "../components/card/renderadmin.component.js";
import { loadSearch } from "../components/search/search.component.js";
import { storageService } from "../services/storage.service.js";

loadFormSpeakUs();
loadSearch();

// Simulate token
const admin = storageService.retrieve('token');

if(!admin) {
  window.location.href =  '../index.html'
} else {
  productService
    .listProduct()
    .then((products) => renderAdmin(products))
    .catch(() => alert('Ocurrio un error'));
}