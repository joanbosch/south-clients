'use client'

import CartItemCard from 'components/CartItemCard'
import React from 'react'
import { TotalPriceSelector } from 'store/features/cartSlice'
import { useAppSelector } from 'store/store'

const CartPage = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  )

  const totalPrice = useAppSelector(TotalPriceSelector)
  return (
    <div className='flex justify-center'>
      <div className='grid grid-rows-3 gap-4 mx-auto pl-10 pr-10'>
        {cartItems.map((item) => (
          <CartItemCard key={item.product.id} cartItem={item} />
        ))}

        <p className='text-slate-600 text-right'>
          TOTAL:{' '}
          <span className='text-slate-900 font-bold '>
            {totalPrice} €
          </span>
          <div className='flex justify-end '>
            <button onClick={() => {}}>
              Proceder al pago
            </button>
          </div>
        </p>
      </div>
    </div>
  )
}

export default CartPage
