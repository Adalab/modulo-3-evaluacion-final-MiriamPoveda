// Components //
import Filters from "../Filters/Filters";
import MovieSceneList from "../Lists/MovieSceneList";
// Styles //
import "../../styles/Global/Main.scss";

function Main(props) {
  // HTML //

  /* PROPS - Pasamos la función que maneja la recarga por defecto del formulario y todas las funciones/variables necesarias */

  return (
    <main>
      <section className="sectionFilters">
        <form
          className="sectionFilters__formFilters"
          onSubmit={props.rechargeParent}
        >
          <Filters
            resetChild={props.resetParent}
            handleFilmChild={props.handleFilmParent}
            handleYearChild={props.handleYearParent}
            filterFilmChild={props.filterFilmParent}
            filterYearChild={props.filterYearParent}
            dataFilms={props.dataFilms}
          />
        </form>
      </section>
      <section>
        <MovieSceneList allFilters={props.allFilters} />
      </section>
    </main>
  );
}

export default Main;
