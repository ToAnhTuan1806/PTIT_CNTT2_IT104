import React, { Component } from 'react'

interface State{
    company: string
}
export default class Company extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            company: "Rikkei Academy"
        }
    }

    handleChange= ()=>{
        this.setState({
            company: this.state.company === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy"
        })
    }
  render() {
    return (
      <div>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.handleChange}>Change state</button>
        </div>
    )
  }
}
