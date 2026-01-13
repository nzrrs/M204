import { Link } from "react-router"
const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/posts" className="nav-link">Posts</Link>
        <Link to="/users" className="nav-link">Users</Link>
    </nav>
  )
}

export default Navbar