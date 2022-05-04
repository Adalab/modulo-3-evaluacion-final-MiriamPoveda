// Hooks //
import {useState, useEffect} from 'react';
// Services //
import getApiData from '../services/Api';
// Components //
import FilmList from './Lists/FilmList';
// Styles //
import '../styles/App.scss';

function App() {

  // Variables //

  /* Datos de la API */
  const [dataFilms, setDataFilms] = useState([]);

  // useEffect //

  /* Fetch */
  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataFilms(dataFromApi);
    });
  }, []);

  // Funciones //

  // HTML //

  return (
    <>
      <header>
      <h1>Owen Wilson's WOW</h1>
      </header>
      <main>
        <FilmList films={dataFilms}/>
      </main>
    </>
  );
}

export default App;
