import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [count, setCount]= useState(0)
    useEffect(()=>{
        const timeId= setInterval(()=>{
            setCount((prev)=>prev+1)
        }, 1000)
        return ()=>{
            clearInterval(timeId)
            console.log(" Time đã được dừng lại!")
        }
    }, [])
  return (
    <div>Time: {count}s</div>
  )
}
