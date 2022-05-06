import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import Reset from '../Notices/Reset';

function Filters(props) {

  return (
    <section>
      <form onSubmit={props.handleRecharge}>
          <FilterMovie handleFilterFilm={props.handleFilterFilm} filteredFilm={props.filteredFilm}/>
          <FilterYear 
          dataFilms={props.dataFilms}
          handleFilterYear={props.handleFilterYear}
          filteredYear={props.filteredYear}/>
          <Reset handleReset={props.handleReset}/>
      </form>
    </section>
  );
}
export default Filters;