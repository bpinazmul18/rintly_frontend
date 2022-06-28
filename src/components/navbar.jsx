const Navbar = ({ totalCounter }) => (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar <span className='badge bg-secondary rounded-circle'>{totalCounter}</span></a>
        </div>
    </nav>
);
 
export default Navbar;