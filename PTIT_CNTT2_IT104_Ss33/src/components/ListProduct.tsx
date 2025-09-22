import React, { useState } from "react";
import bread from "../images/bread.jpg";
import pizza from "../images/pizza.jpg";
import cake from "../images/cake.jpg";
import hamburger from "../images/hamburger.jpg";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "./interface";

const data = [
  {
    id: 1,
    name: "Pizza",
    quantity: 15,
    price: 30,
    description: "pizza",
    image:
      "https://th.bing.com/th/id/OIP.UCDOfvVTmNCM4K4VBqtexwHaE8?w=261&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    id: 2,
    name: "Hamburger",
    quantity: 1,
    price: 10,
    description: "hamburger",
    image:
      "https://th.bing.com/th/id/OIP.wEWZ8F5fMOb8abO3pmoQ1wHaFE?w=245&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "Bread",
    quantity: 5,
    price: 20,
    description: "bread",
    image:
      "https://th.bing.com/th/id/OIP.jigwGLJsrpVwqx2qY4EsUAHaE7?w=192&h=128&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    id: 4,
    name: "Cake",
    quantity: 5,
    price: 10,
    description: "cake",
    image:
      "https://th.bing.com/th/id/OIP.wrIuu70cEentUrJmtkDPowHaLH?w=192&h=288&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
];

export default function ListProduct() {
  const dispatch = useDispatch();
  //   const [quantity, setQuantity] = useState<number>(1);

  const cart: Product[] = useSelector((state: any) => state.cart);

  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  const handleChange = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, value),
    }));
  };

  const handleAddToCart = (product: (typeof data)[number]) => {
    const inCartQty = cart.find((e) => e.id === product.id)?.quantity ?? 0;
    if (inCartQty + 1 > product.quantity) {
      alert("Qua so luong trong kho");
      return;
    }

    dispatch({
      type: "ADD",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantities[product.id] ?? 1,
      },
    });
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>

        <div className="panel-body" id="list-product">
          {data.map((item) => (
            <div
              key={item.id}
              className="media product"
              style={{ marginBottom: 16 }}
            >
              <div className="media-left">
                <a href="#">
                  <img
                    className="media-object"
                    src={item.image}
                    alt={item.name}
                    style={{ width: 100, height: 100, objectFit: "cover" }}
                  />
                </a>
              </div>

              <div className="media-body">
                <h4 className="media-heading">{item.name}</h4>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  dicta asperiores veniam repellat unde debitis quisquam magnam
                  magni ut deleniti!
                </p>

                <input
                  placeholder="..."
                  name={`quantity-product-${item.id}`}
                  type="number"
                  min={1}
                  value={quantities[item.id] ?? 1}
                  style={{ width: 80, marginRight: 8 }}
                  onChange={(e) =>
                    handleChange(item.id, parseInt(e.target.value) || 1)
                  }
                />
                <span
                  className="price"
                  style={{ backgroundColor: "red", cursor: "pointer" }}
                  onClick={() => handleAddToCart(item)}
                >
                  {item.price} USD
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
