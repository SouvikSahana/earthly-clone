import React from 'react'
import './Body.css'
import Product from './Product'
import a from './a.jpg'
import b from './b.jpg'
const Body = () => {
  return (
    <div className='body'>
        <Product image={a} name="Plant Based Reusable Cups" price={3.99} disprice={2.39} />
        <Product image={b} name="Plant Based Reusable Cups"  disprice={5.39} />
        <Product image={a} name="Plant Based Reusable Cups"  disprice={1.39} />
        <Product image={b} name="Plant Based Reusable Cups"  disprice={2.00} />
        <Product image={a} name="Plant Based Reusable Cups"  disprice={5.20} />
    </div>
  )
}

export default Body