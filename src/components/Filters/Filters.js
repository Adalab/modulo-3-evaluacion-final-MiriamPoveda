// Components //
import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";
import Reset from "../Notices/Reset";

function Filters(props) {
  // HTML //

  /* PROPS - Pasamos la función que maneja la recarga por defecto del formulario y, también todas aquellas funciones manejadoras y variables de estado que son necesarias en los componentes nietos (Filters funciona como punto intermedio para pasar todo) */

  return (
    <section>
      <form onSubmit={props.rechargeParent}>
        {/* ------ */}
        <FilterMovie
          handleFilmChild={props.handleFilmParent}
          filterFilmChild={props.filterFilmParent}
        />
        {/* ------ */}
        <FilterYear
          dataFilms={props.dataFilms}
          handleYearChild={props.handleYearParent}
          filterYearChild={props.filterYearParent}
        />
        {/* ------ */}
        <Reset resetChild={props.resetParent} />
      </form>
    </section>
  );
}
export default Filters;
