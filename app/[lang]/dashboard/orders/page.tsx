'use client'

import Order from 'components/Order'
import React from 'react'
import { useAppSelector } from 'store/store'

const CartPage = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  )

  return (

    <div className='flex justify-center'>
      <div className='grid grid-rows-3 gap-4 mx-auto pl-10 pr-10'>
        {cartItems.map((item) => (
          <Order key={item.product.id} cartItem={item} />
        ))}
      </div>
    </div>
  )
}

export default CartPage
