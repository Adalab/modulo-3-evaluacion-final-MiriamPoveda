// Hooks //
import { Link } from "react-router-dom";

function MovieSceneItem(props) {
  // HTML //

  /* PROPS - Pasamos los datos que contiene la API en su variable de estado ya filtrada */

  /* LINK - Para poder hacer click en una tarjeta y acudir a la ruta de dicha tarjeta (a través de su ID) */

  return (
    <Link to={`/movie/${props.oneFilm.id}`}>
      <img
        className="filmPoster"
        alt={props.oneFilm.name}
        src={props.oneFilm.poster}
      />
      <p>
        {props.oneFilm.name} - {props.oneFilm.year}
      </p>
      <p>{props.oneFilm.quote}</p>
    </Link>
  );
}
export default MovieSceneItem;
