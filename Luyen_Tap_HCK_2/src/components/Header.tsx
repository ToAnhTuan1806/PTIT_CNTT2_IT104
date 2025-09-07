import React from 'react';
import { BookOpen, CheckCircle2, XCircle, Plus, Search } from 'lucide-react';

interface Props {
  total: number;
  available: number;
  outOfStock: number;
  query: string;
  onQueryChange: (v: string) => void;
  genre: string;
  genres: string[];
  onGenreChange: (v: string) => void;
  onAdd: () => void;
}

function Card({ label, value, icon }: { label: string; value: number | string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 shadow-sm">
      <div className="p-2 rounded-lg bg-white/20">{icon}</div>
      <div>
        <div className="text-2xl font-semibold text-white leading-tight">{value}</div>
        <div className="text-sm text-white/80">{label}</div>
      </div>
    </div>
  );
}

export default function Header({
  total, available, outOfStock, query, onQueryChange, genre, genres, onGenreChange, onAdd,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 text-white">
        <BookOpen size={28} />
        <div>
          <h1 className="text-2xl font-bold">Quản Lý Thư Viện</h1>
          <p className="text-white/80 text-sm">Hệ thống quản lý sách hiện đại và thông minh</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card label="Tổng số sách" value={total} icon={<BookOpen />} />
        <Card label="Có sẵn" value={available} icon={<CheckCircle2 />} />
        <Card label="Hết hàng" value={outOfStock} icon={<XCircle />} />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Tìm kiếm tên sách hoặc tác giả..."
            className="w-full rounded-xl border border-white/20 bg-white/90 pl-10 pr-3 py-2 outline-none shadow-sm focus:ring-2 focus:ring-violet-300"
          />
        </div>

        <select
          value={genre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="rounded-xl border border-white/20 bg-white/90 px-3 py-2 outline-none shadow-sm focus:ring-2 focus:ring-violet-300"
        >
          <option>Tất cả thể loại</option>
          {genres.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>

        <button
          onClick={onAdd}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-4 py-2 font-medium text-white shadow hover:from-violet-700 hover:to-indigo-600"
        >
          <Plus size={18} /> Thêm sách mới
        </button>
      </div>
    </div>
  );
}
