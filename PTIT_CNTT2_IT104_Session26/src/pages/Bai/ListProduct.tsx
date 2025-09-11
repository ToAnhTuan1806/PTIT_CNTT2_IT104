import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./style.css"

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ListProduct() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const productsData: Product[] = [
    {
      id: 1,
      name: "Điện thoại iPhone 15 Pro",
      price: 30000000,
      image: "https://tse3.mm.bing.net/th/id/OIP.nYTUUB7j7uR1GZYcvo3k_QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      name: "Điện thoại OPPO Reno11 5G",
      price: 10600000,
      image: "https://tse3.mm.bing.net/th/id/OIP.2Vfw7HkODCPH4c588WIPhwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      name: "Điện thoại vivo Y17s",
      price: 3300000,
      image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1697442673637/7c1b22c14b9b71ea2d72725bf5074e40.png",
    },
    {
      id: 4,
      name: "Điện thoại Nokia 8210 4G",
      price: 3300000,
      image: "https://tse2.mm.bing.net/th/id/OIP.SEjJFcHukiEc_t4l9PqqdAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (!data) {
      localStorage.setItem("products", JSON.stringify(productsData));
      setProducts(productsData);
    } else {
      setProducts(JSON.parse(data));
    }
  }, []);
  const keyword = searchParams.get("name")?.toLowerCase() || "";
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(keyword)
  );

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/list-product?name=${searchValue}`);
    } else {
      navigate("/list-product");
    }
  };

  return (
    <div>
      <h2>List product</h2>

      <input type="text" placeholder="Tìm kiếm theo tên" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      <button type="submit" onClick={handleSearch} className="btn">Tìm kiếm</button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {filtered.map((p) => (
          <div key={p.id}
            style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={p.image} alt={p.name} width="150" />
            <h4>{p.name}</h4>
            <p>{p.price} VND</p>
            <Link to={`/product/${p.id}`} className="btn">Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
