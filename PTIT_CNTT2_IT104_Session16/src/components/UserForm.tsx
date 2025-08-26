import React, { Component, type ChangeEvent, type FormEvent } from 'react'

interface State{
    formData: {
    name: string
    email: string
    age: string
  }
  error: string
  submittedData: {
    name: string
    email: string
    age: string
  } | null
}

export default class UserForm extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
          formData: {
            name: "",
            email: "",
            age: "",
        },
        error: "",
        submittedData: null,
      }
    }
    handleChange =(e: ChangeEvent<HTMLInputElement>) =>{
        const {name, value}= e.target
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData, [name]: value
            }
        }))
    }
    handleSubmit= (e: FormEvent) =>{
        e.preventDefault()
        const {name, email, age} =this.state.formData

        if(!email.includes("@")){
            this.setState({
                error: "Email không hợp lệ", submittedData: null
            })
            return
        }
        if(Number(age)<0){
            this.setState({
                error: "Tuổi không được âm", submittedData: null
            })
            return
        }
        this.setState({
            error: "",
            submittedData: {name, email, age}
        })
    }
    handleReset = () => {
    this.setState({
      formData: { name: "", email: "", age: "" },
      error: "",
      submittedData: null,
    })
  }
    
  render() {
    const { formData, error, submittedData } = this.state
    return (
        <div style={{ maxWidth: "400px", padding: "16px", border: "1px solid #000", borderRadius: "6px",}}>
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
            Nhập thông tin người dùng
        </h2>

        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Họ tên" value={formData.name} onChange={this.handleChange} 
            style={{ width: "95%", padding: "8px", marginBottom: "10px", border: "1px solid #000", borderRadius: "4px",}}/>
            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={this.handleChange} 
            style={{ width: "95%", padding: "8px", marginBottom: "10px", border: "1px solid #000", borderRadius: "4px",}}/>
            <input type="number" name="age" placeholder="Tuổi" value={formData.age} onChange={this.handleChange}
            style={{ width: "95%", padding: "8px", marginBottom: "10px", border: "1px solid #000", borderRadius: "4px", }} />

            {error && (<p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}> {error} </p>)}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
                type="submit"
                style={{
                padding: "6px 12px",
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                }}
            >
                Gửi
            </button>
            <button
                type="button"
                onClick={this.handleReset}
                style={{
                padding: "6px 12px",
                background: "#555",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                }}
            >
                Xóa tất cả
            </button>
            </div>
        </form>

        {/* Hiển thị thông tin sau khi submit */}
        {submittedData && (
            <div
            style={{
                marginTop: "16px",
                padding: "12px",
                border: "1px solid #000",
                borderRadius: "4px",
            }}
            >
            <h3>Thông tin đã nhập:</h3>
            <p>
                <b>Họ tên:</b> {submittedData.name}
            </p>
            <p>
                <b>Email:</b> {submittedData.email}
            </p>
            <p>
                <b>Tuổi:</b> {submittedData.age}
            </p>
            </div>
        )}
        </div>

    )
  }
}
