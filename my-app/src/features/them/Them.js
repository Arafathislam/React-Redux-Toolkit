import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './themSlice'
const Them = () => {
    const [color,setColor]=useState("white")
    const dispatch=useDispatch()
  return (
    <div>
        <input className='textbox' type="text" onChange={(e)=> setColor(e.target.value)}/>
        <button className="button" onClick={()=>{dispatch(changeTextColor(color)) }}> Change Text Color</button>
        
    </div>
  )
}

export default Them