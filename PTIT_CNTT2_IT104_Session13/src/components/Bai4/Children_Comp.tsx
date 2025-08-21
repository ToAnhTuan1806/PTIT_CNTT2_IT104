import React, { Component } from 'react'

interface Props{
    name:string
}
export default class Children_Comp extends Component<Props> {

  render() {
    return (
      <div><p>Họ và tên bên component con: {this.props.name}</p></div>
    )
  }
}
