import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Products from '../components/Products'

function Product( {match} ) {
    const product = Products.find((p) => p._id == match.params.id)
    return (
        <div>
            {product.name}
        </div>
    )
}

export default Product