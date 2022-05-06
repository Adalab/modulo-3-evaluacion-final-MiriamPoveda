/* Obtener los datos */
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

/* Funciones en objeto para exportar a App */
const objToExport = {
  get: get,
  set: set,
};

export default objToExport;
