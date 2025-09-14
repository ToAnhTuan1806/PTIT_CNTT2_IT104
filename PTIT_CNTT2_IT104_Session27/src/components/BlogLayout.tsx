import { Link, Outlet } from "react-router-dom";
import "../pages/Ex5/style.css";

export default function BlogLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside className="sidebar">
        <h2 className="sidebar-title">My Blog</h2>
        <nav>
          <ul className="sidebar-menu">
            <li>
              <Link to="/blog/posts" className="sidebar-link">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="sidebar-footer">© 2025 My Blog</footer>
      </aside>

      <div style={{ flex: 1, padding: "20px", background: "#F9FAFB" }}>
        <Outlet />
      </div>
    </div>
  );
}
