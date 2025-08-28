import React, { useReducer } from 'react'

const initialState = {gender: ""}
function reducer(state: typeof initialState, action: {type: string; payLoad?: string}) {
    switch(action.type) {
        case "SET_GENDER":
            return {...state, gender: action.payLoad || ""}
            default:
                return state
    }
}

export default function InputRadio() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=> {
        dispatch({
            type: "SET_GENDER", payLoad: e.target.value
        })
    }
  return (
    <div>
        <div>
            <input type="radio" placeholder='...' name="gender" value="Nam" checked={state.gender === "Nam"} onChange={handleChange}/>Nam
        </div>
        <div>
            <input type="radio" placeholder='...' name="gender" value="Nữ" checked={state.gender === "Nữ"} onChange={handleChange}/>Nữ
        </div>
        <div>
            <input type="radio" placeholder='...' name="gender" value="Khác" checked={state.gender === "Khác"} onChange={handleChange}/>Khác
        </div>
        <p>Selected gender: {state.gender}</p>
    </div>
  )
}
