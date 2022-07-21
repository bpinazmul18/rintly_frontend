import {Nav} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const NavItem = ({ linkName, to }) => {
    return ( 
        <Nav.Item as="li">
            <Nav.Link as={NavLink} to={to}>{linkName}</Nav.Link>
        </Nav.Item>
     );
}
 
export default NavItem;