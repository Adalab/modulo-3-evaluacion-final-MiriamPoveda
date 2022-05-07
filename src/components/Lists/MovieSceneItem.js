// Hooks //
import { Link } from "react-router-dom";
// Styles //
import "../../styles/Lists/MovieSceneItem.scss";

function MovieSceneItem(props) {
  // HTML //

  /* PROPS - Pasamos los datos que contiene la API en su variable de estado ya filtrada */

  /* LINK - Para poder hacer click en una tarjeta y acudir a la ruta de dicha tarjeta (a través de su ID) */

  return (
    <>
      <img
        className="posterItem"
        alt={props.oneFilm.name}
        src={props.oneFilm.poster}
      />
      <p className="titleItem">
        {props.oneFilm.name} - {props.oneFilm.year}
      </p>
      <p className="quoteItem">{props.oneFilm.quote}</p>
      <Link
        className="linkItem"
        to={`/movie/${props.oneFilm.id}`}
        title="Access more details"
      >
        <span className="linkItem__detailsItem">~ Details ~</span>
      </Link>
    </>
  );
}
export default MovieSceneItem;
