import React, { Component, createRef } from 'react'

interface State{
    name: string
    email: string
    password: string
    phone: string
    message: string
}

export default class RegisterFrom extends Component<{}, State> {
    nameRef= createRef<HTMLInputElement>()
    constructor(props: {}){
        super(props)
        this.state={
            name: "",
            email: "",
            password: "",
            phone: "",
            message: "",
        }
    }
     handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ 
          name: e.target.value 
        });
    }
    handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ 
          email: e.target.value 
        });
    }
    handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ 
          password: e.target.value 
        });
    }
    handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ 
          phone: e.target.value 
        });
    }
    handleSubmit= (e:React.FormEvent)=>{
        e.preventDefault()
        const {name, email, password, phone} =this.state

        if(!name || !email || !password){
            this.setState({
                message: "Tên, Email và mật khẩu không được để trống!" 
            })
            return
        }
        let users= JSON.parse(localStorage.getItem("users") || "[]")
        for(let us of users){
            if(us.email===email){
                this.setState({
                    message: "Email đã tồn tại. Thử lại!"
                })
                return
            }
        }
        const newUser= {name, email, password, phone}
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        this.setState({
            name: "",
            email: "",
            password: "",
            phone: "",
            message: "Đăng ký tài khoản thành công"
        })
            if (this.nameRef.current) {
                this.nameRef.current.focus();
            }
    }
  render() {
    return (
 <div style={{ maxWidth: "300px"}}>
        <h2 style={{textAlign: "center"}}>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit} style={{color: "#272422ff"}}>
          <div>
            <label>Tên sinh viên</label>
            <input type="text" name="name" placeholder="Tên sinh viên" value={this.state.name} onChange={this.handleNameChange} ref={this.nameRef} 
            style={{ width: "100%", margin: "8px 0", padding: "8px" ,borderRadius: "6px", border: "0.5px solid #ccc"}}
            />
          </div>
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
          <div>
            <label>Số điện thoại</label>
            <input type="text" name="phone" placeholder="Số điện thoại" value={this.state.phone} onChange={this.handlePhoneChange} 
            style={{ width: "100%", margin: "8px 0", padding: "8px" ,borderRadius: "6px", border: "0.5px solid #ccc"}}
            />
          </div>
          <button type="submit" style={{ width: "106%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "6px", cursor: "pointer"}}>
            Đăng ký
          </button>
        </form>
        {this.state.message && (
          <p style={{ marginTop: "10px", color: "green" }}>{this.state.message}</p>
        )}
      </div>
    )
  }
}
