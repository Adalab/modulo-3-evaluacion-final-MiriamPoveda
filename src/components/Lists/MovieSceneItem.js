import {Link} from 'react-router-dom';

function MovieSceneItem(props) {
  return (
      <Link to={`/movie/${props.oneFilm.id}`}>
      <img
        className="filmPoster" 
        alt={props.oneFilm.name}
        src={props.oneFilm.poster}
        />
        <p>{props.oneFilm.name} - {props.oneFilm.year}</p>
        <p>{props.oneFilm.quote}</p>
      </Link>
  );
}
export default MovieSceneItem;