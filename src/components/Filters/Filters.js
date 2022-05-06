// Components //
import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";
import Reset from "../Notices/Reset";

function Filters(props) {
  // HTML //

  /* PROPS - Pasamos todas aquellas funciones manejadoras y variables de estado que son necesarias en otros componentes */

  return (
    <>
      {/* ------ */}
      <FilterMovie
        handleFilmGrandChild={props.handleFilmChild}
        filterFilmGrandChild={props.filterFilmChild}
      />
      {/* ------ */}
      <FilterYear
        dataFilms={props.dataFilms}
        handleYearGrandChild={props.handleYearChild}
        filterYearGrandChild={props.filterYearChild}
      />
      {/* ------ */}
      <Reset resetGrandChild={props.resetChild} />
    </>
  );
}
export default Filters;
