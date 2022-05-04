import FilmItem from '../Lists/FilmItem';

function FilmList(props) {
  const allFilms = props.films.map((oneFilm, index) => {
    return (
      <li key={index}>
        <FilmItem oneFilm={oneFilm}/>
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
