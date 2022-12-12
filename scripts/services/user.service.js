// local 
// const server = 'http://localhost:3000';

// Remoto on render.com
const server = 'https://json-data-test.onrender.com';

const listUsers = () => fetch(server+'/user').then((respuesta) => respuesta.json());

export const userServices = {
    listUsers
};
  