import React, { Component } from 'react'

interface State{
    color: string
    submitColor: string
}

export default class Bai2 extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            color: "",
            submitColor: "",
        }
    }
    handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            color: e.target.value
        })
    }
    handleSubmit= (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        this.setState({
            submitColor: this.state.color
        })
    }
  render() {
    return (
      <div>
        <h2>Color: {" "} {this.state.submitColor ? this.state.submitColor: ""}</h2>
        <h3>From</h3>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Màu sắc</label> <br />
                <input type="color" placeholder="..." value={this.state.color} onChange={this.handleChange}/> <br />
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
