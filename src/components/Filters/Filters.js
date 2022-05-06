import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {

  return (
    <section>
      <form onSubmit={props.handleRecharge}>
          <FilterMovie handleFilterFilm={props.handleFilterFilm} filteredFilm={props.filteredFilm}/>
          <FilterYear 
          getYears={props.getYears}
          handleFilterYear={props.handleFilterYear}/>
      </form>
    </section>
  );
}
export default Filters;