// Components //
import MovieSceneItem from "./MovieSceneItem";
// Styles //
import "../../styles/Lists/MovieSceneList.scss";

function MovieSceneList(props) {
  // Función para pintar //

  /* Transformamos para pintar un LI por cada tarjeta y pasamos por PROPS la variable que contiene la API */
  const allFilms = props.allFilters.map((oneFilm) => {
    return (
      <li className="movieList__movieItem" key={oneFilm.id}>
        <MovieSceneItem oneFilm={oneFilm} />
      </li>
    );
  });

  // HTML //

  /* PINTAR - Cogemos la función para pintar los datos en el navegador */

  return <ul className="movieList">{allFilms}</ul>;
}
export default MovieSceneList;
