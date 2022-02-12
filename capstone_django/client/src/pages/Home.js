import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function getProducts() {
            const { data } = await axios.get('http://127.0.0.1:8000/api/products')
            setProducts(data)
        }
    }, [])

  return (
    <div>
        <h1>Latest Products</h1>
        <Row>

            <Col sm={12} md={6} lg={4} xL={3}> 

            </Col>
        </Row>
    </div>
  )
}

export default Home