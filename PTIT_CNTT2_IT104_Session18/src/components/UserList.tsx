import React, { useMemo } from 'react'

export default function UserList() {
    const users =[
        { id: 1, name: "Tuan", age: 19 },
        { id: 2, name: "Nam", age: 17 },
        { id: 3, name: "Quoc", age: 25 },
        { id: 4, name: "Son", age: 15 },
        { id: 5, name: "Ha", age: 30 },
    ]
    const filterUsers= useMemo(()=>{
        return users.filter((user)=> user.age>18)
    }, [users])
  return (
    <div>
        {filterUsers.map((user)=>(
            <div  key={user.id}>
                {user.name} - {user.age} tuoi
            </div>
        ))}
    </div>
  )
}
