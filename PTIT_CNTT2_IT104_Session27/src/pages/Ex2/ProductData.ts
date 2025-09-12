export interface Product {
    id:string
    name: string
    price: number
    description: string
}

export const productData: Product[]= [
  {
    id: "1",
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description: "Laptop cao cấp với thiết kế mỏng nhẹ, màn đẹp, pin tốt.",
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    price: 25000000,
    description: "Hiệu năng mạnh, camera tốt, hỗ trợ lâu dài.",
  },
  {
    id: "3",
    name: "Samsung Galaxy S22",
    price: 20000000,
    description: "Màn hình AMOLED mượt, hệ sinh thái Android linh hoạt.",
  },
  {
    id: "4",
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    description: "Chống ồn chủ động tốt, âm thanh cân bằng, pin bền.",
  },
  {
    id: "5",
    name: "Apple Watch Series 8",
    price: 12000000,
    description: "Theo dõi sức khỏe, tích hợp sâu với iPhone, sạc nhanh.",
  },
]