import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div>
       <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">Let's keep in touch! Sign up for SECONDHANDSHOP's mailing list <a href=""> here.</a></Col>
           </Row>
        </Container>   
        </footer>
    </div>
  )
}

export default Footer