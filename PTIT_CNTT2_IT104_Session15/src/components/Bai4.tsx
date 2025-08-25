import React, { Component } from 'react'

interface State{
    progress: number
    submitProgress: number|null
}

export default class Bai4 extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state={
            progress: 0,
            submitProgress: null
        }
    }
    handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            progress: Number(e.target.value)
        })
    }
    handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        this.setState({
            submitProgress: this.state.progress
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
            <p>Tiến độ hoàn thành: {" "} {this.state.submitProgress ? this.state.submitProgress: ""} %</p>
        <input type="range" placeholder='...' value={this.state.progress} onChange={this.handleChange} />
        </div>
        <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}
