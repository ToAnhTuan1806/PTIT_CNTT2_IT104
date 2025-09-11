import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
    const {name}= useParams<{name:string}>()
  return (
    <div>
        <h3>Name = {name}</h3>
    </div>
  )
}
