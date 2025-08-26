import React, { Component } from 'react'

interface State{
    isLoggedIn: boolean
}

export default class LoginStatus extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            isLoggedIn: false
        }
    }
    toggleLogin = ()=>{
        this.setState((prevState) =>({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }
  render() {
    return (
      <div style={{border: "1px solid black", padding: "20px", maxWidth: "300px", textAlign: "center", background: "#f0f8ff"}}>
        <h3>{this.state.isLoggedIn ? "Xin chào, User!" : "Vui lòng đăng nhập để tiếp tục."}</h3>
        <button onClick={this.toggleLogin} 
            style={{padding: "8px 16px", border: "none", borderRadius: "5px", backgroundColor: this.state.isLoggedIn ? "#1976d2" : "#1976d2", color: "#fff", cursor: "pointer",}}
            >{this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}</button>
      </div>
    )
  }
}
