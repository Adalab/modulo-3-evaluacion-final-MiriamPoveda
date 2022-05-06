// Hooks //
import { Link } from "react-router-dom";
// Components //
import IncorrectPage from "../Notices/IncorrectPage";
// Styles //
import "../../styles/Lists/MovieSceneDetail.scss";

function MovieSceneDetail(props) {
  // Condicional //

  /* Me permite poner en el navegador la ruta con /movie/ o sin ello */
  if (props.movieFound === undefined) {
    return <IncorrectPage />;
  }

  // HTML //

  /* PROPS - Añadimos la propiedad que contiene los datos de la API (localizando su ID a través de las rutas) para poder pintar la estructura */

  /* LINK - Para poder regresar de la ruta de este componente a la página del componente principal */

  return (
    <section key={props.movieFound.id}>
      {/* ------ */}
      <div>
        <Link to={"/"}>Back</Link>
      </div>
      {/* ------ */}
      <img
        className="filmPoster"
        alt={props.movieFound.name}
        src={props.movieFound.poster}
      />
      <p>{props.movieFound.name}</p>
      <p>{props.movieFound.quote}</p>
      <p>Director: {props.movieFound.director}</p>
      <a href={props.movieFound.audio} target="blank" title="Click to listen">
        ¡Listen to the quote!
      </a>
    </section>
  );
}
export default MovieSceneDetail;
