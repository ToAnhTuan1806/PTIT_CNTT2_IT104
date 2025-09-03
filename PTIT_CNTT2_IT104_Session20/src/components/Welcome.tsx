import React, { useEffect } from 'react'

export default function Welcome() {
    useEffect(()=>{
        console.log("Component Welcome đã được render lần đầu!");
        
    }, [])
  return (
    <div style={{border: "1px solid black", maxWidth: "520px"}}><h2>Chào mừng bạn đến với ứng dụng cùa chúng tôi!</h2></div>
    
  )
}
