import React, { useMemo, useState } from 'react';
import { Book } from './components/Book';
import Header from './components/Header';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';
import ConfirmDialog from './components/ConfirmDialog';

// Dữ liệu mẫu + danh mục thể loại
const initialBooks: Book[] = [
  { id: 1, title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', genre: 'Công nghệ', publishedYear: 2008, quantity: 20, available: 15, isbn: '978-0132350884', status: 'available' },
  { id: 2, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', genre: 'Tâm lý học', publishedYear: 1936, quantity: 20, available: 0, isbn: '978-6049225326', status: 'out_of_stock' },
  { id: 3, title: 'Tôi tài giỏi, bạn cũng thế', author: 'Adam Khoo', genre: 'Phát triển bản thân', publishedYear: 2005, quantity: 8, available: 8, isbn: '978-9814181447', status: 'available' },
  { id: 4, title: 'Nhà giả kim', author: 'Paulo Coelho', genre: 'Tiểu thuyết', publishedYear: 1988, quantity: 10, available: 10, isbn: '978-0061122415', status: 'available' },
];
const GENRES = ['Công nghệ', 'Phát triển bản thân', 'Tiểu thuyết', 'Tâm lý học'];

export default function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [query, setQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState<string>('Tất cả thể loại');

  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState<Book | null>(null);
  const [toDelete, setToDelete] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => {
      const matchQ = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      const matchG = genreFilter === 'Tất cả thể loại' || b.genre === genreFilter;
      return matchQ && matchG;
    });
  }, [books, query, genreFilter]);

  const totalBooks = books.length;
  const availableCount = books.filter((b) => b.status === 'available').length;
  const outOfStockCount = books.filter((b) => b.status === 'out_of_stock').length;

  const handleAdd = (book: Book) => {
    const nextId = Math.max(0, ...books.map((b) => b.id)) + 1;
    setBooks((prev) => [...prev, { ...book, id: nextId }]);
    setShowAdd(false);
  };

  const handleUpdate = (book: Book) => {
    setBooks((prev) => prev.map((b) => (b.id === book.id ? book : b)));
    setEditing(null);
  };

  const confirmDelete = () => {
    if (!toDelete) return;
    setBooks((prev) => prev.filter((b) => b.id !== toDelete.id));
    setToDelete(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-700 to-indigo-600">
      <div className="mx-auto w-full max-w-6xl px-5 py-8">
        <Header
          total={totalBooks}
          available={availableCount}
          outOfStock={outOfStockCount}
          query={query}
          onQueryChange={setQuery}
          genre={genreFilter}
          genres={GENRES}
          onGenreChange={setGenreFilter}
          onAdd={() => setShowAdd(true)}
        />

        <div className="mt-6">
          <BookList
            books={filteredBooks}
            onEdit={(b) => setEditing(b)}
            onDelete={(b) => setToDelete(b)}
          />
        </div>
      </div>

      {/* Modal thêm */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAdd(false)} />
          <div className="relative w-[560px] max-w-[92vw] rounded-2xl bg-white shadow-xl">
            <div className="rounded-t-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-4 text-white">
              Thêm sách mới
            </div>
            <div className="p-5">
              <BookForm genres={GENRES} onSubmit={handleAdd} onCancel={() => setShowAdd(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Modal sửa */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setEditing(null)} />
          <div className="relative w-[560px] max-w-[92vw] rounded-2xl bg-white shadow-xl">
            <div className="rounded-t-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-4 text-white">
              Chỉnh sửa thông tin sách
            </div>
            <div className="p-5">
              <EditBookForm initialBook={editing} genres={GENRES} onSubmit={handleUpdate} onCancel={() => setEditing(null)} />
            </div>
          </div>
        </div>
      )}

      {/* Confirm xóa */}
      {toDelete && (
        <ConfirmDialog
          message={`Bạn có chắc chắn muốn xóa sách này?\n“${toDelete.title}” – ${toDelete.author}`}
          onCancel={() => setToDelete(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
