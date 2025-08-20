import React from 'react'

export default function ListCourse() {
    const course= ["HTML", "CSS", "JavaScript", "ReactJS"]
  return (
    <div>
        <h2>Danh sách khoá học</h2>
        <ol>
            {course.map((course, index)=>(
                <li key={index}>{course}</li>
            ))}
        </ol>
    </div>
  )
}

