import React, { useReducer } from 'react'
type State= {
    count: number
}

type Action = {type: "INCREMENT"} | {type: "DECREMENT"}
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return {count: state.count+1}
    case "DECREMENT":
      return {count: state.count-1}
    default:
      return state
  }
}

export default function Counter() {
    const [state, dispatch]= useReducer(reducer, {count:0})
  return (
    <div style={{marginLeft: "50px"}}>
        <h2>Số đếm: {state.count}</h2>
        <button type='submit' onClick={()=> dispatch({type: "INCREMENT"})}>Tăng</button>
        <button type='submit' onClick={()=> dispatch({type: "DECREMENT"})}>Giảm</button>
    </div>
  )
}
