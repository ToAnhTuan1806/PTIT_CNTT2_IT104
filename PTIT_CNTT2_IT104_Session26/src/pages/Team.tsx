import React from 'react'
import { useParams } from 'react-router-dom'

export default function Team() {
  const {teamId}= useParams<{teamId: string}>()
  return (
    <div>
      <p>Chi tiết team: {teamId}</p>
    </div>
  )
}
