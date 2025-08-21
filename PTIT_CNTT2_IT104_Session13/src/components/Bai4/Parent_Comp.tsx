import React, { Component } from 'react'
import Children_Comp from './Children_Comp'

interface State{
    name:string
}

export default class Parent_Comp extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state={
            name: "Nguyễn Văn Nam"
        }
    }
  render() {
    return (
      <div>
        <p>Họ và tên bên component cha: {this.state.name}</p>
        <Children_Comp name={this.state.name}/>
      </div>
    )
  }
}
