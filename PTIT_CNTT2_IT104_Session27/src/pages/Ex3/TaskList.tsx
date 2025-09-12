import React from 'react'
import {  tasks } from './TaskData'
import { Link } from 'react-router-dom'

export default function TaskList() {
  return (
    <div>
        <h1>Danh sách công việc</h1>
              <div style={{ display: "flex", flexDirection: "column", gap: 12}}>
        {tasks.map((t) => (
          <div key={t.id}
            style={{maxWidth: "400px", border: "1px solid #e5e7eb", borderRadius: 8, padding: 12, background: "#fff"}}>
            <h3 style={{ margin: "4px 0" }}>{t.title}</h3>
            <p style={{ margin: 0, color: "#6b7280" }}>{t.description}</p>
            <div style={{ marginTop: 8 }}>
              <Link to={`/task/${t.id}`} style={{textDecoration: "none"}}>Xem chi tiết</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
