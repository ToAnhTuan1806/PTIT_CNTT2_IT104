import React, {useReducer, useState } from 'react'

type State= {
    loading: boolean
    success: boolean
    error: string | null
}
type Action= | {type: "LOGIN_START"} | {type: "LOGIN_SUCCESS"} | {type: "LOGIN_ERROR"; payload: string}

function reducer(state: State, action: Action):State{
  switch(action.type){
    case "LOGIN_START":
      return { loading: true, success: false, error: null }
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: null }
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [state, dispatch] = useReducer(reducer, {
    loading: false, 
    success: false,
    error: null,
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleLogin= (e: React.FormEvent)=>{
    e.preventDefault()
    dispatch({
      type: "LOGIN_START"
    })
    //gia lap API
    setTimeout(()=>{
            if (formData.username === "admin" && formData.password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" })
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai tài khoản hoặc mật khẩu" })
      }
    }, 2000)
  }
  return (
    <div style={{ maxWidth: "300px", padding: "20px",  border: "1px solid gray"}}>
      <h2 style={{textAlign: "center"}}>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label>Tên người dùng</label><br />
          <input type="text" name='username' placeholder="Tên người dùng..." value={formData.username} onChange={handleChange}
          style={{ width: "90%", padding: "8px" }}/>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Mật khẩu</label><br />
          <input type="password" name='password' placeholder="Mật khẩu..." value={formData.password} onChange={handleChange} style={{ width: "90%", padding: "8px" }}/>
        </div>
        <button
          type="submit" disabled={state.loading}
          style={{ width: "100%", padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px"}}>
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {state.loading && <p>⏳ Đang đăng nhập...</p>}
      {state.success && <p style={{ color: "green" }}> Đăng nhập thành công!</p>}
      {state.error && <p style={{ color: "red" }}> {state.error}</p>}
    </div>
  )
}
