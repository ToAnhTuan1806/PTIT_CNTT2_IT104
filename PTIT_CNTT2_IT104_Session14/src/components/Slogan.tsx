import React, { Component } from 'react'

interface State{
    slogan: string
}

export default class Slogan extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            slogan: "Học code để đi làm"
        }
    }

    handleChange= ()=>{
        this.setState({
            slogan: "Học code sẽ thành công. Cố lên!!!"
        })
    }

    shouldComponentUpdate() {
        console.log("khong render lai");
        return false
    }
  render() {
    return (
      <div>
        <h2>Slogan: {this.state.slogan}</h2>
        <button onClick={this.handleChange}>Change state</button>
        </div>
    )
  }
}
