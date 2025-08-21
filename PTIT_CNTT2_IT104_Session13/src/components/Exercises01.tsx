import React, { Component } from 'react'

interface State {
  name: string
}

export default class Exercises01 extends Component<{}, State> {
  constructor() {
    super({})
    this.state = {
      name: "Tô Anh Tuấn"
    }
  }

  render() {
    const {name}= this.state
    return (
      <div><h1>
        Họ và tên: {name}
        </h1>
        </div>
    )
  }
}
