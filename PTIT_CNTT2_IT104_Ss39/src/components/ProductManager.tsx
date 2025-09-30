import axios from "axios";
import React, { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function ProductManager() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  const [products, setProducts] = useState<Product[]>([
    {
      id: crypto.randomUUID(),
      name: "Quần đùi",
      price: 5000,
      description: "Mô tả quần đùi",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.RYRHFgr0NGBnOBdb14ovRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ]);

  const [errors, setErrors] = useState<{
    name?: string;
    price?: string;
    imageUrl?: string;
  }>({});

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files?.[0];
    if (fileObj) {
      setFile(fileObj);
      setPreview(URL.createObjectURL(fileObj));
      setImageUrl("");
      if (errors.imageUrl) setErrors((er) => ({ ...er, imageUrl: undefined }));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setErrors((er) => ({ ...er, imageUrl: "'imageUrl' is required" }));
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upLoadData");
    formData.append("cloud_name", "drnolvz6g");

    try {
      setIsUploading(true);
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/drnolvz6g/image/upload",
        formData
      );
      setImageUrl(res.data.secure_url);
      setErrors((er) => ({ ...er, imageUrl: undefined }));
    } catch (e) {
      alert("Upload thất bại");
      console.error(e);
    } finally {
      setIsUploading(false);
    }
  };

const validate = () => {
  const newErrors: { name?: string; price?: string; imageUrl?: string } = {};
  if (name.trim() === "") {
    newErrors.name = "'name' is required";
  }
  if (!price) {
    newErrors.price = "'price' is required";
  } else if (Number(price) <= 0) {
    newErrors.price = "'price' must be > 0";
  }
  if (!imageUrl) {
    newErrors.imageUrl = "'imageUrl' is required";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const addProduct = () => {
    if (!validate()) return;

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name: name.trim(),
      price: Number(price),
      description: description.trim(),
      imageUrl,
    };
    setProducts((prev) => [...prev, newProduct]);
    setName("");
    setPrice("");
    setDescription("");
    setFile(null);
    setPreview(null);
    setImageUrl("");
    setErrors({});
  };

  const removeProduct = (id: string) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  const borderFor = (hasErr: boolean) =>
    hasErr ? "1px solid #ef4444" : "1px solid #ccc";

  return (
    <div
      style={{ maxWidth: 980, margin: "20px auto", fontFamily: "system-ui" }}
    >
      <h2 style={{ fontSize: 28, marginBottom: 12 }}>Quản lý sản phẩm</h2>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 16,
          marginBottom: 24,
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,.04)",
        }}
      >
        <label style={{ display: "block", marginBottom: 6 }}>
          <span style={{ color: "#ef4444" }}>*</span> Tên sản phẩm
        </label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
          }}
          placeholder="Nhập tên sản phẩm"
          style={{
            width: "100%",
            padding: "8px",
            border: borderFor(!!errors.name),
            borderRadius: 6,
            marginBottom: 6,
            outline: "none",
          }}
        />
        {errors.name && (
          <div style={{ color: "#ef4444", fontSize: 12, marginBottom: 8 }}>
            {errors.name}
          </div>
        )}

        <label style={{ display: "block", marginBottom: 6 }}>
          <span style={{ color: "#ef4444" }}>*</span> Giá
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            if (errors.price) setErrors((er) => ({ ...er, price: undefined }));
          }}
          placeholder="Nhập giá sản phẩm"
          style={{
            width: "100%",
            padding: "8px",
            border: borderFor(!!errors.price),
            borderRadius: 6,
            marginBottom: 6,
            outline: "none",
          }}
        />
        {errors.price && (
          <div style={{ color: "#ef4444", fontSize: 12, marginBottom: 8 }}>
            {errors.price}
          </div>
        )}

        <label style={{ display: "block", marginBottom: 6 }}>Mô tả</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Nhập mô tả sản phẩm"
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: 6,
            marginBottom: 12,
            minHeight: 60,
            outline: "none",
            background: "#fafafa",
          }}
        />

        <label style={{ display: "block", marginBottom: 6 }}>
          <span style={{ color: "#ef4444" }}>*</span> Ảnh sản phẩm
        </label>
        <div style={{ marginBottom: 8 }}>
          <input type="file" onChange={handleChangeFile} />
          <button
            onClick={handleUpload}
            disabled={!file || isUploading}
            style={{
              marginLeft: 8,
              padding: "6px 12px",
              border: "none",
              borderRadius: 6,
              background: "#4f8dff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {isUploading ? "Đang upload..." : "Upload"}
          </button>
        </div>
        {errors.imageUrl && (
          <div style={{ color: "#ef4444", fontSize: 12, marginBottom: 8 }}>
            {errors.imageUrl}
          </div>
        )}

        {preview && !imageUrl && (
          <img
            src={preview}
            alt="preview"
            width={120}
            style={{ marginBottom: 12, borderRadius: 6 }}
          />
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="uploaded"
            width={120}
            style={{ marginBottom: 12, borderRadius: 6 }}
          />
        )}

        <button
          onClick={addProduct}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid transparent",
            background: "#22c55e",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Thêm sản phẩm
        </button>
      </div>

      {/* LIST */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              style={{ width: "100%", height: 150, objectFit: "cover" }}
            />
            <div style={{ padding: 10 }}>
              <div style={{ fontWeight: "bold" }}>
                {p.name} - {p.price.toLocaleString("vi-VN")} đ
              </div>
              <div style={{ fontSize: 14, color: "#666", margin: "6px 0" }}>
                {p.description}
              </div>
              <button
                onClick={() => removeProduct(p.id)}
                style={{
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: 6,
                  background: "#ef4444",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
