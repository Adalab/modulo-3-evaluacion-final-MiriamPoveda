import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const allFilms = props.films.map((oneFilm, index) => {
    return (
      <li key={index}>
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
