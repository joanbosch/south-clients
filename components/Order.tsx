import { CartItem } from 'interfaces'
import Image from 'next/image'
import React from 'react'

interface Props {
  cartItem: CartItem;
}

const Order = ({ cartItem }: Props) => {
  return (
    <div className='grid grid-cols-4 items-center py-2 border-b'>
      <Image
        src={cartItem.product.img1}
        width={200}
        height={150}
        alt={cartItem.product.name}
        className='rounded-md'
      />
      <p className='text-slate-600 text-center'>
        {cartItem.product.name}
      </p>
      <p className='text-center'>
        {cartItem.quantity * cartItem.product.price} €
      </p>
      <div className='flex flex-col items-center justify-center gap-3'>
        <p>Obtener Factura</p>
      </div>
    </div>
  )
}

export default Order
