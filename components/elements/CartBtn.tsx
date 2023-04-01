'use client'

import {
  ShoppingBagIcon
} from '@heroicons/react/24/solid'
import React from 'react'
import {
  totalCartItemsSelector
} from 'store/features/cartSlice'
import { useAppSelector } from 'store/store'

interface Props {
  className?: string;
}
const CartBtn = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector)
  return (
    <div className={`${props.className} relative`}>
      <ShoppingBagIcon className='w-7 text-southClearBrown-600' />
      {!!totalItems && (
        <div
          key={totalItems}
          className='bg-red-500 flex justify-center items-center
        rounded-full w-5 h-5 absolute -top-1 -right-2 text-white
        '
        >
          {totalItems}
        </div>
      )}
    </div>
  )
}

export default CartBtn
