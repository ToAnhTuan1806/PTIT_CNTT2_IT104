import React, { useEffect, useMemo, useState } from "react";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import type { Student } from "./features/students/types";
import StudentForm from "./features/students/StudentForm";
import StudentList from "./features/students/StudentList";
import StudentSearchSortFilter from "./features/students/StudentSearchSortFilter";
import {
  fetchStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./api/api";

const normalize = (s: string) => s.normalize("NFC").trim().toLowerCase();

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Student> | undefined>(
    undefined
  );

  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "age">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchStudents();
        setStudents(data);
        setError(null);
      } catch {
        setError("Không tải được danh sách sinh viên.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const grades = useMemo(
    () => Array.from(new Set(students.map((s) => s.grade))).sort(),
    [students]
  );

  const isNameTaken = (name: string, excludeId?: string) =>
    students.some(
      (s) => normalize(s.name) === normalize(name) && s.id !== excludeId
    );

  const handleAddClick = () => {
    setEditing(undefined);
    setOpenForm(true);
  };

  const handleSubmit = async (data: {
    id?: string;
    name: string;
    age: number;
    grade: string;
  }): Promise<boolean> => {
    try {
      setSaving(true);
      if (data.id) {
        const updated = await updateStudent(data.id, {
          name: data.name,
          age: data.age,
          grade: data.grade,
        });
        setStudents((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
      } else {
        const created = await createStudent({
          name: data.name,
          age: data.age,
          grade: data.grade,
        });
        setStudents((prev) => [created, ...prev]);
      }
      return true;
    } catch {
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (s: Student) => {
    setEditing(s);
    setOpenForm(true);
  };

  const handleDelete = async (id: string) => {
    const ok = confirm("Xác nhận xóa học sinh?"); 
    if (!ok) return;

    try {
      setSaving(true);
      await deleteStudent(id);
      setStudents((prev) => prev.filter((p) => p.id !== id));
    } catch {
    } finally {
      setSaving(false);
    }
  };

  const handleClearFilters = () => {
    setSearch("");
    setGradeFilter("all");
    setSortBy("name");
    setSortDir("asc");
  };

  const filteredSorted = useMemo(() => {
    let out = students.slice();
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q));
    }
    if (gradeFilter !== "all") out = out.filter((s) => s.grade === gradeFilter);
    out.sort((a, b) => {
      if (sortBy === "name") {
        const r = a.name.localeCompare(b.name);
        return sortDir === "asc" ? r : -r;
      }
      const r = a.age - b.age;
      return sortDir === "asc" ? r : -r;
    });
    return out;
  }, [students, search, gradeFilter, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen relative">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <StudentSearchSortFilter
        search={search}
        gradeFilter={gradeFilter}
        sortBy={sortBy}
        sortDir={sortDir}
        grades={grades}
        onSearchChange={setSearch}
        onGradeChange={setGradeFilter}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={handleClearFilters}
      />

      <div className="mt-6">
        {error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : (
          <StudentList
            students={filteredSorted}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

      <div className="fixed bottom-6 right-6">
        <Button variant="contained" onClick={handleAddClick}>
          Add Student
        </Button>
      </div>

      <StudentForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        isNameTaken={isNameTaken}
      />

      <Backdrop
        sx={{ color: "#fff", zIndex: (t) => t.zIndex.modal - 1 }}
        open={(loading || saving) && !openForm}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}

export default App;
