import React from 'react'

export default function Account_B6() {
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");
  return (
    <div>
        <h1>Account</h1>
        <p>Xin chào: <b>{email}</b> ({role})</p>
    </div>
  )
}
