export const localStorageSetItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const localStorageGetFavouriteList = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
