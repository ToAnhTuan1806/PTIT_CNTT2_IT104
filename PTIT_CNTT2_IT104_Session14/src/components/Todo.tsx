import React, { Component } from "react"

interface Todo {
  id: number
  name: string
  completed: boolean
}

interface State {
  todos: Todo[]
  newTodo: string
  error: string
  confirmDeleteId: number | null
}

export default class TodoApp extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos") || "[]"),
      newTodo: "",
      error: "",
      confirmDeleteId: null,
    }
  }

  saveToStorage = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTodo: e.target.value })
  }

  handleAdd = () => {
    const { newTodo, todos } = this.state
    if (!newTodo.trim()) {
      this.setState({ error: "Tên công việc không được để trống" })
      return
    }
    if (todos.some((t) => t.name === newTodo.trim())) {
      this.setState({ error: "Tên công việc đã tồn tại" })
      return
    }

    const newTask: Todo = {
      id: Date.now(),
      name: newTodo.trim(),
      completed: false,
    }

    const updatedTodos = [...todos, newTask]
    this.saveToStorage(updatedTodos)
    this.setState({ todos: updatedTodos, newTodo: "", error: "" })
  }

  handleToggle = (id: number) => {
    const updatedTodos = this.state.todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
    this.saveToStorage(updatedTodos)
    this.setState({ todos: updatedTodos })
  }

  handleDelete = () => {
    const { confirmDeleteId, todos } = this.state
    if (confirmDeleteId !== null) {
      const updatedTodos = todos.filter((t) => t.id !== confirmDeleteId)
      this.saveToStorage(updatedTodos)
      this.setState({ todos: updatedTodos, confirmDeleteId: null })
    }
  }

  render() {
    const { todos, newTodo, error, confirmDeleteId } = this.state
    const completedCount = todos.filter((t) => t.completed).length

    return (
      <div style={{ maxWidth: "500px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3 style={{ textAlign: "center" }}>Danh sách công việc</h3>

        <div style={{ display: "flex", gap: "10px" }}>
          <input type="text" value={newTodo} onChange={this.handleChange} placeholder="Nhập tên công việc"
            style={{ flex: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
          />
          <button onClick={this.handleAdd} style={{ padding: "8px 16px", background: "#0d6efd", color: "#fff", border: "none", borderRadius: "6px" }}>
            Thêm
          </button>
        </div>

        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}

        <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
          {todos.map((t) => (
            <li key={t.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <input type="checkbox" checked={t.completed} onChange={() => this.handleToggle(t.id)} placeholder="..."/>
              <span style={{ marginLeft: "8px", flex: 1, textDecoration: t.completed ? "line-through" : "none" }}>{t.name}</span>
              <button onClick={() => this.setState({ confirmDeleteId: t.id })}
                style={{ marginLeft: "8px", background: "red", color: "white", border: "none", padding: "4px 8px", borderRadius: "4px" }}
              >Xóa</button>
            </li>
          ))}
        </ul>

        <div style={{ background: "#f8f9fa", padding: "8px", borderRadius: "6px", marginTop: "10px" }}>
          Công việc đã hoàn thành: <b>{completedCount}</b> / {todos.length}
        </div>

        {confirmDeleteId !== null && (<div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "8px", width: "300px" }}>
              <h4>Xác nhận</h4>
              <p>Bạn có chắc chắn muốn xóa công việc này?</p>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button onClick={() => this.setState({ confirmDeleteId: null })}>Hủy</button>
                <button onClick={this.handleDelete} style={{ background: "#0d6efd", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px" }}>
                  Đồng ý
                  </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
