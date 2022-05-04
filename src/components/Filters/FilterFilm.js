function FilterFilm(props) {
    
    const handleChange = (ev) => {
        props.handleFilterFilm(ev.target.value);
    }

    return (
      <>
        <label htmlFor="searchFilm">Movie</label>
          <input 
          type="text"
          placeholder="Write the name of the film"
          name="searchFilm"
          value={props.filteredFilm}
          onChange={handleChange}
          />
      </>
    );
  }
  
  export default FilterFilm;
  