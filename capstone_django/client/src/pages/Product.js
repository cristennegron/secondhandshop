import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Products from '../components/Products'
import axios from 'axios'

function Product( {match} ) {
  
    const [product, setProduct] = useState([])

    useEffect(() => {
        console.log(match)
        async function getProduct() {
            const { data } = await axios.get(`http://localhost:8000/products/${match.params.id}`)
            setProduct(data)
        }
        getProduct()
    }, [])

return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        $ {product.price}
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                        {product.description}
                        </ListGroup.Item>

                        <ListGroup.Item>
                        Size: {product.size}
                        </ListGroup.Item>

                         <ListGroup.Item>
                        <Button className='cartbutton' type='button'> Add to Cart </Button>
                        </ListGroup.Item>
                 
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Product