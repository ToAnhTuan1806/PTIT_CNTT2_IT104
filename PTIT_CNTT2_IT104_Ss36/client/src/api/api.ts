import axios from "axios";

export type Priority = "low" | "medium" | "high";

export interface Task {
  id: number;      
  title: string;
  completed: boolean;
  priority: Priority;
}

export interface ServerTask {
  id: number;
  taskName: string;
  completed: boolean;
  priority: Priority;
}

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

const toUI = (t: ServerTask): Task => ({
  id: t.id,                 // giữ nguyên number
  title: t.taskName,
  completed: t.completed,
  priority: t.priority,
});

export async function fetchTasks() {
  const res = await api.get<ServerTask[]>("/tasks");
  return res.data.map(toUI);
}

export async function createTask(title: string, priority: Priority) {
  const payload = {
    taskName: title,
    completed: false,
    priority,
  };
  const res = await api.post<ServerTask>("/tasks", payload);
  return toUI(res.data);
}

export async function updateTask(
  id: number,
  title: string,
  completed: boolean,
  priority: Priority
) {
  const payload = { taskName: title, completed, priority };
  const res = await api.put<ServerTask>(`/tasks/${id}`, payload);
  return toUI(res.data);
}

export async function toggleTask(id: number, completed: boolean) {
  const res = await api.patch<ServerTask>(`/tasks/${id}`, { completed });
  return toUI(res.data);
}

export async function deleteTask(id: number) {
  await api.delete(`/tasks/${id}`);
}
