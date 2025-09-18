import { useEffect, useState } from "react";
import type { Post } from "../types";
import PostTable from "../components/PostTable";
import {http} from "../api/http";

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const fetchData = async (q?: string) => {
    setLoading(true);
    try {
      const res = await http.get<Post[]>("/posts", { params: q ? { q } : {} });
      setPosts(res.data);
    } catch (err) {
      console.error("Lỗi:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDelete = async (p: Post) => {
    if (p.id && confirm(`Xóa bài viết "${p.title}"?`)) {
      await http.delete(`/posts/${p.id}`);
      await fetchData(query);
    }
  };

  const onBlockToggle = async (p: Post) => {
    if (!p.id) return;
    const next = p.status === "blocked" ? "draft" : "blocked";
    await http.patch(`/posts/${p.id}`, { status: next });
    await fetchData(query);
  };

  const onEdit = (p: Post) => {
    alert("Chưa làm, demo thôi: " + p.title);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Danh sách bài viết</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 flex-1"
          placeholder="Nhập từ khóa"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchData(query)}
        />
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded"
          onClick={() => fetchData(query)}
        >
          Lọc
        </button>
      </div>

      {loading ? (
        <p className="text-center">Đang tải...</p>
      ) : (
        <PostTable posts={posts} onEdit={onEdit} onDelete={onDelete} onBlockToggle={onBlockToggle} />
      )}
    </div>
  );
}
