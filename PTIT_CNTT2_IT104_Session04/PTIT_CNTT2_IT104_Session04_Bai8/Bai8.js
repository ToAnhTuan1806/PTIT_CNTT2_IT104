"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculaterOrderTotal(order) {
    let total = 0;
    for (let item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrder(order) {
    console.log(`Don hang: #${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log("San pham:");
    for (let item of order.items) {
        let name = item.product.name;
        let qty = item.quantity;
        let totalPrice = item.product.price * qty;
        console.log(`- ${name} × ${qty} → ${totalPrice.toLocaleString()} VND`);
    }
    let total = calculaterOrderTotal(order);
    console.log(`Tong cong: ${total.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chu: ${order.note}`);
    }
}
let shirt = { id: "P001", name: "Áo sơ mi", price: 250000 };
let pants = { id: "P002", name: "Quần tây", price: 400000 };
let orderExample = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: shirt, quantity: 2 },
        { product: pants, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(orderExample);
