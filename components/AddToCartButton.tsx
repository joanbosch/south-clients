'use client'

import { Product } from '@/interfaces'
import { decrement, increment, productQtyInCartSelector } from '@/store/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Button } from './elements/Button'
import QtyBtn from './QtyBtn'

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
          Añadir
        </Button>
      </div>
    )
  } else {
    return (
      <QtyBtn
        onIncrease={() => dispatch(increment(props.product))}
        onDecrease={() => dispatch(decrement(props.product))}
        quantity={quantity}
      />
    )
  }
}

export default AddToCartBtn
