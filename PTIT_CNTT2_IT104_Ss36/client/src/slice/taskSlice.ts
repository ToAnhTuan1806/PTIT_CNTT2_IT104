import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, Priority } from "../api/api";
import { fetchTasks, createTask, updateTask, toggleTask, deleteTask } from "../api/api";

/** ===== State ===== */
type TasksState = {
  items: Task[];
  loading: boolean;
  error: string | null;
};

const initialState: TasksState = {
  items: [],
  loading: false,
  error: null,
};

export const getTasksThunk = createAsyncThunk("tasks/getAll", async () => {
  return await fetchTasks();
});

export const addTaskThunk = createAsyncThunk(
  "tasks/add",
  async ({ title, priority }: { title: string; priority: Priority }) => {
    return await createTask(title, priority);
  }
);

export const toggleTaskThunk = createAsyncThunk(
  "tasks/toggle",
  async ({ id, completed }: { id: number; completed: boolean }) => {
    return await toggleTask(id, completed);
  }
);

export const updateTaskThunk = createAsyncThunk(
  "tasks/update",
  async ({
    id,
    title,
    completed,
    priority,
  }: {
    id: number;
    title: string;
    completed: boolean;
    priority: Priority;
  }) => {
    return await updateTask(id, title, completed, priority);
  }
);

export const deleteTaskThunk = createAsyncThunk("tasks/delete", async (id: number) => {
  await deleteTask(id);
  return id;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // lay ds
    builder
      .addCase(getTasksThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTasksThunk.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getTasksThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Lỗi tải danh sách";
      });

    // them
    builder.addCase(addTaskThunk.fulfilled, (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
    });

    builder.addCase(toggleTaskThunk.fulfilled, (state, action: PayloadAction<Task>) => {
      const idx = state.items.findIndex((t) => t.id === action.payload.id);
      if (idx >= 0) state.items[idx] = action.payload;
    });

    // sua
    builder.addCase(updateTaskThunk.fulfilled, (state, action: PayloadAction<Task>) => {
      const idx = state.items.findIndex((t) => t.id === action.payload.id);
      if (idx >= 0) state.items[idx] = action.payload;
    });

    // xoa
    builder.addCase(deleteTaskThunk.fulfilled, (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    });
  },
});

export const { clearError } = tasksSlice.actions;
export default tasksSlice.reducer;

export const selectTasks = (state: { task: TasksState }) => state.task.items;
export const selectTasksLoading = (state: { task: TasksState }) => state.task.loading;
export const selectTasksError = (state: { task: TasksState }) => state.task.error;
