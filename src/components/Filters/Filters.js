import FilterFilm from './FilterFilm';
import FilterYear from './FilterYear';

function Filters(props) {

  return (
    <section>
      <form>
          <FilterFilm handleFilterFilm={props.handleFilterFilm}/>
          <FilterYear 
          getYears={props.getYears}
          handleFilterYear={props.handleFilterYear}/>
      </form>
    </section>
  );
}
export default Filters;