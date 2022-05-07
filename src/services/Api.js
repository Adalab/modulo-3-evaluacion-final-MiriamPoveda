/* Instalamos la librería con _ npm install uuid _ */
/* Realizamos el FETCH para poder traer los datos de la API */
/* Transformamos los datos con MAP y cogemos los que se nos solicitan */

const getApiData = () => {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((film, index) => {
        return {
          /* Identificador */
          id: index,
          /* Pintar al inicio */
          poster: film.poster,
          name: film.movie,
          year: film.year,
          quote: film.full_line,
          /* Extra para pintar en detalle */
          director: film.director,
          audio: film.audio,
        };
      });
      return dataClean;
    });
};

export default getApiData;
