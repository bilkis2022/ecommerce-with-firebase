import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [product, set_product] = useState([])

    useEffect(() => {
    const get_p = JSON.parse(localStorage.getItem('cart'))  
    console.log(get_p);
    set_product([...product, get_p])

    console.log(product);
    }, [])
    
  return (
    <div>
        <div>
            cart
        </div>
    </div>
  )
}

export default Cart