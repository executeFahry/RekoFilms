import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
   return (
      <Navbar collapseOnSelect expand="sm" variant="dark">
         <Container>
            <Navbar.Brand className="brandName" eventKey="1" as={Link} to="/" >RekoFilms</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end align-items-end">
               <Nav>
                  <NavLink eventKey="1" as={Link} to="/trending" >Trending</NavLink>
                  <NavLink eventKey="2" as={Link} to="/action" >Action</NavLink>
                  <NavLink eventKey="3" as={Link} to="/fantasy">Fantasy</NavLink>
                  <NavLink eventKey="4" as={Link} to="/horror">Horror</NavLink>
                  <NavLink eventKey="5" as={Link} to="/science">Science</NavLink>
                  <NavLink eventKey="6" as={Link} to="/sci-fi">Sci-Fi</NavLink>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar >
   );
}

export default NavigationBar;