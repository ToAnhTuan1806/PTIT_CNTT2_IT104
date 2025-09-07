import React from 'react';
import { Book } from './Book';
import { Pencil, Trash2, CheckCircle2, XCircle, BookOpen } from 'lucide-react';

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
}

const statusText: Record<Book['status'], string> = {
  available: 'Có sẵn',
  out_of_stock: 'Hết hàng',
  discontinued: 'Ngừng bán',
};

const statusBadge: Record<Book['status'], string> = {
  available: 'bg-green-100 text-green-700 border-green-300',
  out_of_stock: 'bg-red-100 text-red-700 border-red-300',
  discontinued: 'bg-gray-100 text-gray-700 border-gray-300',
};

function StatusPill({ status }: { status: Book['status'] }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${statusBadge[status]}`}>
      {status === 'available' && <CheckCircle2 size={14} />}
      {status === 'out_of_stock' && <XCircle size={14} />}
      {status === 'discontinued' && <BookOpen size={14} />}
      {statusText[status]}
    </span>
  );
}

export default function BookList({ books, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-gradient-to-r from-violet-50 to-indigo-50 text-sm text-slate-700">
            {['ID', 'TÊN SÁCH', 'TÁC GIẢ', 'THỂ LOẠI', 'NĂM XB', 'SỐ LƯỢNG', 'TRẠNG THÁI', 'THAO TÁC'].map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id} className="border-t hover:bg-slate-50">
              <td className="px-4 py-3 text-slate-700">{b.id}</td>
              <td className="px-4 py-3 text-slate-900">{b.title}</td>
              <td className="px-4 py-3">{b.author}</td>
              <td className="px-4 py-3">{b.genre}</td>
              <td className="px-4 py-3">{b.publishedYear}</td>
              <td className="px-4 py-3">{b.quantity}</td>
              <td className="px-4 py-3"><StatusPill status={b.status} /></td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(b)}
                    className="rounded-lg bg-blue-500/90 px-3 py-1.5 text-white shadow hover:bg-blue-600"
                  >
                    <span className="inline-flex items-center gap-1 text-sm"><Pencil size={16}/> Sửa</span>
                  </button>
                  <button
                    onClick={() => onDelete(b)}
                    className="rounded-lg bg-red-500/90 px-3 py-1.5 text-white shadow hover:bg-red-600"
                  >
                    <span className="inline-flex items-center gap-1 text-sm"><Trash2 size={16}/> Xóa</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {books.length === 0 && (
            <tr>
              <td colSpan={8} className="px-4 py-6 text-center text-slate-500">Không có sách nào.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
