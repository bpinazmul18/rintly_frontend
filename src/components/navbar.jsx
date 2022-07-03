import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#!">Navbar</a>

            <ul className="navbar-nav flex-row">
                <li className="nav-item">
                    <Link className="nav-link px-3" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-3" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-3" to="/movies">Movies</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-3" to="#!">Pricing</Link>
                </li>
            </ul>
        </div>
    </nav>
);
 
export default Navbar;