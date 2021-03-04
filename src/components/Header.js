// import "../styles/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-links">
      <h1 className="app-title">Mascotas</h1>
      <nav className="app-nav">
        <li>
          <NavLink to="/home">Home </NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
      </nav>
    </header>
  );
}
