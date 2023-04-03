'use client'

import Order from 'components/Order'
import React from 'react'
import { useAppSelector } from 'store/store'

const CartPage = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  )

  return (
    <div className='p-2 '>
      {cartItems.map((item) => (
        <Order key={item.product.id} cartItem={item} />
      ))}
    </div>
  )
}

export default CartPage
