import banner from "../images/mascotasBanner.jpeg";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Welcome to Mascotas!!!</h1>
      <div>
        <img src={banner} alt="banner" style={{ width: "50%" }} />
      </div>
      <NavLink to="/home">
        <button>Enter</button>{" "}
      </NavLink>
    </div>
  );
}
