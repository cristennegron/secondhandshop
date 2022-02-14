import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import { addToCart, deleteFromCart } from '../redux/cartActions'

function Cart( {match} ) {
  
  const productId = match.params.id

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId))
    }
  }, [dispatch, productId])

  const deleteFromCartHandler = (id) => {
    dispatch(deleteFromCart(id))
  }

  return (

    <Row>
        <Col md={8}>
          <h4> Your Cart </h4>
          {cartItems.length === 0 ? (
          <p> Oh no, your cart is empty!  <Link to='/'> Let's fix that. </Link> </p>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map(item => (
                <ListGroup.Item key={(item.product)}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded/>
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      ${item.price}
                    </Col>
                    <Col md={1}>
                      <Button onClick={() => deleteFromCartHandler(item.product)} type='button' variant='dark'>Remove</Button>
                    </Col>
                    </Row>
                </ListGroup.Item>
                
                
             
              ))}
              <ListGroup.Item>
                  <h4> Subtotal $ {cartItems.reduce((acc, item) => acc * item.price, 0).toFixed(2)} </h4>
                  <Button type="button" className='btn-block' disabled={cartItems.length === 0}> Checkout </Button>

              </ListGroup.Item>
            </ListGroup>
          )}
        </Col>
    </Row>
  )

  

}

export default Cart