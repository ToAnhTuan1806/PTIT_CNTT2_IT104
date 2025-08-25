import React, { Component } from 'react'

interface State{
    time: Date
}
export default class Clock extends Component<{}, State> {
    timeID: any

    constructor(props: {}){
        super(props)
        this.state= {
            time: new Date()
        }
    }
    componentDidMount(): void {
        this.timeID= setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount(): void {
        clearInterval(this.timeID)
    }
    render() {
        const {time}= this.state
    return (
      <div>
        <p>Thời gian hiện tại: {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</p>
      </div>
    )
  }
}
