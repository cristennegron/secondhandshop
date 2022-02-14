import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="light" expand="lg">
          <Container>
              {/* <LinkContainer to='/'> */}
                <Navbar.Brand>secondhandshop</Navbar.Brand>
              {/* </LinkContainer> */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">

                {/* <LinkContainer to='/about'> */}
                    <Nav.Link><i className="about"></i>About</Nav.Link>
                {/* </LinkContainer> */}
                    
                {/* <LinkContainer to='/cart'> */}
                    <Nav.Link><i className="cart"></i>Cart</Nav.Link>
                {/* </LinkContainer>  */}
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>   
    </header>
  )
}

export default Header