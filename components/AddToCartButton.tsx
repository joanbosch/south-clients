'use client'

import { Product } from '@/interfaces'
import { increment, productQtyInCartSelector } from '@/store/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Button } from './elements/Button'

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const quantity = useAppSelector(state => productQtyInCartSelector(state, props.product.id))
  const dispatch = useAppDispatch()
  if (!quantity) {
    return (
      <div className='flex justify-center'>
        <Button onClick={() => dispatch(increment(props.product))}>
          Add to Cart
        </Button>
      </div>
    )
  } else {
    return (
      <div> </div>
    )
  }
}

export default AddToCartBtn