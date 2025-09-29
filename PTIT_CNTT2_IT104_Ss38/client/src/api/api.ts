import type { Book } from "../components/types";

const BASE = "http://localhost:8080";

async function safeJson<T>(res: Response): Promise<T | null> {
  try {
    const data = (await res.json()) as T;
    return data;
  } catch {
    return null;
  }
}

export async function fetchBooks(): Promise<Book[]> {
  try {
    const res = await fetch(`${BASE}/books`);
    if (!res.ok) {
      console.error("fetchBooks failed, status =", res.status);
      return [];
    }
    const data = await safeJson<Book[]>(res);
    return data ?? [];
  } catch (err) {
    console.error("fetchBooks error:", err);
    return [];
  }
}

export async function createBook(book: Book): Promise<Book | null> {
  try {
    const res = await fetch(`${BASE}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!res.ok) {
      console.error("createBook failed, status =", res.status);
      return null;
    }
    return await safeJson<Book>(res);
  } catch (err) {
    console.error("createBook error:", err);
    return null;
  }
}

export async function updateBook(book: Book): Promise<Book | null> {
  try {
    const res = await fetch(`${BASE}/books/${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!res.ok) {
      console.error("updateBook failed, status =", res.status);
      return null;
    }
    return await safeJson<Book>(res);
  } catch (err) {
    console.error("updateBook error:", err);
    return null;
  }
}

export async function deleteBook(id: number): Promise<boolean> {
  try {
    const res = await fetch(`${BASE}/books/${id}`, { method: "DELETE" });
    if (!res.ok) {
      console.error("deleteBook failed, status =", res.status);
      return false;
    }
    return true;
  } catch (err) {
    console.error("deleteBook error:", err);
    return false;
  }
}
