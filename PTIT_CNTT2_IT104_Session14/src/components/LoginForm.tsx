import React, { Component } from 'react'

interface State{
    email: string
    password: string
    message: string
}

interface User{
    email: string
    password: string
}

export default class LoginForm extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state={
            email: "",
            password: "",
            message: ""
        }
    }
    handleEmailChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit= (e: React.FormEvent) =>{
        e.preventDefault()
        const {email, password} = this.state
        if(!email || !password){
            this.setState({
                message: "Email và mật khẩu không được để trống!"
            })
            return
        }
        const users: User[]=JSON.parse(localStorage.getItem("users") || "[]")
        let found=false
        for(let us of users){
            if(us.email === email && us.password === password){
                found=true
                break
            }
        }
        if (found) {
            this.setState({ message: "Đăng nhập thành công" });
        } else {
            this.setState({ message: "Đăng nhập thất bại" });
        }
    }
  render() {
    return (
        <div style={{ maxWidth: "300px"}}>
        <h2>Đăng nhập</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} 
            style={{ width: "100%", margin: "8px 0", padding: "8px", borderRadius: "6px", border: "0.5px solid #ccc"}}
            />
          </div>
          <div>
            <label>Mật khẩu</label>
            <input type="password" name="password" placeholder="Mật khẩu" value={this.state.password} onChange={this.handlePasswordChange} 
            style={{ width: "100%", margin: "8px 0", padding: "8px" ,borderRadius: "6px", border: "0.5px solid #ccc"}}
            />
          </div>
          <button type="submit" style={{ width: "106%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "6px", cursor: "pointer"}}>
            Đăng nhập
          </button>
        </form>
        {this.state.message && (
          <p style={{ marginTop: "10px", color: "green" }}>{this.state.message}</p>
        )}
      </div>
    )
  }
}
