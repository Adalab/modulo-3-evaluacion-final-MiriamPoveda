// Hooks //
import {useState, useEffect} from 'react';
// Services //
import getApiData from '../services/Api';
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
      <h1>Arrancando...</h1>
      </header>
    </>
  );
}

export default App;
