import React from 'react'
import Header from './Bai8/Header'
import Row from './Bai8/Row'

const users= [
    { id: 1, name: "Malcolm Lockyer", birthDate: "21/03/1961", gender: "Nam", address: "New york" },
    { id: 2, name: "Maria", birthDate: "11/02/1990", gender: "Nữ", address: "London" },
]

export default function UserTable() {
    
  return (
     <table style={{
      width: "100%",
      borderCollapse: "collapse",
      borderRadius: "8px",
      overflow: "hidden"
    }}>
      <Header />
      <tbody>
        {users.map((user, index) => (
          <Row 
            key={user.id}
            index={index + 1}
            name={user.name}
            birthDate={user.birthDate}
            gender={user.gender}
            address={user.address}
          />
        ))}
      </tbody>
    </table>
  )
}
