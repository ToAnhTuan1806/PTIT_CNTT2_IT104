import React from 'react'

type ColorBoxProps={
    color: string
}
export default function ColorBox({color}: ColorBoxProps) {

  return (
    <div style={{textAlign: "center", margin: "20px", display: "inline-block"}}>
        <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Box
      </div>
       <div
        style={{
          border: "1px solid gray",
          marginTop: "10px",
          padding: "5px",
          display: "inline-block",
          borderRadius: "4px",
        }}
      >
        {color}
      </div>
    </div>
  )
}
