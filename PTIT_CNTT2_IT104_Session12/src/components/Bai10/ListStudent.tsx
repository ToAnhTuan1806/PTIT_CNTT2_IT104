import React from 'react'
import ControlPanel from './ControlPanel'
import StudentList from './StudentList'
import StudentForm from './StudentForm'

export default function ListStudent() {
  return (
     <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <ControlPanel />
          <StudentList />
        </div>
      </div>
      <div className="col-5 grid-margin">
        <StudentForm />
      </div>
    </div>
  )
}
