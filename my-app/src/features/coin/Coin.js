import React from 'react'
import {useSelector} from "react-redux"

const Coin = () => {
  const count=useSelector((state)=> state.counter.count)
  const themTextColor=useSelector((state)=> state.them.color)
  return (
    <div>
         <span className='value' style={{color:themTextColor}}>Coin: {count}</span>
    </div>
  )
}

export default Coin