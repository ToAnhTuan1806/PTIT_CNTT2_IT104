import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { API_BASE_URL } from "../api/index";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../style.css";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean; 
  content: string;
}

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const todayStr = useMemo(() => new Date().toLocaleDateString("vi-VN"), []);

  const [formPost, setFormPost] = useState({
    title: "",
    image: "",
    date: todayStr,
    status: false,
    content: "",
  });

  const onChangeContent = (val?: string) => {
    setFormPost((prev) => ({ ...prev, content: val ?? "" }));
  };

  const [showBlock, setShowBlock] = useState(false);
  const [targetPost, setTargetPost] = useState<Post | null>(null);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  async function getAllPost() {
    try {
      const res = await axios.get(API_BASE_URL);
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getAllPost();
  }, []);

    const deletePost = async (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const openCreate = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormPost({
      title: "",
      image: "",
      date: todayStr,
      status: false,
      content: "",
    });
    setShowForm(true);
  };

  const addPost = async () => {
    if (!formPost.title.trim() || !formPost.content.trim()) {
      setAlertMsg("Tên bài viết và nội dung không được để trống");
      setShowAlert(true);
      return;
    }
    const dup = posts.some(
      (p) =>
        p.title.trim().toLowerCase() === formPost.title.trim().toLowerCase()
    );
    if (dup) {
      setAlertMsg("Tên bài viết không được phép trùng");
      setShowAlert(true);
      return;
    }
    try {
      await axios.post(API_BASE_URL, formPost);
      await getAllPost();
      setShowForm(false);
    } catch (e) {
      console.log(e);
    }
  };

  const openEdit = (post: Post) => {
    setIsEditing(true);
    setEditingId(post.id);
    setFormPost({
      title: post.title,
      image: post.image,
      date: post.date,
      status: post.status,
      content: post.content,
    });
    setShowForm(true);
  };

  const updatePost = async () => {
    if (editingId == null) return;

    if (!formPost.title.trim() || !formPost.content.trim()) {
      setAlertMsg("Tên bài viết và nội dung không được để trống");
      setShowAlert(true);
      return;
    }
    const dup = posts.some(
      (p) =>
        p.id !== editingId &&
        p.title.trim().toLowerCase() === formPost.title.trim().toLowerCase()
    );
    if (dup) {
      setAlertMsg("Tên bài viết không được phép trùng");
      setShowAlert(true);
      return;
    }

    try {
      await axios.patch(`${API_BASE_URL}/${editingId}`, {
        title: formPost.title,
        image: formPost.image,
        content: formPost.content,
      });
      await getAllPost();
      setShowForm(false);
      setIsEditing(false);
      setEditingId(null);
    } catch (e) {
      console.log(e);
    }
  };

  const openBlockModal = (post: Post) => {
    setTargetPost(post);
    setShowBlock(true);
  };

  const confirmBlock = async () => {
    if (!targetPost) return;
    try {
      const newStatus = !targetPost.status;
      await axios.patch(`${API_BASE_URL}/${targetPost.id}`, {
        status: newStatus,
      });
      setPosts((prev) =>
        prev.map((p) =>
          p.id === targetPost.id ? { ...p, status: newStatus } : p
        )
      );
      setShowBlock(false);
      setTargetPost(null);
    } catch (e) {
      console.log(e);
    }
  };

    const searchPosts = async (term: string) => {
    try {
      setSearching(true);
      const res = await axios.get(API_BASE_URL);
      const data = res.data as Post[];
      const t = term.trim().toLowerCase();
      const filtered = t
        ? data.filter((p) => p.title?.toLowerCase().includes(t))
        : data;

      setPosts(filtered);
    } catch (e) {
      console.log(e);
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => searchPosts(searchTerm), 400);
    return () => clearTimeout(t);
  }, [searchTerm]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormPost({ ...formPost, [name]: value });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-3">
        <input
          className="w-[220px] px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập từ khóa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          aria-label="Lọc bài viết"
          className="w-[160px] px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue=""
          onChange={() => {
          }}
        >
          <option value="">Lọc bài viết</option>
          <option value="published">Đã xuất bản</option>
          <option value="unpublished">Chưa xuất bản</option>
        </select>
        <button
          className="ml-auto px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          onClick={openCreate}
        >
          Thêm mới bài viết
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-3 py-2 text-left border border-gray-200 w-[60px]">
                  STT
                </th>
                <th className="px-3 py-2 text-left border border-gray-200 min-w-[260px] w-[30%]">
                  Tiêu đề
                </th>
                <th className="px-3 py-2 text-left border border-gray-200 w-[120px]">
                  Hình ảnh
                </th>
                <th className="px-3 py-2 text-left border border-gray-200 w-[120px]">
                  Ngày viết
                </th>
                <th className="px-3 py-2 text-left border border-gray-200 w-[150px]">
                  Trạng thái
                </th>
                <th className="px-3 py-2 text-left border border-gray-200 w-[220px]">
                  Chức năng
                </th>
              </tr>
            </thead>

            <tbody>
              {searching ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-3 py-6 text-center text-gray-500 border border-gray-200 bg-white"
                  >
                    Đang tìm kiếm…
                  </td>
                </tr>
              ) : searchTerm.trim() && posts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-3 py-6 text-center border border-gray-200 bg-white"
                  >
                    Không có kết quả tìm kiếm
                  </td>
                </tr>
              ) : (
                posts.map((post, index) => (
                  <tr key={post.id ?? index} className="bg-white">
                    <td className="px-3 py-2 border border-gray-200 w-[60px]">
                      {index + 1}
                    </td>

                    <td className="px-3 py-2 border border-gray-200 font-medium truncate min-w-[260px] max-w-[420px]">
                      {post.title}
                    </td>

                    <td className="px-3 py-2 border border-gray-200 text-center w-[120px]">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-11 h-11 rounded-full object-cover inline-block border"
                        />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>

                    <td className="px-3 py-2 border border-gray-200 w-[120px]">
                      {post.date}
                    </td>

                    <td className="px-3 py-2 border border-gray-200 w-[150px]">
                      {post.status ? (
                        <span className="inline-flex items-center px-2 py-1 rounded border text-green-700 bg-green-50 border-green-200">
                          Đã xuất bản
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded border text-amber-700 bg-amber-50 border-amber-200">
                          Ngừng xuất bản
                        </span>
                      )}
                    </td>

                    <td className="px-3 py-2 border border-gray-200 w-[220px]">
                      <div className="flex justify-between w-[220px]">
                        <button
                          type="button"
                          className="px-3 py-1 rounded border bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100"
                          onClick={() => openBlockModal(post)}
                        >
                          {post.status ? "Chặn" : "Bỏ chặn"}
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1 rounded border bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                          onClick={() => openEdit(post)}
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="px-3 py-1 rounded border bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100"
                          onClick={() => deletePost(post.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="w-full max-w-lg rounded-xl bg-white shadow p-4"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <h3 className="text-lg font-semibold">
                {isEditing ? "Cập nhật bài viết" : "Thêm mới bài viết"}
              </h3>
              <button
                type="button"
                className="w-8 h-8 rounded hover:bg-gray-100"
                onClick={() => setShowForm(false)}
                aria-label="Đóng"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tên bài viết
                </label>
                <input
                  placeholder="..."
                  type="text"
                  name="title"
                  value={formPost.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ảnh bài viết (URL)
                </label>
                <input 
                  placeholder="..."
                  type="text"
                  name="image"
                  value={formPost.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nội dung
                </label>
                <div data-color-mode="light">
                  <MDEditor
                    value={formPost.content}
                    onChange={onChangeContent}
                    height={260}
                    preview="live"
                    visiableDragbar={false}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-end gap-2">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
                      onClick={() => setShowForm(false)}
                    >
                      Hủy
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                      onClick={updatePost}
                    >
                      Cập nhật
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
                      onClick={() => {
                        if (
                          confirm(
                            "Bạn có chắc chắn muốn xóa hết dữ liệu trong form?"
                          )
                        ) {
                          setFormPost({
                            title: "",
                            image: "",
                            date: todayStr,
                            status: false,
                            content: "",
                          });
                        }
                      }}
                    >
                      Làm mới
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                      onClick={addPost}
                    >
                      Xuất bản
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showBlock && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowBlock(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white shadow p-4"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <h3 className="text-lg font-semibold">Xác nhận</h3>
              <button
                type="button"
                className="w-8 h-8 rounded hover:bg-gray-100"
                onClick={() => setShowBlock(false)}
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              {targetPost?.status
                ? "Bạn có chắc chắn muốn ngừng xuất bản bài viết?"
                : "Bạn có chắc chắn muốn bỏ chặn và xuất bản bài viết?"}
            </div>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
                onClick={() => setShowBlock(false)}
              >
                Hủy
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                onClick={confirmBlock}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {showAlert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowAlert(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white shadow p-4"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <h3 className="text-lg font-semibold">Cảnh báo</h3>
              <button
                type="button"
                className="w-8 h-8 rounded hover:bg-gray-100"
                onClick={() => setShowAlert(false)}
              >
                ✕
              </button>
            </div>
            <div className="mt-4">{alertMsg}</div>
            <div className="mt-5 flex items-center justify-end">
              <button
                type="button"
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
                onClick={() => setShowAlert(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
