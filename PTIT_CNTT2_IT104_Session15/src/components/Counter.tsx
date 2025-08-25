import React, { Component } from 'react'

interface State{
    count: number
}
export default class Counter extends Component<{}, State> {
    countID: any
    constructor(props: {}){
        super(props)
        this.state= {
            count: 0
        }
    }
    componentDidMount(): void {
        this.countID = setInterval(() => {
        this.setState(prevState => ({
            count: (prevState.count + 1) % 11
        }))
        }, 1000)
    }
    componentWillUnmount(): void {
        clearInterval(this.countID)
    }
  render() {
    return (
      <div>Counter: {this.state.count}</div>
    )
  }
}
