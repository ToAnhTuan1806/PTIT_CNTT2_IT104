import React, { useState } from 'react';
import { Book } from './Book';

interface Props {
  initialBook: Book;
  genres: string[];
  onSubmit: (book: Book) => void;
  onCancel: () => void;
}

export default function EditBookForm({ initialBook, genres, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<Book>({ ...initialBook });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = 'Vui lòng nhập tên sách';
    if (!form.author.trim()) e.author = 'Vui lòng nhập tác giả';
    if (!form.genre.trim()) e.genre = 'Chọn thể loại';
    if (!form.publishedYear || form.publishedYear < 1800 || form.publishedYear > new Date().getFullYear() + 1)
      e.publishedYear = 'Năm xuất bản không hợp lệ';
    if (form.quantity < 0) e.quantity = 'Số lượng phải ≥ 0';
    if (!/^[\d-]{10,17}$/.test(form.isbn)) e.isbn = 'ISBN chưa đúng định dạng';
    if (form.available < 0 || form.available > form.quantity) e.available = 'Có sẵn phải trong [0, số lượng]';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const available = form.status === 'available' ? Math.min(form.available, form.quantity) : 0;
    onSubmit({ ...form, available });
  };

  const set = (k: keyof Book, v: any) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4 text-lg font-semibold">Chỉnh sửa thông tin sách</h3>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">Tên sách *</label>
        <input
          value={form.title}
          onChange={(e) => set('title', e.target.value)}
          className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${errors.title ? 'border-red-400' : 'border-gray-300'}`}
        />
        {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
      </div>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">Tác giả *</label>
        <input
          value={form.author}
          onChange={(e) => set('author', e.target.value)}
          className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${errors.author ? 'border-red-400' : 'border-gray-300'}`}
        />
        {errors.author && <p className="mt-1 text-xs text-red-600">{errors.author}</p>}
      </div>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">Thể loại *</label>
        <select
          value={form.genre}
          onChange={(e) => set('genre', e.target.value)}
          className={`w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${errors.genre ? 'border-red-400' : 'border-gray-300'}`}
        >
          <option value="">Chọn thể loại</option>
          {genres.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
        {errors.genre && <p className="mt-1 text-xs text-red-600">{errors.genre}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">Năm xuất bản *</label>
          <input
            type="number"
            value={form.publishedYear}
            onChange={(e) => set('publishedYear', Number(e.target.value))}
            className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${errors.publishedYear ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.publishedYear && <p className="mt-1 text-xs text-red-600">{errors.publishedYear}</p>}
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">Số lượng *</label>
          <input
            type="number"
            value={form.quantity}
            onChange={(e) => set('quantity', Number(e.target.value))}
            className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${errors.quantity ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.quantity && <p className="mt-1 text-xs text-red-600">{errors.quantity}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">ISBN *</label>
          <input
            value={form.isbn}
            onChange={(e) => set('isbn', e.target.value)}
            className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${errors.isbn ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.isbn && <p className="mt-1 text-xs text-red-600">{errors.isbn}</p>}
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">Đang có sẵn</label>
          <input
            type="number"
            value={form.available}
            onChange={(e) => set('available', Number(e.target.value))}
            className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${errors.available ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.available && <p className="mt-1 text-xs text-red-600">{errors.available}</p>}
        </div>
      </div>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">Trạng thái *</label>
        <select
          value={form.status}
          onChange={(e) => set('status', e.target.value as Book['status'])}
          className="w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 border-gray-300"
        >
          <option value="available">Có sẵn</option>
          <option value="out_of_stock">Hết hàng</option>
          <option value="discontinued">Ngừng bán</option>
        </select>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Hủy</button>
        <button type="submit" className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white shadow hover:bg-violet-700">Cập nhật</button>
      </div>
    </form>
  );
}
