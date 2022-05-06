import {Link} from 'react-router-dom';

function MovieSceneDetail(props) {

    return (
        <section>
        <div>
          <Link to="/">Back</Link>
          </div>
        <img
          className="filmPoster" 
          alt={props.oneFilm.name}
          src={props.oneFilm.poster}
          />
          <p>{props.oneFilm.name}</p>
          <p>{props.oneFilm.quote}</p>
          <p>Director: {props.oneFilm.director}</p>
          <a href={props.oneFilm.audio} targe="blank">¡Listen to the quote!</a>
          </section>
    );
  }
  export default MovieSceneDetail;