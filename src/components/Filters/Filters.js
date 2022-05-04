function Filters(props) {

    const handleChange = (ev) => {
        props.handleFilterFilm(ev.target.value);
    }

  return (
    <section>
      <form>
          <label htmlFor="searchFilm">Movie</label>
          <input 
          type="text"
          placeholder="Write the name of the film"
          name="searchFilm"
          value={props.filteredFilm}
          onChange={handleChange}
          />
      </form>
    </section>
  );
}
export default Filters;