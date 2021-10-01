import "./index.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <Link to="/Home" className="nav-link">
          {" "}
          Home{" "}
        </Link>
        <Link to="/About" className="nav-link">
          {" "}
          About CureALL{" "}
        </Link>
        <Link to="/How" className="nav-link">
          {" "}
          How to take CureALL{" "}
        </Link>
        <Link to="/Testimonies" className="nav-link">
          {" "}
          Patient Testimonies{" "}
        </Link>
      </div>
    </>
  );
}

export default NavBar;
