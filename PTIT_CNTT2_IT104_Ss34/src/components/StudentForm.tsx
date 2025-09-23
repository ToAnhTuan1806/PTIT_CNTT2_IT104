import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import React from "react";
import type { Student } from "../utils/types";

interface StudentFormProps {
  onSubmit: (student: Student) => void;     
  existingStudents: Student[];            
  editingStudent: Student | null;         
  onCancelEdit: () => void;           
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

type FieldErrors = {
  id?: string;
  fullName?: string;
  age?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  address?: string;
};

const todayISO = (): string => {
  return new Date().toISOString().slice(0, 10);
};

const emptyForm: Student = {
  id: 0,
  fullName: "",
  age: 0,
  gender: true,
  dateOfBirth: "",
  placeOfBirth: "",
  address: "",
};

const StudentForm: React.FC<StudentFormProps> = ({
  onSubmit,
  existingStudents,
  editingStudent,
  onCancelEdit,
}) => {
  const [form, setForm] = React.useState<Student>(emptyForm);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  React.useEffect(() => {
    if (editingStudent) {
      setForm({
        ...editingStudent,
        id: editingStudent.id,
        age: editingStudent.age,
      });
    } else {
      setForm(emptyForm);
    }
    setErrors({});
  }, [editingStudent]);

  const handleChange = (e: FormChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    const { name } = target;
    let value: any = target.value;

    if (name === "gender") {
      value = value === "true";
    }

    setForm((prev) => {
      return { ...prev, [name]: value };
    });

    setErrors((prev) => {
      return { ...prev, [name]: undefined };
    });
  };

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {};


    if (form.id === undefined || form.id === null || form.id === ("" as any)) {
      nextErrors.id = "Mã sinh viên không được để trống";
    } else if (isNaN(Number(form.id))) {
      nextErrors.id = "Mã sinh viên phải là số";
    } else {
      const idNumber = Number(form.id);
      const duplicated = existingStudents.some((s) => {
        if (editingStudent) {
          return s.id !== editingStudent.id && s.id === idNumber;
        } else {
          return s.id === idNumber;
        }
      });
      if (duplicated) {
        nextErrors.id = "Mã sinh viên không được phép trùng";
      }
    }

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Tên sinh viên không được để trống";
    } else {
      const duplicated = existingStudents.some((s) => {
        const same = s.fullName.trim().toLowerCase() === form.fullName.trim().toLowerCase();
        if (editingStudent) {
          return s.id !== editingStudent.id && same;
        } else {
          return same;
        }
      });
      if (duplicated) {
        nextErrors.fullName = "Tên sinh viên không được phép trùng";
      }
    }

    if (form.age === undefined || form.age === null || form.age === ("" as any)) {
      nextErrors.age = "Tuổi không được để trống";
    } else if (isNaN(Number(form.age))) {
      nextErrors.age = "Tuổi phải là số";
    } else if (Number(form.age) < 0) {
      nextErrors.age = "Tuổi không được nhỏ hơn 0";
    }

    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth = "Ngày sinh không được để trống";
    } else if (form.dateOfBirth > todayISO()) {
      nextErrors.dateOfBirth = "Ngày sinh không được là ngày trong tương lai";
    }

    if (!form.placeOfBirth.trim()) {
      nextErrors.placeOfBirth = "Nơi sinh không được để trống";
    }

    if (!form.address.trim()) {
      nextErrors.address = "Địa chỉ không được để trống";
    }

    return nextErrors;
  };

  const handleSubmit = (): void => {
    const v = validate();
    setErrors(v);

    const hasError = Object.values(v).some((val) => {
      return Boolean(val);
    });

    if (hasError) {
      return;
    }

    const payload: Student = {
      ...form,
      id: Number(form.id),
      age: Number(form.age),
    };

    onSubmit(payload);

    if (editingStudent) {
      onCancelEdit();
    } else {
      setForm(emptyForm);
    }

    setErrors({});
  };

  const handleCancel = (): void => {
    onCancelEdit();
  };

  const isEditing = Boolean(editingStudent);

  return (
    <div id="student-form" className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        {isEditing ? "Cập nhật Sinh Viên" : "Thông Tin Sinh Viên"}
      </h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
          error={!!errors.id}
          helperText={errors.id}
        />
        <TextField
          label="Tên sinh viên"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          fullWidth
          error={!!errors.fullName}
          helperText={errors.fullName}
        />
        <TextField
          label="Tuổi"
          name="age"
          value={form.age}
          onChange={handleChange}
          fullWidth
          error={!!errors.age}
          helperText={errors.age}
        />
        <Select
          name="gender"
          value={String(form.gender)}
          onChange={handleChange}
          fullWidth
          displayEmpty
        >
          <MenuItem value="true">Nam</MenuItem>
          <MenuItem value="false">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="dateOfBirth"
          value={form.dateOfBirth}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth}
        />
        <TextField
          label="Nơi sinh"
          name="placeOfBirth"
          value={form.placeOfBirth}
          onChange={handleChange}
          fullWidth
          error={!!errors.placeOfBirth}
          helperText={errors.placeOfBirth}
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
          error={!!errors.address}
          helperText={errors.address}
        />

        <div className="flex gap-2">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {isEditing ? "Cập nhật" : "SUBMIT"}
          </Button>
          {isEditing && (
            <Button variant="outlined" onClick={handleCancel}>
              Hủy
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
