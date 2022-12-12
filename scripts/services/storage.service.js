const store = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


const retrieve = (key) => {

    const item = localStorage.getItem(key);

    if(item) {
      return JSON.parse(item);
    }
    return;
  }


export const storageService = {
    store,
    retrieve
};