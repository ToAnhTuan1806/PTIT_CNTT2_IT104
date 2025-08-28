import React, { useReducer, useEffect, useState } from "react";

const initialState: string[] = [];

function reducer(state: string[], action: { type: string; payload?: any }) {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state
  }
}

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      dispatch({ type: "SET_TODOS", payload: JSON.parse(savedTodos) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (input.trim() === ""){
      return;
    }
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleRemove = (index: number) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa công việc này?");
    if (confirmDelete) {
      dispatch({ type: "REMOVE_TODO", payload: index });
    }
  };

  return (
    <div style={{ width: "400px" }}>
      <input type="text" placeholder="Nhập tên công việc" value={input} onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px",}}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}/>

      <div style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "5px", background: "#fff"}}>
        {todos.map((todo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px ", borderBottom: "1px solid #eee" }}>
            <span>{todo}</span>
            <button onClick={() => handleRemove(index)}
              style={{ background: "#e74c3c", color: "white", border: "none", borderRadius: "4px", padding: "5px 10px"}}>
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
