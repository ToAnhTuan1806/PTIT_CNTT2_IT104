import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  SET_KEYWORD,
} from "../stores/reducer/studentReducer";
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
import type { RootState } from "../stores/reducer";

const StudentManagement: React.FC = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: RootState) => state.students.list);
  const keyword = useSelector((state: RootState) => state.students.keyword);

  const displayed = React.useMemo(() => {
    if (!keyword) return students;
    const lower = keyword.toLowerCase();
    return students.filter((s) =>
      s.fullName.toLowerCase().includes(lower)
    );
  }, [students, keyword]);

  const [editingStudent, setEditingStudent] = React.useState<Student | null>(
    null
  );
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [pendingDeleteId, setPendingDeleteId] = React.useState<number | null>(
    null
  );

  const handleSearch = (kw: string) => {
    dispatch({ type: SET_KEYWORD, payload: kw });
  };

  const handleSubmitStudent = (student: Student) => {
    if (editingStudent) {
      dispatch({ type: UPDATE_STUDENT, payload: student });
      setEditingStudent(null);
    } else {
      dispatch({ type: ADD_STUDENT, payload: student });
    }
  };

  const handleRequestEdit = (student: Student) => {
    setEditingStudent(student);
  };

  const handleRequestDelete = (id: number) => {
    setPendingDeleteId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (pendingDeleteId !== null) {
      dispatch({ type: DELETE_STUDENT, payload: pendingDeleteId });
      if (editingStudent && editingStudent.id === pendingDeleteId) {
        setEditingStudent(null);
      }
    }
    setConfirmOpen(false);
    setPendingDeleteId(null);
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
        onCancelEdit={() => setEditingStudent(null)}
      />

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn xóa{" "}
            <b>{students.find((s) => s.id === pendingDeleteId)?.fullName}</b> không?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Hủy</Button>
          <Button color="error" onClick={handleConfirmDelete}>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentManagement;
