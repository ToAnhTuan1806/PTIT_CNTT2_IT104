import { useEffect, useState } from "react";
import type { Post, PostStatus } from "../types";
import MDEditor from "@uiw/react-md-editor";

type Props = {
  open: boolean;
  initial?: Post | null;
  onClose: () => void;
  onSubmit: (data: Post) => void;
};

const todayVN = () => {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

export default function PostFormModal({ open, initial, onClose, onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<PostStatus>("draft");

  useEffect(() => {
    if (initial) {
      setTitle(initial.title);
      setImage(initial.image);
      setContent(initial.content);
      setStatus(initial.status);
    } else {
      setTitle("");
      setImage("");
      setContent("");
      setStatus("draft");
    }
  }, [initial, open]);

  if (!open) return null;

  const data: Post = {
    id: initial?.id,
    title,
    image,
    content,
    status,
    date: initial?.date ?? todayVN(),
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl shadow-lg">
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h3 className="font-semibold">{initial ? "Sửa bài viết" : "Thêm bài viết"}</h3>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>

        <div className="p-4 space-y-3" data-color-mode="light">
          <div>
            <label className="block text-sm font-medium">Tiêu đề</label>
            <input
            placeholder="..."
              className="border w-full px-2 py-1 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Hình ảnh (URL)</label>
            <input
            placeholder="..."
              className="border w-full px-2 py-1 rounded"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Nội dung (Markdown)</label>
            <MDEditor value={content} onChange={(val) => setContent(val || "")} />
          </div>
          <div>
            <label className="block text-sm font-medium">Trạng thái</label>
            <select
              className="border w-full px-2 py-1 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value as PostStatus)}
            >
              <option value="draft">Nháp</option>
              <option value="published">Đã xuất bản</option>
              <option value="blocked">Chặn</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t px-4 py-2">
          <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>
            Hủy
          </button>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() => {
              onSubmit(data);
              onClose();
            }}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
