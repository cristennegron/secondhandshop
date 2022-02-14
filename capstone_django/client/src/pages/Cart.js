import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../redux/cartActions'



function Cart( { match, location, history })
  
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
    <div>
        Cart
    </div>
  )


export default Cart