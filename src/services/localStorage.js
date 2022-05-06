const get = (key, defaultData) => {
    const data = localStorage.getItem(key);
    if (data === null) {
      return defaultData;
    } else {
      return JSON.parse(data);
    }
  };
  
  /* Guardar datos en LocalStorage */
  const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const objToExport = {
    get: get,
    set: set,
  };
  
  export default objToExport;