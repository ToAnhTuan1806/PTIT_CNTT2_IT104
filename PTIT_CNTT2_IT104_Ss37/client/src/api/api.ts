import axios from "axios";
import type { Student } from "../features/students/types";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export async function fetchStudents(): Promise<Student[]> {
  const { data } = await api.get<Student[]>("/students");
  return data;
}

export async function createStudent(
  payload: Omit<Student, "id">
): Promise<Student> {
  const { data } = await api.post<Student>("/students", {
    id: Date.now().toString(),
    ...payload,
  });
  return data;
}

export async function updateStudent(
  id: string,
  payload: Omit<Student, "id">
): Promise<Student> {
  const { data } = await api.put<Student>(`/students/${id}`, {
    id,
    ...payload,
  });
  return data;
}

export async function deleteStudent(id: string): Promise<void> {
  await api.delete(`/students/${id}`);
}
