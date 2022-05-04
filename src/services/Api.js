const getApiData = () => {
    return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
      .then((response) => response.json())
      .then((data) => {
        const dataClean = data.map((film) => {
          return {
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