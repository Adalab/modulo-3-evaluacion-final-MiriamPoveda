function FilmItem(props) {
  return (
      <>
      <img
        className="filmPoster" 
        alt={props.oneFilm.title}
        src={props.oneFilm.poster}
        />
        <p>{props.oneFilm.title} - {props.oneFilm.year}</p>
        <p>{props.oneFilm.quote}</p>
      </>
  );
}
export default FilmItem;