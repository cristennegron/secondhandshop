import React from 'react'
import { Card } from 'react-bootstrap'

function Products() {
  return (
    <Card className="my-3 p-3 rounded">
       <a href={'/product/'}>
           <Card.img src={Product.image}/>
    </Card>
  )
}

export default Products