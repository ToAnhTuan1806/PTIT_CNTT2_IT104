import React from 'react'

type User={
    firstName: string
    lastName: string
}
export default function FormatName() {
    const user: User ={
        firstName: "Tô Anh",
        lastName: "Tuấn",
    }

    const formatName= (user:User):string =>{
        return user.firstName + " " + user.lastName
    }
  return (
    <div>
        <h2>Họ và tên: {formatName(user)}</h2>
    </div>
  )
}
