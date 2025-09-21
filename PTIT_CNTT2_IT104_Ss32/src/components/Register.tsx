import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../store/reducers/authReducer";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    dispatch(registerSuccess({ email, password }));
    navigate("/login")
  };

  return (
    <div
      style={{
        width: 320,
        margin: "40px auto",
        padding: "24px 20px",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        backgroundColor: "#fff",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: 20 }}>Đăng ký</h3>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 12 }}>
          <input
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "92%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              outline: "none",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            type="password"
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "92%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              outline: "none",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 12px",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 6,
          }}
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
