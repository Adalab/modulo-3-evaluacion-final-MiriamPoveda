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
import IncorrectPage from './Notices/IncorrectPage';
import IncorrectName from './Notices/IncorrectName';

// Styles //
import '../styles/App.scss';

function App() {

  // Variables //

  /* Datos de la API */
  const [dataFilms, setDataFilms] = useState(LS.get('dataFilms', []));
  /* Filtrar por película */
  const [filteredFilm, setFilteredFilm] = useState(LS.get('filteredFilm', ''));
  /* Filtrar por año */
  const [filteredYear, setFilteredYear] = useState(LS.get('filteredYear', ''));

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
    LS.set('dataFilms', dataFilms);
    LS.set('filteredFilm', filteredFilm);
    LS.set('filteredYear', filteredYear);
  }, [dataFilms, filteredFilm, filteredYear]);

  // Funciones //

  // Filtros //

  const allFilters = dataFilms
  /* Ordenar */
  .sort((a, z) => a.name.localeCompare(z.name))
  /* Filtro por película */
  .filter((eachFilm) => {
    return eachFilm.name.toLowerCase().includes(filteredFilm.toLowerCase());
  })
  /* Filtro por año */
  .filter((eachYear) => {
    return filteredYear === '' ? true
    : parseInt(eachYear.year) === parseInt(filteredYear);
  })

  // Manejadoras //

  /* Filtrar por película */
  const handleFilterFilm = (value) => {
    setFilteredFilm(value);
  }

  /* Filtrar por año */
  const handleFilterYear = (value) => {
      setFilteredYear(value);
  }

  /* Prevenir la recarga */
  const handleRecharge = (ev) => {
    ev.preventDefault();
  };

  /* Limpiar contenido */
  const handleReset = () => {
    setFilteredFilm('');
    setFilteredYear('');
  }

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
        handleReset={handleReset}
        handleFilterFilm={handleFilterFilm}
        handleFilterYear={handleFilterYear}
        filteredFilm={filteredFilm}
        filteredYear={filteredYear}
        dataFilms={dataFilms}
        />
        <IncorrectName 
        filteredFilm={filteredFilm}
        allFilters={allFilters}
        />
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
          <Route 
          path="*"
          element={
          <IncorrectPage />}
          />
        </Routes>
        
      </main>
    </>
  );
}

export default App;
