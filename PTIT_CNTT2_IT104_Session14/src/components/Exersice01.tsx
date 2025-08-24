import React, { Component } from 'react'

interface State{
    userName: string
}
export default class Exersice01 extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state={
            userName: "To Anh Tuan"
        }
    }
    componentDidMount(): void {
        console.log("da them");
        
    }
  render() {
    return (
      <div><b>Ho va ten: {this.state.userName}</b></div>
    )
  }
}
