
const setItemToStorage = (data) => {
  Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
};

const getItemFromStorage = (key) => localStorage.getItem(key);

const clearStorage = (key) => (key ? localStorage.removeItem(key) : localStorage.clear());

export { setItemToStorage, getItemFromStorage, clearStorage };
