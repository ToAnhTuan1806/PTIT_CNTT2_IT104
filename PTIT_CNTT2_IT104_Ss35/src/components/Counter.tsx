import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increase, reset } from '../slice/counterSlice'
import { useAppDisPatch, useAppSelector } from '../hooks/useCustomeRedux'

export default function Counter() {
    const {value}= useAppSelector((state)=> state.counter)
    const dispatch= useAppDisPatch()
    const handleIncrease= ()=> {
        dispatch(increase())
    }
    const handleDecrease= ()=> {
        dispatch(decrement())
    }
    const handleReset= ()=> {
        dispatch(reset())
    }
  return (
    <div>
        <h2>Counter: {value}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
