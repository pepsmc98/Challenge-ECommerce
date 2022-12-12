import { productService } from "../services/product.service.js";
import { loadFormSpeakUs } from "../components/form-speakus/load.component.js";
import { loadFormEditProduct } from "../components/form-editproduct/load.component.js";
import { storageService } from "../services/storage.service.js";


loadFormSpeakUs();
loadFormEditProduct();

const getInformation = async () => {

	const urlPage = new URL(window.location);
    const id = urlPage.searchParams.get('id');

    if(id == null) {
       // window.location.href = '/screens/error.html';
	   alert('Ocurrio un error');
	   return;
    }

	const categoryOptions = {
		'Star Wars': 0,
		'Consolas': 1,
		'Diversos': 2,
	};

	const comboBox = document.querySelector('[data-category]');
    const name = document.querySelector('[data-name]');
    const price = document.querySelector('[data-price]');
    const description = document.querySelector('[data-description]');
    const cod = document.querySelector('[data-cod]');
    const image = document.querySelector('[data-image]');

	try {
        const product = await productService.detailProduct(id);
		if(product.id) {

			comboBox.selectedIndex = categoryOptions[product.category];
			name.value = product.name;
			price.value = product.price;
			description.value = product.description;
			cod.value = product.cod;
			image.setAttribute('src', product.image);
        } else {
            throw new Error();
        }
 

	} catch(error) {
       // window.location.href = '/screens/error.html';
	   alert('Ocurrio un error');
    }
}

// Simulate rutes
const admin = storageService.retrieve('token');
if(!admin) {
  	window.location.href =  '../index.html'
} else {
	getInformation();
}

const fileInput = document.getElementById('inputImage')
const buttonInput = document.getElementById('file-button');
const dropZone = document.getElementById('result-image')
const img = document.getElementById('img-result')
const inputUrl = document.getElementById('form-input');


buttonInput.addEventListener('click', (e) => {
	e.preventDefault();
	fileInput.click();
});


inputUrl.addEventListener('change', (e) => {
	e.preventDefault();

	fetch(inputUrl.value)
		.then(res => res.blob())
		.then(blob => {
			if(blob.type === 'image/jpeg') {
				console.log(blob.type);
				const file = new File([blob], 'image', {type: blob.type});
				const dataTransfer = new DataTransfer();
				dataTransfer.items.add(file);
				fileInput.files = dataTransfer.files;		
				uploadImage(file);
			} else {
				console.log(blob.type);
				fileInput.value = '';
				img.setAttribute('src', '');
				inputUrl.value = '';	
				inputUrl.setAttribute('required', '')	
				inputUrl.focus();
				inputUrl.blur();
			}
		})
		.catch(error => console.error(error));
});


dropZone.addEventListener('dragover', (e) => {
	e.preventDefault();
	dropZone.classList.add('file__result--active');
})


dropZone.addEventListener('dragleave', (e) => {
	e.preventDefault();
	dropZone.classList.remove('file__result--active');
})


dropZone.addEventListener('drop', (e) => {
	e.preventDefault();
	fileInput.files = e.dataTransfer.files;
	const file = fileInput.files[0];		
	inputUrl.removeAttribute('required')
	inputUrl.focus();
	inputUrl.blur();
	uploadImage(file);
})


fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0];
	inputUrl.removeAttribute('required')
	inputUrl.focus();
	inputUrl.blur();
	uploadImage(file);
})


const uploadImage = (file) => {
	const fileReader = new FileReader();
	fileReader.readAsDataURL(file);
	fileReader.addEventListener('load', (e) => {
		img.setAttribute('src', e.target.result);
	});
}

