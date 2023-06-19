import {useSelector,useDispatch} from "react-redux"
import { increment,decrement,incrementByAmount } from "./counterSlice"

const Counter = () => {
    const count=useSelector((state)=> state.counter.count)
    const themTextColor=useSelector((state)=> state.them.color)
    const dispatch=useDispatch()
   return (
    <>
    <div>
    <button className='button' aria-label="Increment value" onClick={()=>{dispatch(increment())}}>+</button>
        <span className='value'style={{color:themTextColor}} >Count: {count}</span>
       
        <button className='button' aria-label="Decrement value" onClick={()=>{dispatch(decrement())}}>-</button>
        <button className='button'  onClick={()=>{dispatch(incrementByAmount(10))}}>10x</button>
    </div>
    </>
  )
}

export default Counter