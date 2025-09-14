import React from 'react'
import { Link } from "react-router-dom";
import { posts } from "./postsData";

export default function Posts() {
  return (
    <div>
      <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "16px" }}>
      </h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            margin: "10px 0",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#fff"
          }}
        >
          <Link
            to={`/blog/posts/${post.id}`}
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#4F46E5",
              textDecoration: "none"
            }}
          >
            {post.title}
          </Link>
          <p style={{ color: "#4B5563", marginTop: "4px" }}>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
