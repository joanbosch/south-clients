import React from 'react'
import { Button } from './elements/Button'

interface Props {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

const QtyBtn = (props: Props) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      <Button
        variant='danger'
        className='p-1 text-slate-600 hover:text-slate-800 focus:outline-none'
        onClick={props.onDecrease}
      >
        -
      </Button>
      <div className='p-1 text-slate-600'>{props.quantity}</div>
      <Button
        variant='success'
        className='p-1 text-slate-600 hover:text-slate-800 focus:outline-none'
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  )
}

export default QtyBtn
