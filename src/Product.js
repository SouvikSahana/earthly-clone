import React from 'react'
import './Product.css'
const Product = ({image,name,price,disprice}) => {
  return (
    <div className='product'>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>€ <del>{price}</del> {disprice}</p>
        <button>Add to cart</button>
    </div>
  )
}

export default Product