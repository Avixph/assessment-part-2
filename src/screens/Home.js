import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Main() {
  return (
    <div>
      <Header />
      <h3>Choose your Mascota</h3>
      <NavLink to="/dogs">
        <button>🐶</button>{" "}
      </NavLink>
      <p>or</p>
      <NavLink to="/cats">
        <button>🐱</button>{" "}
      </NavLink>
      <Footer />
    </div>
  );
}
