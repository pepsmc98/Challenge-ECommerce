// local 
// const server = 'http://localhost:3000';

// Remoto on render.com
const server = 'https://json-data-test.onrender.com';



const listProduct = () => fetch(server + '/product').then((respuesta) => respuesta.json());


const crearProduct = (category, name, price, description, cod, image) => {
  return fetch(server + '/product', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({id: uuid.v4(), category, name, price, description, cod, image}) 
  })
}
  

const deleteProduct = (id) => {
  return fetch(server + `/product/${id}`, {
    method: 'DELETE'
  })
}


const updateProduct = (id, category, name, price, description, cod, image) => {
  return fetch(server + `/product/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({category, name, price, description, cod, image}) 
  })
    .then(respuesta => respuesta)
    .catch(err => alert('Ocurrió un error'))
}


const detailProduct = (id) => {
  return fetch(server + `/product/${id}`).then(respuesta => respuesta.json());
}


const listProductCategory = (cat) => fetch(server + `/product?category=${cat}`).then((respuesta) => respuesta.json());


export const productService = {
    listProduct,
    listProductCategory,
    crearProduct,
    deleteProduct,
    updateProduct,
    detailProduct
};

