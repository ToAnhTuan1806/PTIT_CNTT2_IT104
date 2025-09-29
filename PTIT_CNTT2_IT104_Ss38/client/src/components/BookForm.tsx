import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import type { Book } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Book>;
  onClose: () => void;
  onSubmit: (data: {
    id?: number;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => void;
  existingTitles?: string[];
}

export default function BookForm({
  open,
  initial,
  onClose,
  onSubmit,
  existingTitles = [],
}: Props) {
  const seed = useMemo(
    () => ({
      title: initial?.title ?? "",
      author: initial?.author ?? "",
      year: initial?.year ?? 0,
      category: initial?.category ?? "",
    }),
    [open, initial?.id]
  );

  const [title, setTitle] = useState(seed.title);
  const [author, setAuthor] = useState(seed.author);
  const [year, setYear] = useState<number | "">(seed.year || "");
  const [category, setCategory] = useState<string>(seed.category);

  const [errors, setErrors] = useState({
    title: "",
    author: "",
    year: "",
    category: "",
  });

  useEffect(() => {
    setTitle(seed.title);
    setAuthor(seed.author);
    setYear(seed.year || "");
    setCategory(seed.category);
    setErrors({ title: "", author: "", year: "", category: "" });
  }, [seed]);

  const validate = () => {
    let ok = true;
    const e = { title: "", author: "", year: "", category: "" };

    const t = title.trim();
    if (!t) {
      e.title = "Title không được để trống";
      ok = false;
    } else if (
      initial?.id == null &&
      existingTitles
        .map((s) => s.trim().toLowerCase())
        .includes(t.toLowerCase())
    ) {
      e.title = "Title đã tồn tại";
      ok = false;
    }

    if (!author.trim()) {
      e.author = "Author không được để trống";
      ok = false;
    }

    const y = year === "" ? NaN : Number(year);
    if (!Number.isFinite(y) || y <= 0) {
      e.year = "Year không hợp lệ";
      ok = false;
    }

    if (!category.trim()) {
      e.category = "Category không được để trống";
      ok = false;
    }

    setErrors(e);
    return ok;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: initial?.id as number | undefined,
      title: title.trim(),
      author: author.trim(),
      year: Number(year),
      category: category.trim(), 
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit} noValidate>
        <DialogTitle>{initial?.id ? "Edit Book" : "Add Book"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
            fullWidth
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            error={!!errors.author}
            helperText={errors.author}
            fullWidth
          />
          <TextField
            label="Year"
            type="number"
            value={year}
            onChange={(e) =>
              setYear(e.target.value === "" ? "" : Number(e.target.value))
            }
            error={!!errors.year}
            helperText={errors.year}
            fullWidth
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={!!errors.category}
            helperText={errors.category}
            fullWidth
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
