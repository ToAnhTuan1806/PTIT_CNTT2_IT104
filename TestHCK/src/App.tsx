import React, { useMemo, useState } from "react";
import type { Todo } from "./components/types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./components/style.css"

const uid = () => Math.random().toString(36).slice(2, 10);

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [moveDoneToEnd, setMoveDoneToEnd] = useState(true);

  const visible = useMemo(() => {
    const list = [...todos];
    if (moveDoneToEnd)
      list.sort((a, b) => Number(a.completed) - Number(b.completed));
    return list;
  }, [todos, moveDoneToEnd]);

  const addTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: uid(), text, completed: false, createdAt: Date.now() },
    ]);
  };
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="appWrap">
      <div className="paperLayer"></div>
      <div className="card pinkCard">
        <header className="pinkHeader">
          <h1 className="pinkTitle">Todo List</h1>
          <p className="pinkSubtitle">Get things done, one item at a time.</p>
          <hr className="pinkRule" />
        </header>

        <section className="sections">
          <div className="sectionRow">
            <TodoList
              todos={visible}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>

          <div className="sectionRow toggleRow">
            <label className="toggleLabel">Move done items at the end?</label>
            <label className="switch">
              <input
                type="checkbox"
                placeholder="..."
                checked={moveDoneToEnd}
                onChange={(e) => setMoveDoneToEnd(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="sectionRow addRow">
            <label className="addLabel">Add to the todo list</label>
            <TodoInput onAdd={addTodo} />
          </div>
        </section>
      </div>
    </div>
  );
}
