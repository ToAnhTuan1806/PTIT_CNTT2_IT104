import React from 'react'
import Buttons from './Buttons'

interface Infor{
    index: number
    name: string
    birthDate: string
    gender: string
    address: string
}
export default function Row({index, name, birthDate, gender, address}: Infor) {
  return (
    <tr style={{ borderBottom: "1px solid #e5e7eb" , color: "#8b8bb6"}}>
        <td style={{ padding: "12px", textAlign: "center" }}>{index}</td>
        <td style={{ padding: "12px", textAlign: "center" }}>{name}</td>
        <td style={{ padding: "12px", textAlign: "center" }}>{birthDate}</td>
        <td style={{ padding: "12px", textAlign: "center" }}>{gender}</td>
        <td style={{ padding: "12px", textAlign: "center" }}>{address}</td>
        <td style={{ padding: "12px", textAlign: "center" }}><Buttons/></td>
    </tr>
    
  )
}
