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

  // useEffect //

  /* Fetch */
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataFilms(dataFromApi);
    });
  }, []);

  // Funciones //

  /* Filtrar por película */
  const handleFilterFilm = (value) => {
    setFilteredFilm(value);
  }
  /* Filtrar por película */
  const filterFilm = dataFilms.filter((eachFilm) => {
    return eachFilm.name.toLowerCase().includes(filteredFilm.toLowerCase());
  });

  // HTML //

  return (
    <>
      <header>
      <h1>Owen Wilson's WOW</h1>
      </header>
      <main>
        <Filters
        filteredFilm={filteredFilm} 
        handleFilterFilm={handleFilterFilm}/>
        <FilmList 
        films={filterFilm}
        />
      </main>
    </>
  );
}

export default App;
