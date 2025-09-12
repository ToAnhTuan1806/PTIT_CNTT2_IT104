import { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: IProduct[] = [
  { id: 1, name: "iPhone 15 Pro", price: 29990000, description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến." },
  { id: 2, name: "Samsung Galaxy S23 Ultra", price: 26990000, description: "Smartphone flagship của Samsung với camera 200MP." },
  { id: 3, name: "MacBook Air M2", price: 28990000, description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ." },
  { id: 4, name: "Dell XPS 13", price: 25990000, description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét." },
  { id: 5, name: "iPad Pro 12.9", price: 31990000, description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR." },
];

export default function ProductList4() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [keyword, setKeyword] = useState(query);

  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchParams({ search: keyword.trim() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "32px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
        Danh sách sản phẩm
      </h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm..."
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #ccc",
            marginRight: 8,
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            border: "none",
            background: "#1976d2",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      {/* Danh sách sản phẩm tĩnh (chưa lọc) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              flex: "1 1 220px",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: 12,
              background: "#fff",
            }}
          >
            <h3 style={{ margin: "8px 0 4px", fontSize: 16 }}>{p.name}</h3>
            <p style={{ margin: 0, color: "#374151" }}>
              Giá: {p.price.toLocaleString("vi-VN")} VND
            </p>
            <p style={{ margin: "8px 0", fontSize: 14, color: "#6b7280" }}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
