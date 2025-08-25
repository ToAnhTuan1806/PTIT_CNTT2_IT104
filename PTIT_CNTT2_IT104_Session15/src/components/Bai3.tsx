import React, { Component } from 'react'
interface State{
    date: string
    dateSubmit: string
}

export default class Bai3 extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            date: "",
            dateSubmit: ""
        }
    }
    handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            date: e.target.value
        })
    }
    handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        this.setState({
            dateSubmit: this.state.date
        })

    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <p>Ngày sinh: {" "} {this.state.dateSubmit ? this.state.dateSubmit: ""}</p>
                <input type="date" name="date" placeholder='...' value={this.state.date} onChange={this.handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
