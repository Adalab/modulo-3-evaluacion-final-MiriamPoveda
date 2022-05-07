// Styles //
import "../../styles/Filters/FilterMovie.scss";

function FilterMovie(props) {
  // Función manejadora en App //

  const handleChange = (ev) => {
    props.handleFilmGrandChild(ev.target.value);
  };

  // HTML //

  /* PROPS - Variable de filtrado de película para mantener el value del input cuando salimos de la vista de detalle */

  /* EVENTO - onChange y función manejadora coger el value y controlar el input */

  return (
    <>
      <label className="labelMovie" htmlFor="searchFilm">
        Movie
      </label>
      <input
        className="inputMovie"
        type="text"
        placeholder="Write the name of the film"
        name="searchFilm"
        value={props.filterFilmGrandChild}
        onChange={handleChange}
      />
    </>
  );
}

export default FilterMovie;
