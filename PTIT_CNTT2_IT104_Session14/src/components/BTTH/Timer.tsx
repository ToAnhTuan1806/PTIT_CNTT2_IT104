import React, { Component } from 'react'
import "./style.css"

interface StateType{
    seconds: number
    isRunning: boolean
}

export default class Timer extends Component<{}, StateType> {
    constructor(props: {}){
        super(props)
        this.state ={
            seconds:3600,
            isRunning: false
        }
    }
    startTime= ()=> {
        if(!this.state.isRunning){
            // Khoi tao tien trinh chay sau moi 1s
            setInterval(()=>{
                // Cu moi giay cap nhat state tang seconds len 1
                this.setState({
                    seconds: this.state.seconds + 1
                })
            }, 1000)
            this.setState({
                isRunning: true
            })
        }
    }

    componentDidMount(): void {
        console.log("Component duoc mount");
    }
    componentDidUpdate(): void {
        console.log("Component update");        
    }
    componentWillUnmount(): void {
        console.log("Component duoc unmount");      
    }

    formatTime= (): string =>{
        // Tinh ra so gio
        let hour= Math.floor(this.state.seconds/ 3600)
        // Tinh ra so phut
        let min= Math.floor((this.state.seconds % 3600) / 60)
        // Tinh ra so giay
        let sec= this.state.seconds % 60
        // Tra ve string sau khi tinh
        return `${hour}:${min}:${sec}`
    }
  render() {
    return (
      <>
        <div className="timer-container">
            <div className="timer-header">
            <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
            </div>
            <div className="mode-selector">
            <button className="mode-btn active" data-mode="stopwatch">
                Bấm Giờ
            </button>
            </div>
            <div className="time-display" id="timeDisplay">
                {this.formatTime()}
            </div>
            <div className="progress-bar">
            <div className="progress-fill" id="progressFill" />
            </div>
            <div className="controls">
            <button className="control-btn start-btn" id="startBtn" onClick={this.startTime}>
                Bắt Đầu
            </button>
            <button
                className="control-btn pause-btn"
                id="pauseBtn"
                style={{ display: "none" }}
            >
                Tạm Dừng
            </button>
            <button className="control-btn reset-btn" id="resetBtn">
                Đặt Lại
            </button>
            </div>
            <div className="status-message" id="statusMessage" />
        </div>
        </>

    )
  }
}
