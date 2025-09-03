import React, { useReducer } from 'react'

type State={
    name:string
    email:string
}

type Action= {type: "SET_NAME"; payload: string} | {type: "SET_EMAIL"; payload:string}

const initialState: State={
    name:"", email:""
}
function reducer(state: State, action: Action): State{
    switch(action.type){
        case "SET_NAME":
            return {...state, name:action.payload}
        case "SET_EMAIL":
            return {...state, email:action.payload}
        default:
            return state    
    }
}

const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{

}

export default function UserForm() {
    const [state, dispatch]= useReducer(reducer, initialState)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === "name") {
            dispatch({type: "SET_NAME", payload: value })
        } else if (name === "email") {
            dispatch({type: "SET_EMAIL", payload: value })
        }
    }
  return (
    <div style={{maxWidth: "400px",boxShadow: "0 2px 6px rgba(0,0,0,0.1)", borderRadius: "8px", padding: "20px" }}>
        <h2 style={{textAlign: 'center', fontWeight: ""}}>User Information Form</h2>
        <form>
            <div style={{ marginBottom: "15px" }}>
                <label>Tên:</label><br />
                <input type="text" name="name" placeholder='Nhập tên...' value={state.name} onChange={handleChange}
                 style={{ width: "95%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px"}}/>
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label>Email:</label><br />
                <input type="text" name='email' placeholder='Nhập email...' value={state.email} onChange={handleChange}
                 style={{ width: "95%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}/>
            </div>
            <div style={{ marginTop: "20px", padding: "10px", borderRadius: "7px", backgroundColor: "#f8f9fa", borderLeft: "5px solid #3498db"}}>
                <h3>Thông tin người dùng</h3>
                <p><b style={{color: "#3498db"}}>Tên: </b>{state.name || "(Chưa nhập)"}</p>
                <p><b style={{color: "#3498db"}}>Email: </b>{state.email || "(Chưa nhập)"}</p>
            </div>
        </form>
    </div>
  )
}
