import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const renderLogout = () => (
        <div>
            <button onClick={() => handleLogout()} className="btn btn-primary px-4 rounded-pill ms-1">Logout</button>
        </div>
    )

    const renderLogin = () => (
        <div>
            <button onClick={() => navigate('/login')} className="btn btn-outline-primary px-4 rounded-pill me-1">Login</button>
            <button onClick={() => navigate('/signup')} className="btn btn-primary px-4 rounded-pill ms-1">Register</button>
        </div>
    )

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
    
                

                {
                    localStorage.getItem('token') ? renderLogout() : renderLogin()
                }

            </div>
        </nav>
    );
}
 
export default Navbar;