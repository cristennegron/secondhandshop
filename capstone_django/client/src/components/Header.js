import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Navbar bg="light" expand="lg">
          <Container>
              <Nav.Link as={Link} to='/'>
                <Navbar.Brand>  secondhandshop </Navbar.Brand>
              </Nav.Link>

            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">

                  <Nav.Link as={Link} to='/about'><i className="about"></i> About</Nav.Link>

                  <Nav.Link as={Link} to='/cart'> <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            </Navbar.Collapse>
            </Container>

        </Navbar>   
    </header>
  )
}

export default Header