import React, { Component, type ChangeEvent, type FormEvent } from 'react'

interface State{
    name: string
    email: string
    age: string
    error: string
    submitted: boolean

}

export default class UserForm extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            name: "",
            email: "",
            age: "",
            error: "",
            submitted: false
      }
    }
    handleChange =(e: ChangeEvent<HTMLInputElement>) =>{
        const {name, value}= e.target
        this.setState(prev =>({
            ...prev, [name]: value
        }))
            
    }
    handleSubmit= (e: React.FormEvent) =>{
        e.preventDefault()
        const {name, email, age} =this.state

        if(!email.includes("@")){
            this.setState({
                error: "Email không hợp lệ", submitted: false
            })
            return
        }
        if(Number(age)<0){
            this.setState({
                error: "Tuổi không được âm", submitted: false
            })
            return
        }
        this.setState({
            error: "", submitted: true
        })
    }
    handleReset = () => {
    this.setState({
      name: "",
      email: "", 
      age: "" ,
      error: "",
      submitted: false
    })
  }
    
  render() {
    const { name, email, age, error, submitted } = this.state
    return (
        <div style={{ maxWidth: "400px", padding: "16px", border: "1px solid #000", borderRadius: "6px",}}>
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
            Nhập thông tin người dùng
        </h2>

        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Họ tên" value={name} onChange={this.handleChange} 
            style={{ width: "95%", padding: "8px", marginBottom: "10px", border: "1px solid #000", borderRadius: "4px", background: "#00ffff"}}/>
            <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} 
            style={{ width: "95%", padding: "8px", marginBottom: "10px", border: "1px solid #000", borderRadius: "4px", background: "#00ffff"}}/>
            <input type="number" name="age" placeholder="Tuổi" value={age} onChange={this.handleChange}
            style={{ width: "95%", padding: "8px", marginBottom: "10px", border: "1px solid #000", borderRadius: "4px", background: "#00ffff"}}/>

            {error && (<p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}> {error} </p>)}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit"
                style={{ padding: "6px 12px", background: "#1976d2", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }} >
                Gửi
            </button>
            <button type="button"  onClick={this.handleReset}  
                style={{  padding: "6px 12px",  background: "#1976d2",  color: "#fff",  border: "none",  borderRadius: "6px",  cursor: "pointer", }}>
                Xóa tất cả
            </button>
            </div>
        </form>

        {submitted && (
            <div
            style={{ marginTop: "16px", padding: "12px", border: "none", borderRadius: "4px", background: "#e3f2fd", borderLeft: "5px solid #1976d2", textAlign: "center"}}>
            <h3>Thông tin đã nhập:</h3>
            <p><b>Họ tên:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Tuổi:</b> {age}</p>
            </div>
        )}
        </div>

    )
  }
}
