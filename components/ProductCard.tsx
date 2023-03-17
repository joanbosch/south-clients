import { Product } from '@/interfaces'
import React from 'react'

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  return (
    <div className='border'>{props.product.name}</div>
  )
}

export default ProductCard
