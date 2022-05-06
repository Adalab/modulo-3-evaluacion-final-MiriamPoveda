// Hooks //
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {matchPath, useLocation} from 'react-router-dom';
// Services //
import getApiData from '../services/Api';
import LS from '../services/localStorage';
// Components //
import MovieSceneList from './Lists/MovieSceneList';
import Filters from './Filters/Filters';
import MovieSceneDetail from './Lists/MovieSceneDetail';
// Styles //
import '../styles/App.scss';

function App() {

  // Variables //

  /* Datos de la API */
  const [dataFilms, setDataFilms] = useState(LS.get('films', []));
  /* Filtrar por película */
  const [filteredFilm, setFilteredFilm] = useState(LS.get('filteredFilms', ''));
  /* Filtrar por año */
  const [filteredYear, setFilteredYear] = useState(LS.get('filteredYears', ''));

  // useEffect //

  /* Fetch */
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataFilms(dataFromApi);
    });
  }, []);

  /* LocalStorage */
  useEffect(() => {
    LS.set('films', dataFilms);
    LS.set('filteredFilms', filteredFilm);
    LS.set('filteredYears', filteredYear);
  }, [dataFilms, filteredFilm, filteredYear]);

  // Funciones //

  /* Filtro global */
  const allFilters = dataFilms
  /* Filtro por película */
  .filter((eachFilm) => {
    return eachFilm.name.toLowerCase().includes(filteredFilm.toLowerCase());
  })
  /* Filtro por año */
  .filter((eachYear) => {
    return filteredYear === '' ? true
    : parseInt(eachYear.year) === parseInt(filteredYear);
  })

  /* Herramienta para filtrar película */
  const handleFilterFilm = (value) => {
    setFilteredFilm(value);
  }

  /* Herramienta para filtrar año */
  const handleFilterYear = (value) => {
      setFilteredYear(value);
  }

   /* Evitar repetir años */
   const getYears = () => {
    const allYears = dataFilms.map((oneYear) => oneYear.year);
    const uniqueYears = allYears.filter((item, index) => { 
      return allYears.indexOf(item) === index;
    });
    return uniqueYears;
  }

  /* Prevenir la recarga */
  const handleRecharge = (ev) => {
    ev.preventDefault();
  };

  /* Mensaje para película incorrecta */
  const incorrectName = () => {
    if (filteredFilm !== '' && allFilters.length === 0) {
      return (
        <div>
            <p>
              Wow! Owen isn't familiar with the film "{filteredFilm}". Try another name.
            </p>
        </div>
      );
    } 
  };

  // matchPath + useLocation //

  const {pathname} = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataFilms.find((oneMovie) => oneMovie.id === movieId);

  // HTML //

  return (
    <>
      <header>
      <h1>Owen Wilson's WOW</h1>
      </header>
      <main>
        <Routes>
          {/* Static route */}
          <Route 
          path="/"
          element={
            <>
              <Filters
        handleRecharge={handleRecharge}
        handleFilterFilm={handleFilterFilm}
        handleFilterYear={handleFilterYear}
        getYears={getYears()}
        />
        {incorrectName()}
        <MovieSceneList
        films={allFilters}
        />
        </>}
          />
          {/* Variable route */}
          <Route
            path="/movie/:movieId"
            element={<MovieSceneDetail 
            oneFilm={movieFound}
            />}
          />
        </Routes>
        
      </main>
    </>
  );
}

export default App;
