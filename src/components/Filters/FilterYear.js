// Styles //
import "../../styles/Filters/FilterYear.scss";

function FilterYear(props) {
  // Funciones //

  // Función manejadora en App //

  const handleChange = (ev) => {
    props.handleYearGrandChild(ev.target.value);
  };

  // Descartar años repetidos //

  const getYears = () => {
    /* Transformamos y cogemos sólo los años */
    const allYears = props.dataFilms.map((oneYear) => oneYear.year);
    /* Filtro los años */
    const uniqueYears = allYears.filter((item, index) => {
      /* Descarto los repetidos buscando la posición del primero que aparezca */
      return allYears.indexOf(item) === index;
    });
    /* Ordenar de < a > */
    uniqueYears.sort();
    return uniqueYears;
  };

  // Pintar los años //

  const renderYears = () => {
    /* Retorno la función con los años filtrados y transformo para pintar */
    return getYears().map((oneYear, index) => {
      return (
        <option key={index} value={oneYear}>
          {oneYear}
        </option>
      );
    });
  };

  // HTML //

  /* PROPS - Variable de filtrado de año para mantener el value del select cuando salimos de la vista de detalle */

  /* PINTAR - Añadimos la función que pinta el resto de opciones en el return */

  /* EVENTO - onChange y función manejadora coger el value y controlar las options */

  return (
    <>
      <label htmlFor="searchYear">Year</label>
      <select
        name="searchYear"
        value={props.filterYearGrandChild}
        onChange={handleChange}
      >
        <option value="">All years</option>
        {renderYears()}
      </select>
    </>
  );
}

export default FilterYear;
