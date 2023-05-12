'use client'
import React, { useState } from 'react'
import NewSaleProduct from './NewSaleProduct'

interface NewSaleArticlesProps {
  productos: []
}

export default function NewSaleArticles (props: NewSaleArticlesProps) {
  const [numProductos, setNumProductos] = useState([1])


  return (
    <>
      <h2 className='font-bold'> Artículos </h2>
      {numProductos.map((id : any) => (
        <NewSaleProduct key={id} productos={props.productos} />
      ))}
      <div onClick={() => setNumProductos([...numProductos, numProductos.length + 1])}>Agregar artículo</div>
    </>
  )
}
