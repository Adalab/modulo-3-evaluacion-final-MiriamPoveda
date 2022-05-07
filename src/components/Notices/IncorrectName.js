// Image //
import magicWord from "../../images/IncorrectName.gif";
// Styles //
import "../../styles/Notices/IncorrectName.scss";

function IncorrectName(props) {
  /* Condicional (pasando por PROPS la variable de estado uando se filtra) para indicar que cuando haya un valor introducido por la usuaria que no sea igual a ninguno de los nombres del datos ya filtrados nos devuelva un mensaje de error */
  if (props.filterFilmParent !== "" && props.allFilters.length === 0) {
    // HTML //

    /* PROPS - Pasamos la variable que contiene lo que ha escrito la usuaria */

    return (
      <div className="boxName">
        <p className="boxName__textName">
          Wow! Owen isn't familiar with the film {""}
          <span className="wordName">{props.filterFilmParent}</span>. Try
          another name.
        </p>
        <img
          className="boxName__imageName"
          alt="You didn't say the magic word"
          src={magicWord}
        />
        <p className="boxName__textMessage">
          Oh, oh, oh! You didn't say the magic word!
        </p>
      </div>
    );
  }
}

export default IncorrectName;
