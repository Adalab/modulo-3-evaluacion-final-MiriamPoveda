// Hooks //
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom";

// Services //
import getApiData from "../services/Api";
import LS from "../services/localStorage";

// Components //

/* Global */
import Header from "./Global/Header";
import Main from "./Global/Main";
/* Lists */
import MovieSceneDetail from "./Lists/MovieSceneDetail";
/* Notices */
import IncorrectPage from "./Notices/IncorrectPage";

// Styles //
import "../styles/App.scss";

function App() {
  // Variables //

  /* Datos de la API */
  const [dataFilms, setDataFilms] = useState(LS.get("dataFilms", []));
  /* Filtrar por película */
  const [filteredFilm, setFilteredFilm] = useState(LS.get("filteredFilm", ""));
  /* Filtrar por año */
  const [filteredYear, setFilteredYear] = useState(LS.get("filteredYear", ""));

  // useEffect //

  /* Fetch */
  useEffect(() => {
    if (dataFilms.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataFilms(dataFromApi);
      });
    }
  }, []);

  /* LocalStorage */
  useEffect(() => {
    LS.set("dataFilms", dataFilms);
    LS.set("filteredFilm", filteredFilm);
    LS.set("filteredYear", filteredYear);
  }, [dataFilms, filteredFilm, filteredYear]);

  // Función para los filtros //

  const allFilters = dataFilms
    /* Ordenar */
    .sort((a, z) => a.name.localeCompare(z.name))
    /* Filtro por película añadiendo que todo se marque en minúsculas (escriba como escriba la usuaria) */
    .filter((eachFilm) => {
      return eachFilm.name.toLowerCase().includes(filteredFilm.toLowerCase());
    })
    /* Filtro por año parseando los datos a number puesto que, inicialmente, están en string */
    /* Indicamos con ternario que cuando esté el campo vacío nos marque el VALUE de la opción de ALL YEARS */
    .filter((eachYear) => {
      return filteredYear === ""
        ? true
        : parseInt(eachYear.year) === parseInt(filteredYear);
    });

  // Funciones manejadoras //

  /* Filtrar por película */

  const handleFilterFilm = (value) => {
    setFilteredFilm(value);
  };

  /* Filtrar por año */
  const handleFilterYear = (value) => {
    setFilteredYear(value);
  };

  /* Prevenir la recarga al pulsar ENTER en el INPUT */
  const handleRecharge = (ev) => {
    ev.preventDefault();
  };

  /* Limpiar contenido tras realizar búsquedas */
  const handleReset = () => {
    setFilteredFilm("");
    setFilteredYear("");
  };

  // matchPath + useLocation //

  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);
  /* Ternario para que si la ruta es válida la pinte y, si no, nos devuelva null */
  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  /* Encontramos el ID (index) y parseamos */
  const movieFound = dataFilms.find(
    (oneMovie) => oneMovie.id === parseInt(movieId)
  );

  // HTML //

  return (
    <>
      <Routes>
        {/* Static route */}
        <Route
          path="/"
          element={
            <>
              {/* ------ */}
              <Header />
              {/* ------ */}
              <Main
                /* Filters */
                rechargeParent={handleRecharge}
                resetParent={handleReset}
                handleFilmParent={handleFilterFilm}
                handleYearParent={handleFilterYear}
                filterFilmParent={filteredFilm}
                filterYearParent={filteredYear}
                dataFilms={dataFilms}
                /* IncorrectName + MovieSceneList */
                allFilters={allFilters}
              />
            </>
          }
        />
        {/* Variable routes */}
        <Route
          path="/movie/:movieId"
          element={<MovieSceneDetail movieFound={movieFound} />}
        />
        {/* ------ */}
        <Route path="*" element={<IncorrectPage />} />
      </Routes>
    </>
  );
}

export default App;
