import FilterControls from './components/FilterControls';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import { useEffect, useState, useMemo } from 'react';
import { useAppDisPatch, useAppSelector } from './hooks/reducer';
import {
  getTasksThunk,
  addTaskThunk,
  toggleTaskThunk,
  updateTaskThunk,
  deleteTaskThunk,
  selectTasks,
  selectTasksLoading,
  selectTasksError,
  clearError,
} from './slice/taskSlice';
import {
  Backdrop,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Alert,
} from '@mui/material';
import type { Priority } from './api/api';

const App = () => {
  const dispatch = useAppDisPatch();
  const tasks = useAppSelector(selectTasks);
  const loading = useAppSelector(selectTasksLoading);
  const error = useAppSelector(selectTasksError);

  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
  });

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; title: string } | null>(null);
  const [editing, setEditing] = useState<{ id: number; title: string; priority: 'low'|'medium'|'high' } | null>(null);

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  const handleAdd = (title: string, priority: Priority) => {
    dispatch(addTaskThunk({ title, priority }));
  };

  const startEdit = (id: number) => {
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    setEditing({ id: t.id, title: t.title, priority: t.priority });
  };

  const handleUpdate = (id: number, title: string, priority: Priority) => {
    const current = tasks.find((t) => t.id === id);
    if (!current) return;
    dispatch(updateTaskThunk({ id, title, completed: current.completed, priority }));
    setEditing(null);
  };

  const cancelEdit = () => setEditing(null);

  const handleToggle = (id: number) => {
    const current = tasks.find((t) => t.id === id);
    if (!current) return;
    dispatch(toggleTaskThunk({ id, completed: !current.completed }));
  };

  const askDelete = (id: number, title: string) => {
    setDeleteTarget({ id, title });
    setConfirmOpen(true);
  };
  const cancelDelete = () => {
    setConfirmOpen(false);
    setDeleteTarget(null);
  };
  const confirmDelete = () => {
    if (!deleteTarget) return;
    dispatch(deleteTaskThunk(deleteTarget.id));
    setConfirmOpen(false);
    setDeleteTarget(null);
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchStatus =
        filters.status === 'all' ||
        (filters.status === 'completed' && t.completed) ||
        (filters.status === 'active' && !t.completed);

      const matchPriority =
        filters.priority === 'all' || t.priority === (filters.priority as any);

      const matchSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());

      return matchStatus && matchPriority && matchSearch;
    });
  }, [tasks, filters]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

      <TaskForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onCancelEdit={cancelEdit}
        existingTitles={tasks.map((t) => t.title)}
        editing={editing}
      />

      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />

      {!!error && (
        <div className="mb-3">
          <Alert severity="error" onClose={() => dispatch(clearError())}>
            {error}
          </Alert>
        </div>
      )}

      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={handleToggle}
            onRequestDelete={askDelete}
            onRequestEdit={startEdit}
          />
        ))}
      </div>

      <Dialog open={confirmOpen} onClose={cancelDelete}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn xoá công việc{' '}
            <strong>&lt;{deleteTarget?.title}&gt;</strong> không?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>Hủy</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>

      <Backdrop
        open={loading}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
};

export default App;
