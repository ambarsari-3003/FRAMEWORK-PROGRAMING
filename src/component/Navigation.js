import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../page/Home';
import About from '../page/About';
import List from '../page/List';
import List2 from '../page/List2';
import Contact from '../page/Contact';
import Forms from '../page/Forms';



const Navigation = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/Home"}>AMSA</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/Home"} >Home</Nav.Link>
              <Nav.Link as={Link} to={"/List"}>List Ring</Nav.Link>
              <Nav.Link as={Link} to={"/List2"}>list Necklace</Nav.Link>
              <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/Contact"}>Contact Us</Nav.Link>
              <Nav.Link href='Forms'>Forms</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/List2" element={<List2 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Forms" element={<Forms />} />
      </Routes>
    </Router>
  )
}

export default Navigation
