// Styles //
import "../../styles/Notices/IncorrectName.scss";

function IncorrectName(props) {
  /* Condicional (pasando por PROPS la variable de estado uando se filtra) para indicar que cuando haya un valor introducido por la usuaria que no sea igual a ninguno de los nombres del datos ya filtrados nos devuelva un mensaje de error */
  if (props.filterFilmParent !== "" && props.allFilters.length === 0) {
    // HTML //

    /* PROPS - Pasamos la variable que contiene lo que ha escrito la usuaria */

    return (
      <div>
        <p>
          Wow! Owen isn't familiar with the film "{props.filterFilmParent}". Try
          another name.
        </p>
      </div>
    );
  }
}

export default IncorrectName;
