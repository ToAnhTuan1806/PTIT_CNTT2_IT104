import React, { Component } from 'react'
import "./style.css"

export default class ButtonList extends Component {
  render() {
    return (
      <div style={{ display: "flex", gap: "10px", padding: "20px", background: "#333" }}>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-danger">Danger</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-light">Light</button>
        <button className="btn btn-dark">Dark</button>
        <a href="#" className="btn btn-link">Link</a>
      </div>
    )
  }
}
