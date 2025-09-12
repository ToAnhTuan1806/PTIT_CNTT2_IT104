import { useNavigate, useParams } from "react-router-dom";
import { tasks } from "./TaskData";

export default function TaskDetail() {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();

  const task = tasks.find((t) => String(t.id) === id);
  if (!task) {
    return <p style={{ color: "#b91c1c" }}>Công việc không tồn tại.</p>;
  }

  return (
    <div>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
        {task.title}
      </h1>
      <p style={{ color: "#6b7280", marginBottom: 16 }}>{task.description}</p>

      <button onClick={() => navigate(-1)}
        style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid #1976d2", background: "#1976d2", color: "#fff"}}>
        Quay lại
      </button>
    </div>
  );
}
