export const debounce = (func, delay) => {
  let setTimoutInstance;
  return function () {
    const self = this;
    const args = arguments;
    if (setTimoutInstance) clearTimeout(setTimoutInstance);
    setTimoutInstance = setTimeout(() => func.apply(self, args), delay);
  };
};
