// Hooks //
import { Link } from "react-router-dom";
// Components //
import IncorrectPage from "../Notices/IncorrectPage";
// Image //
import Arrow from "../../images/arrow.png";
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
    <section className="sectionDetail" key={props.movieFound.id}>
      {/* ------ */}
      <Link to={"/"} title="Click to return">
        <img className="arrow" alt="Arrow" src={Arrow} />
      </Link>
      {/* ------ */}
      <img
        className="sectionDetail__posterDetail"
        alt={props.movieFound.name}
        src={props.movieFound.poster}
      />
      <p className="sectionDetail__titleDetail">{props.movieFound.name}</p>
      <p className="sectionDetail__quoteDetail">{props.movieFound.quote}</p>
      <p className="sectionDetail__directorDetail">
        Director:{" "}
        <span className="directorName">{props.movieFound.director}</span>
      </p>
      <a
        className="linkDetail"
        href={props.movieFound.audio}
        target="blank"
        title="Click to listen"
      >
        ¡Listen to the quote!
      </a>
    </section>
  );
}
export default MovieSceneDetail;
