import React, { useReducer } from 'react'

const initialState ={count: 0}
function reducer(state: typeof initialState, action: {type: string}){
  switch (action.type){
    case "INCREASE":
      return {count: state.count+1}
      default:
        return state
  }
}

export default function Increase() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={()=> dispatch({type: "INCREASE"})}>Increase</button>
    </div>
  )
}
