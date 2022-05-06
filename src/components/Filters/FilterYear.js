function FilterYear(props) {
    
    const handleChange = (ev) => {
        props.handleFilterYear(ev.target.value);
    }

    const getYears = () => {
        const allYears = props.dataFilms.map((oneYear) => oneYear.year);
        const uniqueYears = allYears.filter((item, index) => { 
          return allYears.indexOf(item) === index;
        });
        /* Ordenar */
        uniqueYears.sort();
        return uniqueYears;
      }

    const renderYears = () => {
        return getYears().map((oneYear, index) => {
            return (
            <option key={index} value={oneYear}>
                {oneYear}
            </option>
            );
        });
    }

    return (
      <>
        <label htmlFor="searchYear">Year</label>
        <select name="searchYear" value={props.filteredYear} onChange={handleChange}>
            <option value="">All years</option>
            {renderYears()}
        </select>
      </>
    );
  }
  
  export default FilterYear;
  