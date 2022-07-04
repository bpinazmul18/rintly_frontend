import { Link, NavLink } from "react-router-dom";
const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#!">Navbar</a>

            <ul className="navbar-nav flex-row">
                <li className="nav-item">
                    <NavLink className="nav-link px-3" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link px-3" to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link px-3" to="/customers">Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link px-3" to="/rentals">Rentals</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
 
export default Navbar;