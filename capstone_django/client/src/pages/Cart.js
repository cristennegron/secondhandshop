import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../redux/cartActions'



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

  return (
    <Row>
        <Col md={8}>
          <h1> Shopping Cart </h1>
          {cartItems.length === 0 ? (

            <Link to='/'>Your cart is empty! Go Back</Link>
          ) : (
            <ListGroup variant='flush'>

            </ListGroup>
          )}
        </Col>
    </Row>
  )
{/* <div>
  test
</div> */}
  

}

export default Cart