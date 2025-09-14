import React from 'react'
import { useParams } from "react-router-dom";
import { posts } from "./postsData";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2 style={{ color: "red" }}>Bài viết không tồn tại</h2>;
  }

  return (
    <div>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>
        {post.title}
      </h2>
      <p style={{ color: "#374151", lineHeight: "1.6" }}>{post.content}</p>
    </div>
  );
}
