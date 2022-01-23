import * as React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "gatsby"

const Header = () => (
  <header>
   <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="justify-content-end">
      <Nav.Link href="#">Accueil</Nav.Link>
      <Nav.Link href="gallerie">Gallerie</Nav.Link>
      <Nav.Link href="#pricing">Tarifs et specifications</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </header>
)



export default Header
