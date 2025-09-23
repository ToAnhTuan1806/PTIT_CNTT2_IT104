import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import React from 'react';
import type { Student } from '../utils/types';

interface StudentListProps {
  students: Student[];
  onRequestDelete: (id: number) => void;
  onRequestEdit: (student: Student) => void
}
const renderGender = (g: boolean | string | undefined): string => {
  if (typeof g === "boolean") {
    return g ? "Nam" : "Nữ";
  }
  if (typeof g === "string") {
    const val = g.trim().toLowerCase();
    if (val === "nam" || val === "true" || val === "1") {
      return "Nam";
    } else if (val === "nữ" || val === "nu" || val === "false" || val === "0") {
      return "Nữ";
    } else {
      return g;
    }
  }
  return "";
};

const StudentList: React.FC<StudentListProps> = ({ students, onRequestDelete, onRequestEdit}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((s, i) => (
            <TableRow key={s.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.fullName}</TableCell>
              <TableCell>{s.age}</TableCell>
              <TableCell>{renderGender(s.gender as any)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="contained" color="error">
                    Xem
                  </Button>
                  <Button variant="contained" color="warning" onClick={()=> onRequestEdit(s)}>
                    Sửa
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => onRequestDelete(s.id)}
                  >
                    Xóa
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {students.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} align="center">
               <b> <i>Không có sinh viên nào được tìm thấy</i></b>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;