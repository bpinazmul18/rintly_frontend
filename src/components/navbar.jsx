import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
    
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
    
                <button onClick={() => navigate('/login')} className="btn btn-outline-primary px-4 rounded-pill">Login</button>
            </div>
        </nav>
    );
}
 
export default Navbar;