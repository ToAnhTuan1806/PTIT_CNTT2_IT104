import type { Post } from "../types";

type Props = {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
  onBlockToggle: (post: Post) => void;
};

export default function PostTable({ posts, onEdit, onDelete, onBlockToggle }: Props) {
  return (
    <table className="w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-2 py-1">STT</th>
          <th className="border px-2 py-1">Tiêu đề</th>
          <th className="border px-2 py-1">Hình ảnh</th>
          <th className="border px-2 py-1">Ngày viết</th>
          <th className="border px-2 py-1">Trạng thái</th>
          <th className="border px-2 py-1">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((p, idx) => (
          <tr key={p.id} className="hover:bg-gray-50">
            <td className="border px-2 py-1 text-center">{idx + 1}</td>
            <td className="border px-2 py-1">{p.title}</td>
            <td className="border px-2 py-1 text-center">
              <img src={p.image} alt={p.title} className="w-12 h-12 object-cover mx-auto" />
            </td>
            <td className="border px-2 py-1 text-center">{p.date}</td>
            <td className="border px-2 py-1 text-center">{p.status}</td>
            <td className="border px-2 py-1 space-x-2 text-center">
              <button
                className="px-2 py-1 bg-yellow-400 text-white rounded"
                onClick={() => onBlockToggle(p)}
              >
                {p.status === "blocked" ? "Bỏ chặn" : "Chặn"}
              </button>
              <button
                className="px-2 py-1 bg-gray-300 rounded"
                onClick={() => onEdit(p)}
              >
                Sửa
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => onDelete(p)}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
