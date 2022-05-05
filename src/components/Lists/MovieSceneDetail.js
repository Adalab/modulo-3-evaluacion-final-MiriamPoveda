function MovieSceneDetail(props) {
    return (
        <section>
        <img
          className="filmPoster" 
          alt={props.oneFilm.name}
          src={props.oneFilm.poster}
          />
          <p>{props.oneFilm.name}</p>
          <p>{props.oneFilm.quote}</p>
          <p>{props.oneFilm.director}</p>
          <a href={props.oneFilm.audio} targe="blank">¡Listen to the quote!</a>
          </section>
    );
  }
  export default MovieSceneDetail;