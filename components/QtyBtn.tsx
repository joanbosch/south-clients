import React from 'react'

interface Props {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

const QtyBtn = (props: Props) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      <button
        className='p-1 text-slate-600 hover:text-slate-800 focus:outline-none'
        onClick={props.onDecrease}
      >
        -
      </button>
      <div className='p-1 text-slate-600'>{props.quantity}</div>
      <button
        className='p-1 text-slate-600 hover:text-slate-800 focus:outline-none'
        onClick={props.onIncrease}
      >
        +
      </button>
    </div>
  )
}

export default QtyBtn
