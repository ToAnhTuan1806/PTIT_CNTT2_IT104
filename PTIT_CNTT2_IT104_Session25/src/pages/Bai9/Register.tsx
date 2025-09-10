import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      setError("Không được để trống dữ liệu!");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp!");
      return;
    }
    let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === form.email)) {
      setError("Email đã tồn tại!");
      return;
    }
    users.push({ email: form.email, password: form.password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    navigate("/login");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "650px"}}>
      <form onSubmit={handleSubmit} style={{ width: "350px", height: "400px",background: "#fff", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.08)",}}>
        <h2 style={{ textAlign: "center" }}>Create account</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div style={{ marginBottom: "15px" }}>
          <label>Your email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="name@company.com" 
          style={{ width: "93%", padding: "10px", marginTop: "5px", border: "1px solid #d1d5db", borderRadius: "6px", background: "#F1F2F4"}}/>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="........"
            style={{ width: "93%", padding: "10px", marginTop: "5px", border: "1px solid #d1d5db", borderRadius: "6px", background: "#F1F2F4"}}/>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Confirm password</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="........"
            style={{ width: "93%", padding: "10px", marginTop: "5px",  border: "1px solid #d1d5db", borderRadius: "6px", background: "#F1F2F4"}}/>
        </div>

        <button type="submit" style={{ width: "100%", padding: "10px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "5px",}}>
          Create an account
        </button>
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Already have an account? <Link to="/login" style={{color: "#6B7281", textDecoration:"none", fontWeight: "bold"}}>Login here</Link>
        </p>
      </form>
    </div>
  );
}
