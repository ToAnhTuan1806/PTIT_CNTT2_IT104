import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import ModelDelete from "./ModelDelete";
import ModalEdit from "./ModelEdit";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)

  // xoá
  const [openModel, setOpenModel]= useState(false)
  const [toDelete, setToDelete]= useState<Todo| null>(null)

  // thêm
  const [newTitle, setNewTitle] = useState("")
  const [error, setError] = useState("")
  const [adding, setAdding] = useState(false)

  // sửa
  const [openEdit, setOpenEdit] = useState(false);
  const [editing, setEditing] = useState<Todo | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editError, setEditError] = useState("");
  const [savingEdit, setSavingEdit] = useState(false)

  const [openCongrats, setOpenCongrats]= useState(false)

  async function fetchTodos() {
    try {
      setLoading(true)
      let res = await axios.get<Todo[]>("http://localhost:3000/todos");
      setTodos(res.data);
            setTimeout(() => {
        setTodos(res.data);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error: ", error)
      setLoading(false)
    }
  }
    useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo() {
    let title = newTitle.trim();
    if (!title) {
      setError("Tên công việc không được để trống");
      return;
    }
    let isDup = todos.some(td => td.title === title);
    if (isDup) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    try {
      setAdding(true);
      let res = await axios.post<Todo>("http://localhost:3000/todos", { title, completed: false });
      setTodos(prev => [...prev, res.data]);
      setNewTitle("");
      setError("");
    } catch (error) {
      console.error("Error: ", error);
    }
    setAdding(false);
  }


  async function toggleTodo(id: number, completed: boolean) {
  try {
    await axios.patch(`http://localhost:3000/todos/${id}`, { completed });
    setTodos(prev => {
      const next = prev.map(td => td.id === id ? { ...td, completed } : td);
      const allDone = next.length > 0 && next.every(td => td.completed);
      if (allDone) {
        setOpenCongrats(true)
      }
      return next;
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
  function handleRequest(todo: Todo) {
    setToDelete(todo);
    setOpenModel(true);
  }

  async function handleConfirm() {
    if (!toDelete) return;
    try {
      await axios.delete(`http://localhost:3000/todos/${toDelete.id}`);
      setTodos(prev => prev.filter(td => td.id !== toDelete.id));
    } catch(error) {
      console.error("Error:", error);
    }
    setOpenModel(false);
    setToDelete(null);
  }

    function handleRequestEdit(todo: Todo) {
    setEditing(todo);
    setEditTitle(todo.title);
    setEditError("");
    setOpenEdit(true);
  }

    async function handleConfirmEdit() {
    if (!editing) return;
    const title = editTitle.trim();

    if (!title) {
      setEditError("Tên công việc không được để trống");
      return;
    }
    const isDup = todos.some(
      (td) =>
        td.id !== editing.id &&
        td.title.trim().toLowerCase() === title.toLowerCase()
    );
    if (isDup) {
      setEditError("Tên công việc đã tồn tại");
      return;
    }

    try {
      setSavingEdit(true);
      await axios.patch(`http://localhost:3000/todos/${editing.id}`, { title });
      setTodos((prev) =>
        prev.map((td) => (td.id === editing.id ? { ...td, title } : td))
      );
      setOpenEdit(false);
      setEditing(null);
      setSavingEdit(false);
    } catch (error) {
      console.error("Error update todo:", error);
      setSavingEdit(false);
    }
  }

  return (
    <div className="page">
      <h1 className="title">Quản lý công việc</h1>

      <div className="panel">
        <div className="input-row">
          <input
            className={`input ${error ? "input-error" : ""}`}
            type="text"
            placeholder="Nhập tên công việc"
            value={newTitle}
            onChange={(e) => { setNewTitle(e.target.value); if(error) setError(""); }}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={addTodo}
            disabled={adding || !newTitle.trim()}
          >
            {adding ? "Đang lưu..." : "Thêm công việc"}
          </button>
          {error && <div className="error-text">{error}</div>}
        </div>
      </div>

      <div className="panel">
        <div className="tabs">
          <button className="tab tab-active" type="button">Tất cả</button>
          <button className="tab" type="button">Hoàn thành</button>
          <button className="tab" type="button">Đang thực hiện</button>
        </div>
      </div>
      {loading ? (
        <div className="spinner"></div>  
      ) : (
        <div className="todo-list">
          <TodoList todos={todos} onRequestDelete={handleRequest} onToggle={toggleTodo} onRequestEdit={handleRequestEdit}/>
        </div>
      )}

      <div className="footer-actions">
        <button className="btn btn-danger">Xoá công việc hoàn thành</button>
        <button className="btn btn-danger">Xoá tất cả công việc</button>
      </div>
        <ModelDelete
        open={openModel}
        message={`< ${toDelete?.title} >`}
        onCancel={() => { setOpenModel(false); setToDelete(null); }}
        onConfirm={handleConfirm}
      />

      {openCongrats && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">Hoàn thành công việc</h3>
              <button className="modal-close" onClick={() => setOpenCongrats(false)}>✕</button>
            </div>
            <div className="modal-body">
              Tất cả công việc đã được đánh dấu hoàn thành 
            </div>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={() => setOpenCongrats(false)}>OK</button>
            </div>
          </div>
        </div>
      )}

      <ModalEdit
        open={openEdit}
        value={editTitle}
        error={editError}
        saving={savingEdit}
        onChange={(val) => {
          setEditTitle(val);
          if (editError) setEditError("");
        }}
        onCancel={() => {
          setOpenEdit(false);
          setEditing(null);
        }}
        onConfirm={handleConfirmEdit}
      />

    </div>
  );
}


