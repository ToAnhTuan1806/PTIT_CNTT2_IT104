import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

type Prio = 'low' | 'medium' | 'high';

interface EditingInfo {
  id: number;           
  title: string;
  priority: Prio;
}

interface TaskFormProps {
  onAdd: (title: string, priority: Prio) => void;
  onUpdate: (id: number, title: string, priority: Prio) => void; 
  onCancelEdit: () => void;
  existingTitles: string[];
  editing?: EditingInfo | null;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onAdd,
  onUpdate,
  onCancelEdit,
  existingTitles,
  editing,
}) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'' | Prio>('');
  const [titleError, setTitleError] = useState('');
  const [priorityError, setPriorityError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setPriority(editing.priority);
      setTitleError('');
      setPriorityError('');
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setTitle('');
      setPriority('');
    }
  }, [editing]);

  const validate = (name: string) => {
    let ok = true;
    setTitleError('');
    setPriorityError('');

    if (!name) {
      setTitleError('Công việc không được bỏ trống');
      ok = false;
    }

    const normalized = name.toLowerCase();
    const duplicated = existingTitles
      .filter((t) => (editing ? t.toLowerCase() !== editing.title.toLowerCase() : true))
      .some((t) => t.trim().toLowerCase() === normalized);
    if (duplicated) {
      setTitleError('Tên công việc đã tồn tại');
      ok = false;
    }

    if (!priority) {
      setPriorityError('Vui lòng chọn độ ưu tiên');
      ok = false;
    }

    if (!ok) inputRef.current?.focus();
    return ok;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = title.trim().replace(/\s+/g, ' ');
    if (!validate(name)) return;

    if (editing) {
      onUpdate(editing.id, name, priority as Prio);
      setTitle('');
      setPriority('');
      inputRef.current?.focus();
    } else {
      onAdd(name, priority as Prio);
      setTitle('');
      setPriority('');
      inputRef.current?.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        inputRef={inputRef}
        label={editing ? 'Cập nhật công việc' : 'Công việc mới'}
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
        error={!!titleError}
        helperText={titleError || ' '}
      />

      <FormControl size="small" className="w-36" error={!!priorityError}>
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as '' | Prio)}
          label="Ưu tiên"
        >
          <MenuItem value="">
            <em>— Chọn —</em>
          </MenuItem>
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
        <FormHelperText>{priorityError || ' '}</FormHelperText>
      </FormControl>

      {editing ? (
        <>
          <Button type="submit" variant="contained" color="primary">
            Cập nhật
          </Button>
          <Button type="button" variant="outlined" onClick={onCancelEdit}>
            Hủy
          </Button>
        </>
      ) : (
        <Button type="submit" variant="contained" color="primary">
          Thêm
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
