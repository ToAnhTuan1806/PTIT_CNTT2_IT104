import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "./interface";

export default function YourCart() {
  //   const result = useSelector((state: any) => {
  //     console.log("data", state);
  //     return state.cart;
  //   });
  const result: Product[] = useSelector((state: any) => state.cart) ?? [];

  const dispatch = useDispatch();
  const [notice, setNotice] = useState<string | null>(null);

  const handleDelete = (id: number) => {
    const isOk = window.confirm("Ban co chac muon xoa san pham nay");
    if (!isOk) {
      return;
    }
    dispatch({
      type: "DELETE",
      payload: { id },
    });
    setNotice("Delete cart successfully");
    setTimeout(() => setNotice(null), 1500);
  };

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            {result.length === 0 ? (
              <p>Empty product in your cart</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  {result.map((item: Product, index: number) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <input
                          placeholder="..."
                          name={`cart-item-quantity-${item.id}`}
                          type="number"
                          min={1}
                          value={item.quantity}
                        />
                      </td>
                      <td>
                        <a className="label label-info update-cart-item">
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>{result.length}</b> items in your shopping
                      cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      {result
                        .reduce(
                          (total: number, curr: Product) =>
                            total + curr.price * curr.quantity,
                          0
                        )
                        .toLocaleString()}{" "}
                      USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
        {notice && (
          <div className="alert alert-success" role="alert" id="mnotification">
            {notice}
          </div>
        )}
      </div>
    </div>
  );
}
