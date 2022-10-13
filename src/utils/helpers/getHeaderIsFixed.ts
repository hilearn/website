const getHeaderIsFixed = () => {
  return window && window.scrollY > 10;
};

export default getHeaderIsFixed;
