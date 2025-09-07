import React from 'react';
import { X, Trash2 } from 'lucide-react';

interface Props {
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ title = 'Xác nhận xóa', message, onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative w-[420px] max-w-[92vw] rounded-2xl bg-white shadow-xl">
        <div className="rounded-t-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-4 text-white flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onCancel} className="rounded p-1 hover:bg-white/20"><X size={18} /></button>
        </div>
        <div className="p-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
            <Trash2 />
          </div>
          <p className="mb-6 text-gray-700">{message}</p>
          <div className="flex justify-center gap-3">
            <button onClick={onCancel} className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Hủy</button>
            <button onClick={onConfirm} className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white shadow hover:bg-red-600">Xóa</button>
          </div>
        </div>
      </div>
    </div>
  );
}
