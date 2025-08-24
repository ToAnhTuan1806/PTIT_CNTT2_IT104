import React, { Component } from 'react'

interface State{
    gender: string
}

export default class Gender extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state={
            gender: ""
        }
    }

    handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            gender: e.target.value
        })
    }
    handleSumbit= (e: React.FormEvent) =>{
        e.preventDefault()
        if(this.state.gender===""){
            console.log("Chua chon gioi tinh!");         
        }else{
            console.log("Gioi tinh: ", this.state.gender);      
        }
    }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        <form onSubmit={this.handleSumbit}>
            <label htmlFor="Giới tính:"></label>
            <input type="radio" name="gender" value="Nam" checked={this.state.gender === "Nam"} onChange={this.handleChange}/> Nam <br />

          <input type="radio" name="gender" value="Nữ" checked={this.state.gender === "Nữ"} onChange={this.handleChange}/> Nữ <br />

          <input type="radio" name="gender" value="Khác" checked={this.state.gender === "Khác"} onChange={this.handleChange}/> Khác <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
