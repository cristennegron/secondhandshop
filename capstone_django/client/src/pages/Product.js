import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { listProductDetails } from '../redux/productActions'

function Product( {match, history} ) {
  
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)

    const { product } = productDetails

    useEffect(() => {
       dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}`)
    }

return (
        <div>
           
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
                        <Button onClick={addToCartHandler} className='cartbutton' type='button'> Add to Cart </Button>
                        </ListGroup.Item>
                 
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Product