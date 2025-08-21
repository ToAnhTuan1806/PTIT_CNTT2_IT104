import React, { Component } from 'react'

interface User {
  id: number
  name: string
  age: number
}

interface State {
  users: User[]
}

export default class Exercises03 extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state={
      users: [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Mary", age: 25 },
        { id: 3, name: "Jane", age: 20 }
      ]
    }
  }

  render() {
    return (
      <div>
        <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" , textAlign: "center"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Họ và tên</th>
              <th>Tuổi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
