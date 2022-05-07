// Hooks //
import { Link } from "react-router-dom";
// Image //
import owenConfused from "../../images/IncorrectPage.gif";
// Styles //
import "../../styles/Notices/IncorrectPage.scss";

function IncorrectPage() {
  // HTML //

  /* LINK - Para volver a la página inicial */

  return (
    <section className="boxPage">
      <p className="boxPage__textPage">
        Wow! I don't understand where we are. You'd better come back to my
        fantastic site.
      </p>
      <p className="boxPage__subtextPage">Please...</p>
      <img
        className="boxPage__imagePage"
        alt="Incorrect page"
        src={owenConfused}
      />
      <Link className="linkPage" to="/" title="Return to main page">
        <span className="linkPage__backPage">Back</span>
      </Link>
    </section>
  );
}

export default IncorrectPage;
