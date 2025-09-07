import React, { useState } from 'react';
import { Book } from './Book';

interface Props {
  genres: string[];
  onSubmit: (book: Book) => void;
  onCancel: () => void;
}

export default function BookForm({ genres, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<Book>({
    id: Date.now(),
    title: '',
    author: '',
    genre: '',
    publishedYear: new Date().getFullYear(),
    quantity: 0,
    available: 0,
    isbn: '',
    status: 'available',
  });
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

  const input = (label: string, name: keyof Book, props?: React.InputHTMLAttributes<HTMLInputElement>, errorKey?: string) => (
    <div className="mb-3">
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...props}
        value={form[name] as any}
        onChange={(e) => setForm((f) => ({ ...f, [name]: props?.type === 'number' ? Number(e.target.value) : e.target.value }))}
        className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${
          errorKey ? 'border-red-400' : 'border-gray-300'
        }`}
      />
      {errorKey && <p className="mt-1 text-xs text-red-600">{errors[errorKey]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-4 text-lg font-semibold">Thêm sách mới</h3>

      {input('Tên sách *', 'title', { placeholder: 'Nhập tên sách' }, errors.title && 'title')}
      {input('Tác giả *', 'author', { placeholder: 'Nhập tác giả' }, errors.author && 'author')}

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">Thể loại *</label>
        <select
          value={form.genre}
          onChange={(e) => setForm((f) => ({ ...f, genre: e.target.value }))}
          className={`w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 ${
            errors.genre ? 'border-red-400' : 'border-gray-300'
          }`}
        >
          <option value="">Chọn thể loại</option>
          {genres.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
        {errors.genre && <p className="mt-1 text-xs text-red-600">{errors.genre}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {input('Năm xuất bản *', 'publishedYear', { type: 'number', placeholder: '2008' }, errors.publishedYear && 'publishedYear')}
        {input('Số lượng *', 'quantity', { type: 'number', placeholder: '10' }, errors.quantity && 'quantity')}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {input('ISBN *', 'isbn', { placeholder: '978-0132350884' }, errors.isbn && 'isbn')}
        {input('Đang có sẵn', 'available', { type: 'number', placeholder: '0' }, errors.available && 'available')}
      </div>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">Trạng thái *</label>
        <select
          value={form.status}
          onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as Book['status'] }))}
          className="w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400 border-gray-300"
        >
          <option value="available">Có sẵn</option>
          <option value="out_of_stock">Hết hàng</option>
          <option value="discontinued">Ngừng bán</option>
        </select>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Hủy</button>
        <button type="submit" className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white shadow hover:bg-violet-700">Thêm</button>
      </div>
    </form>
  );
}
