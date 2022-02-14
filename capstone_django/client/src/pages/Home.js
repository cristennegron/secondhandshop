import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Products'
import { listProducts } from '../redux/productActions'

function Home() {
    
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { products } = productList

    useEffect(() => {
      dispatch(listProducts())

    }, [])


  return (
    <div>
        <h3>Latest Products</h3>
        <Row>
            {products.map(product => (
              
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}> 
                <Product product={product}/>
            </Col>
              ))}
        </Row>
    </div>
  )
}

export default Home