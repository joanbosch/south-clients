import { Product } from '@/interfaces'
import React from 'react'
import Image from 'next/image'
import AddToCartBtn from './AddToCartButton'

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  return (
    <div className='border rounded-md shadow hover:shadow-lg transition overflow-hidden '>
      <Image
        src={props.product.img1}
        width={210}
        height={150}
        alt={props.product.name}
      />
      <div className='p-2'>
        <h6 className='text-center text-slate-600 max-w-'>
          {props.product.name}
        </h6>
        <p className='text-center text-slate-600'>
          {props.product.price} €
        </p>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  )
}

export default ProductCard
