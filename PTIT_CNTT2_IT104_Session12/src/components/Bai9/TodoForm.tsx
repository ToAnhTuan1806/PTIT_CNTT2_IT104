import React from 'react'

export default function TodoForm() {
  return (
     <form className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input type="text" id="form2" className="form-control" placeholder="Thêm công việc" />
      </div>
      <button type="submit" className="btn btn-info ms-2">
        Thêm
      </button>
    </form>
  )
}
