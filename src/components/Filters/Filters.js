import FilterFilm from './FilterFilm';

function Filters(props) {

  return (
    <section>
      <form>
          <FilterFilm handleFilterFilm={props.handleFilterFilm}/>
      </form>
    </section>
  );
}
export default Filters;