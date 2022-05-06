import {Link} from 'react-router-dom';
import IncorrectPage from '../Notices/IncorrectPage';

function MovieSceneDetail(props) {

  /* Me permite poner en el navegador la ruta con /movie/ o sin ello */
  if (props.oneFilm === undefined) {
    return <IncorrectPage />;
  }

    return (
        <section key={props.oneFilm.id}>
        <div>
          <Link to={"/"}>Back</Link>
          </div>
        <img
          className="filmPoster" 
          alt={props.oneFilm.name}
          src={props.oneFilm.poster}
          />
          <p>{props.oneFilm.name}</p>
          <p>{props.oneFilm.quote}</p>
          <p>Director: {props.oneFilm.director}</p>
          <a href={props.oneFilm.audio} target="blank">¡Listen to the quote!</a>
          </section>
    );
  }
  export default MovieSceneDetail;