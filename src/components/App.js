// Hooks //
import {useState, useEffect} from 'react';
// Services //
import getApiData from '../services/Api';
// Components //
import FilmList from './Lists/FilmList';
import Filters from './Filters/Filters';
// Styles //
import '../styles/App.scss';

function App() {

  // Variables //

  /* Datos de la API */
  const [dataFilms, setDataFilms] = useState([]);
  /* Filtrar por película */
  const [filteredFilm, setFilteredFilm] = useState('');
  /* Filtrar por año */
  const [filteredYear, setFilteredYear] = useState('');

  // useEffect //

  /* Fetch */
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataFilms(dataFromApi);
    });
  }, []);

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

  // HTML //

  return (
    <>
      <header>
      <h1>Owen Wilson's WOW</h1>
      </header>
      <main>
        <Filters
        handleFilterFilm={handleFilterFilm}
        handleFilterYear={handleFilterYear}
        getYears={getYears()}
        />
        <FilmList 
        films={allFilters}
        />
      </main>
    </>
  );
}

export default App;
