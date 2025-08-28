import React, { useReducer } from 'react'

const initialState= {text: ""}
function reducer(state: typeof initialState, action: {type: string; payLoad?: string}){
    switch (action.type){
        case "SET_TEXT":
            return {...state, text: action.payLoad || ""}
            default:
                return state
    }
}
export default function InputText() {
    const [state, dispatch]= useReducer(reducer, initialState)
    const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type: "SET_TEXT", payLoad: e.target.value
        })
    }
  return (
    <div>
        <h2>{state.text}</h2>
        <input type="text" placeholder='...' value={state.text} onChange={handleChange}/>
    </div>
  )
}
