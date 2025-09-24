import React from "react";
import { useAppDisPatch, useAppSelector } from "../hooks/useCustomeRedux";
import { toggleFavorite } from "../slice/userSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function UserList() {
  const dispatch = useAppDisPatch();
  const users = useAppSelector((s) => s.user.list);

  return (
    <div
      style={{
        maxWidth:250,
        margin: "40px",
        border: "1px solid #e5e7eb",
        borderRadius: 4,
        padding: 16,
      }}
    >
      <h3 style={{ marginBottom: 12 }}>List Favorites User</h3>

      {users.map((u) => (
        <div
          key={u.id}
          style={{
            borderBottom: "1px solid #e5e7eb",
            padding: "10px 0",
          }}
        >
          <div>UserName: {u.username}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            Favorites:
            <span
              onClick={() => dispatch(toggleFavorite(u.id))}
              style={{
                fontSize: 18,
                color: u.favorite ? "red" : "gray",
                cursor: "pointer",
              }}
            >
              {u.favorite ? <HeartFilled /> : <HeartOutlined />}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
