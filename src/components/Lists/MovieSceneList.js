import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const allFilms = props.films.map((oneFilm) => {
    return (
      <li key={oneFilm.id}>
        <MovieSceneItem oneFilm={oneFilm}/>
      </li>
    );
  });
  return (
    <section>
      <ul>{allFilms}</ul>
    </section>
  );
}
export default MovieSceneList;
