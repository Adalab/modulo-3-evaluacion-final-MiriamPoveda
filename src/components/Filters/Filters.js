import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {

  return (
    <section>
      <form>
          <FilterMovie handleFilterFilm={props.handleFilterFilm}/>
          <FilterYear 
          getYears={props.getYears}
          handleFilterYear={props.handleFilterYear}/>
      </form>
    </section>
  );
}
export default Filters;