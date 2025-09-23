import React from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import type { Student } from "../utils/types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const StudentManagement: React.FC = () => {
  const [students, setStudents] = React.useState<Student[]>([
    {
      id: 1001,
      fullName: "Nguyễn Văn A",
      age: 20,
      gender: true,
      dateOfBirth: "2005-01-01",
      placeOfBirth: "Hà Nội",
      address: "Hoàn Kiếm, Hà Nội",
    },
    {
      id: 1002,
      fullName: "Trần Thị B",
      age: 21,
      gender: false,
      dateOfBirth: "2004-05-15",
      placeOfBirth: "Đà Nẵng",
      address: "Hải Châu, Đà Nẵng",
    },
    {
      id: 1003,
      fullName: "Phạm Văn C",
      age: 19,
      gender: true,
      dateOfBirth: "2006-09-20",
      placeOfBirth: "TP.HCM",
      address: "Quận 1, TP.HCM",
    },
  ]);

  const [keyword, setKeyword] = React.useState<string>("");
  const [editingStudent, setEditingStudent] = React.useState<Student | null>(null);

  const [confirmOpen, setConfirmOpen] = React.useState<boolean>(false);
  const [pendingDeleteId, setPendingDeleteId] = React.useState<number | null>(null);

  const handleSearch = (kw: string): void => {
    setKeyword(() => {
      return kw.trim();
    });
  };

  const displayed: Student[] = React.useMemo(() => {
    if (!keyword) {
      return students;
    } else {
      const lower = keyword.toLowerCase();
      return students.filter((s) => {
        return s.fullName.toLowerCase().includes(lower);
      });
    }
  }, [students, keyword]);

  const handleSubmitStudent = (student: Student): void => {
    if (editingStudent) {
      setStudents((prev) => {
        return prev.map((s) => {
          if (s.id === editingStudent.id) {
            return { ...student };
          } else {
            return s;
          }
        });
      });
      setEditingStudent(null);
    } else {
      setStudents((prev) => {
        return [...prev, student];
      });
    }
  };

  const handleRequestEdit = (student: Student): void => {
    setEditingStudent(student);
    const el = document.getElementById("student-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCancelEdit = (): void => {
    setEditingStudent(null);
  };

  const handleRequestDelete = (id: number): void => {
    setPendingDeleteId(id);
    setConfirmOpen(true);
  };

  const handleCancelDelete = (): void => {
    setConfirmOpen(false);
    setPendingDeleteId(null);
  };

  const handleConfirmDelete = (): void => {
    if (pendingDeleteId !== null) {
      setStudents((prev) => {
        return prev.filter((s) => {
          return s.id !== pendingDeleteId;
        });
      });
    }
    setConfirmOpen(false);
    setPendingDeleteId(null);
    if (editingStudent && editingStudent.id === pendingDeleteId) {
      setEditingStudent(null);
    }
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList
          students={displayed}
          onRequestDelete={handleRequestDelete}
          onRequestEdit={handleRequestEdit}
        />
      </div>

      <StudentForm
        onSubmit={handleSubmitStudent}
        existingStudents={students}
        editingStudent={editingStudent}
        onCancelEdit={handleCancelEdit}
      />

      {/* Modal xác nhận xóa */}
      <Dialog open={confirmOpen} onClose={handleCancelDelete}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc chắn muốn xóa không?</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCancelDelete}>
            Hủy
          </Button>
          <Button variant="contained" color="error" onClick={handleConfirmDelete}>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentManagement;
