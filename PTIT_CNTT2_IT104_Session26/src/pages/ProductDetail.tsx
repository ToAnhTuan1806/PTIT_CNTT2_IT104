import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const {id} = useParams<{id:string}>()
  return (
    <div>
        <h3>id = {id}</h3>
    </div>
  )
}
