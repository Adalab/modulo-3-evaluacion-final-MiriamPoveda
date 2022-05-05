function MovieSceneItem(props) {
  return (
      <>
      <img
        className="filmPoster" 
        alt={props.oneFilm.name}
        src={props.oneFilm.poster}
        />
        <p>{props.oneFilm.name} - {props.oneFilm.year}</p>
        <p>{props.oneFilm.quote}</p>
      </>
  );
}
export default MovieSceneItem;