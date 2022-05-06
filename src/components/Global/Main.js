// Components //
import Filters from "../Filters/Filters";
import IncorrectName from "../Notices/IncorrectName";
import MovieSceneList from "../Lists/MovieSceneList";
// Styles //
import "../../styles/Global/Main.scss";

function Main(props) {
  // HTML //

  /* PROPS - Pasamos la función que maneja la recarga por defecto del formulario y todas las funciones/variables necesarias */

  return (
    <>
      <section>
        <form onSubmit={props.rechargeParent}>
          <Filters
            resetChild={props.resetParent}
            handleFilmChild={props.handleFilmParent}
            handleYearChild={props.handleYearParent}
            filterFilmChild={props.filterFilmParent}
            filterYearChild={props.filterYearParent}
            dataFilms={props.dataFilms}
          />
          <IncorrectName
            filterFilmChild={props.filterFilmParent}
            allFilters={props.allFilters}
          />
        </form>
      </section>
      <section>
        <MovieSceneList allFilters={props.allFilters} />
      </section>
    </>
  );
}

export default Main;
