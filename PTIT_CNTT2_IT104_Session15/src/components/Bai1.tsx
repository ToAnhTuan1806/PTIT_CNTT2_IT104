import React, { Component } from 'react'
interface State{
    email: string
}

export default class Bai1 extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            email: ""
        }
    }
    handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            email: e.target.value
        })
    }
    handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(this.state);
        
    }
  render() {
    return (
      <div>
        <h2>From</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Email</label> <br />
            <input type="email" name="email" placeholder='...' value={this.state.email} onChange={this.handleChange} />
            <button type='submit'>Submit</button>
        </div>
        </form>
      </div>
    )
  }
}
