import React, { Component } from 'react'

interface State{
    isDarkMode: boolean 
}

export default class ThemeSwitcher extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            isDarkMode: false
        }
    }
    toggleTheme= ()=> {
        this.setState(prev => ({
            isDarkMode: !prev.isDarkMode
        }))
    }
  render() {
    const {isDarkMode} =this.state
    return (
      <div style={{backgroundColor: isDarkMode ? "#222" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      borderRadius: "10px"}}>

        <h2>{isDarkMode ? "🌙 Chế độ Tối đang bật" : "☀️ Chế độ Sáng đang bật"}</h2>
        <button onClick={this.toggleTheme} style={{ marginTop: "20px", padding: "10px 20px", background: "#1976d2", border: "none", color: "white", borderRadius: "5px"}}>
            Chuyển thêm
        </button>
      </div>
    )
  }
}
