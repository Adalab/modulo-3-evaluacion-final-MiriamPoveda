// Hooks //
import { Link } from "react-router-dom";
// Styles //
import "../../styles/Notices/IncorrectPage.scss";

function IncorrectPage() {
  // HTML //

  /* LINK - Para volver a la página inicial */

  return (
    <>
      <p>
        Wow! I don't understand where we are. You'd better come back to my
        fantastic site.
      </p>
      <Link to="/">Back</Link>
    </>
  );
}

export default IncorrectPage;
