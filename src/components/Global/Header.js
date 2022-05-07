// Image //
import owenWilson from "../../images/owenWilson.png";
// Styles //
import "../../styles/Global/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="boxHeader">
        <h1 className="boxHeader__titleHeader">Owen Wilson</h1>
        <p className="boxHeader__subtitleHeader">
          There are never enough {""}
          <span className="boxHeader__wowHeader">wow</span>
        </p>
      </div>
      <img className="header__imageHeader" alt="Owen Wilson" src={owenWilson} />
    </header>
  );
}

export default Header;
