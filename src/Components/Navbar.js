import { NavLink } from "react-router-dom";
import LLLogo from "../images/logos/littleLemonLogo.png";

const style = {
  navActive: "nav-font px-3 nav-item nav-link nav-active",
  navNonActive: "nav-font px-3 nav-item nav-link hover",
};

const handleMouseOver = (e) => {
  if (e.target) {
    e.target.style.color = "#495057";
    e.target.style.fontWeight = "bold";
    e.target.style.borderBottom = "2px solid #495057";
    e.target.style.transition = "all 0.3s ease-in-out";
    e.target.style.backgroundColor = "#e3f2fd";
  }
};

const handleMouseOut = (e) => {
  if (e.target) {
    e.target.style.color = "";
    e.target.style.fontWeight = "";
    e.target.style.borderBottom = "";
    e.target.style.transition = "all 0.3s ease-in-out";
    e.target.style.backgroundColor = "";
  }
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark pd mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img className="logo-height img-fluid" src={LLLogo} alt="Little Lemon Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto bg-light">
            <NavLink
              className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)}
              to="/"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)}
              to="/about"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              ABOUT
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)}
              to="/menu"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              MENU
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? style.navActive : style.navNonActive)}
              to="/reserve"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              RESERVE
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
