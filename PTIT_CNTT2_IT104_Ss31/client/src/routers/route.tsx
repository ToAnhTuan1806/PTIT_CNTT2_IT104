import { createBrowserRouter, Navigate } from "react-router-dom";
import PostManager from "../pages/PostManager";

export const router = createBrowserRouter([
  // Điều hướng từ "/" sang "/list-post"
  { path: "/", element: <Navigate to="/list-post" replace /> },

  // Trang danh sách bài viết
  { path: "/list-post", element: <PostManager /> },

  // Bắt mọi path không khớp → chuyển về "/list-post"
  { path: "*", element: <Navigate to="/list-post" replace /> },
]);
