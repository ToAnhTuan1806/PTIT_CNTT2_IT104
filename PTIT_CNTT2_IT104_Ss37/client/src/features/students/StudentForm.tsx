import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import type { Student } from "./types";

type FormOut = Partial<Pick<Student, "id">> & Omit<Student, "id">;

interface Props {
  open: boolean;
  initial?: Partial<Student>; 
  onClose: () => void;
  onSubmit: (data: FormOut) => Promise<boolean> | boolean;
  isNameTaken: (name: string, excludeId?: string) => boolean; 
}

function StudentForm({ open, initial, onClose, onSubmit, isNameTaken }: Props) {
  const [name, setName] = useState(initial?.name ?? "");
  const [ageStr, setAgeStr] = useState(
    initial?.age !== undefined ? String(initial.age) : ""
  );
  const [grade, setGrade] = useState(initial?.grade ?? "");

  const [errName, setErrName] = useState<string | null>(null);
  const [errAge, setErrAge] = useState<string | null>(null);
  const [errGrade, setErrGrade] = useState<string | null>(null);

  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    setName(initial?.name ?? "");
    setAgeStr(initial?.age !== undefined ? String(initial.age) : "");
    setGrade(initial?.grade ?? "");
    setErrName(null);
    setErrAge(null);
    setErrGrade(null);
    setTimeout(() => nameRef.current?.focus(), 0);
  }, [open, initial?.id]);

  const validate = () => {
    let ok = true;

    const n = name.trim();
    const g = grade.trim();
    const ageNum = parseInt(ageStr, 10);

    if (!n) {
      setErrName("Name không được bỏ trống");
      ok = false;
    } else if (isNameTaken(n, initial?.id)) {
      setErrName("Tên sinh viên đã tồn tại");
      ok = false;
    } else {
      setErrName(null);
    }

    if (!ageStr) {
      setErrAge("Age không được bỏ trống");
      ok = false;
    } else if (!Number.isFinite(ageNum) || ageNum <= 0) {
      setErrAge("Age phải là số > 0");
      ok = false;
    } else {
      setErrAge(null);
    }

    if (!g) {
      setErrGrade("Grade không được bỏ trống");
      ok = false;
    } else {
      setErrGrade(null);
    }

    return ok
      ? ({ id: initial?.id, name: n, age: ageNum, grade: g } as FormOut)
      : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;

    const ok = await Promise.resolve(onSubmit(data));
    if (ok) {
      setName("");
      setAgeStr("");
      setGrade("");
      setTimeout(() => nameRef.current?.focus(), 0);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          {initial?.id ? "Edit Student" : "Add Student"}
        </DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label="Name"
            value={name}
            inputRef={nameRef}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            error={!!errName}
            helperText={errName ?? " "}
          />
          <TextField
            label="Age"
            type="number"
            value={ageStr}
            onChange={(e) => setAgeStr(e.target.value)}
            fullWidth
            inputProps={{ min: 1 }}
            error={!!errAge}
            helperText={errAge ?? " "}
          />
          <TextField
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            placeholder="e.g. 10A1"
            error={!!errGrade}
            helperText={errGrade ?? " "}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {initial?.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default StudentForm;
