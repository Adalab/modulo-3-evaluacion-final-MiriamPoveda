// Components //
import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList(props) {
  // Función para pintar //

  /* Transformamos para pintar un LI por cada tarjeta y pasamos por PROPS la variable que contiene la API */
  const allFilms = props.allFilters.map((oneFilm) => {
    return (
      <li key={oneFilm.id}>
        <MovieSceneItem oneFilm={oneFilm} />
      </li>
    );
  });

  // HTML //

  /* PINTAR - Cogemos la función para pintar los datos en el navegador */

  return (
    <section>
      <ul>{allFilms}</ul>
    </section>
  );
}
export default MovieSceneList;
