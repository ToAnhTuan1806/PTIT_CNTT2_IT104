import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/reducers";
import { loginSuccess } from "../store/reducers/authReducer";

export default function Login() {
  const registered = useSelector((s: RootState) => s.auth.registered);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const prefilled = useRef(false);

  useEffect(() => {
    if (registered && !prefilled.current) {
      setEmail(registered.email);
      setPassword(registered.password);
      prefilled.current = true;
    }
  }, [registered]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginSuccess(email));
    alert(`Đăng nhập thành công với email: ${email}`);
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
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: 20 }}>Đăng nhập</h3>
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
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
