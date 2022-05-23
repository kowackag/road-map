export const useStorage = () => {
  const setToLS = (ob, name) => {
    localStorage.setItem(name, JSON.stringify(ob));
  };
  const getFromLS = (name) => {
    const retrivedObject = JSON.parse(localStorage.getItem(name));
    return retrivedObject;
  };

  return [getFromLS, setToLS];
};
