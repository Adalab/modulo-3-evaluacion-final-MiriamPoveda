function FilterMovie(props) {
  // Función manejadora en App //

  const handleChange = (ev) => {
    props.handleFilmChild(ev.target.value);
  };

  // HTML //

  /* PROPS - Variable de filtrado de película para mantener el value del input cuando salimos de la vista de detalle */

  /* EVENTO - onChange y función manejadora coger el value y controlar el input */

  return (
    <>
      <label htmlFor="searchFilm">Movie</label>
      <input
        type="text"
        placeholder="Write the name of the film"
        name="searchFilm"
        value={props.filterFilmChild}
        onChange={handleChange}
      />
    </>
  );
}

export default FilterMovie;
