function FilmList(props) {
  const allFilms = props.films.map((oneFilm, index) => {
    return (
      <li key={index}>
        <img
        className="filmPoster" 
        alt={oneFilm.title}
        src={oneFilm.poster}
        />
        <p>{oneFilm.title} - {oneFilm.year}</p>
        <p>{oneFilm.quote}</p>
      </li>
    );
  });
  return (
    <section>
      <ul>{allFilms}</ul>
    </section>
  );
}
export default FilmList;
