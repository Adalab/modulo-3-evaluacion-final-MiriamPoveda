function FilterYear(props) {
    
    const handleChange = (ev) => {
        props.handleFilterYear(ev.target.value);
    }

    const renderYears = () => {
        return props.getYears.map((oneYear, index) => {
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
        <select name="searchYear" onChange={handleChange}>
            <option value="">All years</option>
            {renderYears()}
        </select>
      </>
    );
  }
  
  export default FilterYear;
  