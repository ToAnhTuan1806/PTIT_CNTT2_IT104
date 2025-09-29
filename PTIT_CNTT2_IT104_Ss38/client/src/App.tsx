import React, { useEffect, useMemo, useState } from "react";
import type { Book } from "./components/types";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookSearchSortFilter from "./components/BookSearchSortFilter";
import { Button, Backdrop, CircularProgress } from "@mui/material";

import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { setAll, add, update, remove } from "./slice/BooksSlice";
import {
  fetchBooks as apiFetch,
  createBook as apiCreate,
  updateBook as apiUpdate,
  deleteBook as apiDelete,
} from "./api/api";

export default function App() {
  const dispatch = useAppDispatch();
  const books = useAppSelector((s) => s.books);

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Book> | undefined>();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | string>("all");
  const [sortBy, setSortBy] = useState<"title" | "year">("title");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const [loading, setLoading] = useState(false);

  const onEdit = (b: Book) => {
    setEditing(b);
    setOpenForm(true);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const list = await apiFetch();
      dispatch(setAll(list));
      setLoading(false);
    })();
  }, [dispatch]);

  const categories = useMemo(
    () =>
      Array.from(new Set(books.map((b) => b.category))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [books]
  );

  const handleSubmit = async (data: {
    id?: number;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => {
    setLoading(true);
    if (data.id != null) {
      const updated = await apiUpdate({
        id: data.id,
        title: data.title,
        author: data.author,
        year: data.year,
        category: data.category,
      });
      if (updated) {
        dispatch(update(updated));
        setOpenForm(false);
      }
    } else {
      const created = await apiCreate({
        id: 0,
        title: data.title,
        author: data.author,
        year: data.year,
        category: data.category,
      });
      if (created) {
        dispatch(add(created));
        setOpenForm(false);
      }
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    const ok = window.confirm("Bạn có chắc chắn muốn xoá sách này không?");
    if (!ok) return;

    setLoading(true);
    const success = await apiDelete(id);
    if (success) dispatch(remove(id));
    setLoading(false);
  };

  const filteredSorted = useMemo(() => {
    let out = books.slice();
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
      );
    }
    if (category !== "all") out = out.filter((b) => b.category === category);

    out.sort((a, b) => {
      if (sortBy === "title") {
        const r = a.title.localeCompare(b.title);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === "asc" ? r : -r;
      }
    });
    return out;
  }, [books, search, category, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined);
          setOpenForm(true);
        }}
      >
        Add Book
      </Button>

      <div className="mt-4">
        <BookSearchSortFilter
          search={search}
          category={category}
          sortBy={sortBy}
          sortDir={sortDir}
          categories={categories.map(String)}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={(by, dir) => {
            setSortBy(by);
            setSortDir(dir);
          }}
          onClear={() => {
            setSearch("");
            setCategory("all");
            setSortBy("title");
            setSortDir("asc");
          }}
        />
      </div>

      <div className="mt-6">
        <BookList
          books={filteredSorted}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      </div>

      <BookForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        existingTitles={books
          .filter((b) => b.id !== (editing?.id ?? -1))
          .map((b) => b.title)}
      />

      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (t) => t.zIndex.drawer + 1,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
