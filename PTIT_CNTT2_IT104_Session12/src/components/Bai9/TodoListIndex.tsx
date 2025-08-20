import React from "react";
import TodoForm from "./TodoForm";
import TodoTabs from "./TodoTabs";
import TodoList from "./TodoList";

export default function TodoListIndex() {
  return (
    <section style={{ minHeight: "100vh", background: "#f8f9fa", padding: "40px" }}>
      <div className="container">
        <div className="card">
          <div className="card-body p-5">
            <h3 style={{ textAlign: "center", marginBottom: "40px" }}>
              Quản lý công việc
            </h3>

            {/* Form thêm công việc */}
            <TodoForm />

            {/* Tabs */}
            <TodoTabs />

            {/* Danh sách công việc */}
            <TodoList />
          </div>
        </div>
      </div>
    </section>
  );
}
