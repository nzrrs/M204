import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Users
      </NavLink>

      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        Posts
      </NavLink>
    </nav>
  );
}


export default Navbar