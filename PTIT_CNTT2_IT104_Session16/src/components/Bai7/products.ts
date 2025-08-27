

const products = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy",
    price: 20000000,
    image:
      "https://th.bing.com/th/id/OIP.n9zGaemTtMEbPSmVDLi8cwHaHa?w=212&h=212&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    stock: 5,
  },
  {
    id: 2,
    name: "Điện thoại Iphone14 Promax",
    price: 20500000,
    image:
      "https://th.bing.com/th/id/OIP.vcmNrfbgp6bZhxOhVitjKgHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    stock: 4,
  },
  {
    id: 3,
    name: "Điện thoại Samsung Galaxy",
    price: 21000000,
    image:
      "https://th.bing.com/th/id/OIP.UKm4h5w8Wl3f3ouWE_M3hAHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    stock: 6,
  },
  {
    id: 4,
    name: "Điện thoại Iphone11 Promax",
    price: 21500000,
    image:
      "https://th.bing.com/th/id/OIP.ermWwEvRa2EwKK0y_nnghAHaHa?w=201&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    stock: 3,
  },
  {
    id: 5,
    name: "Điện thoại Samsung Galaxy",
    price: 22000000,
    image:
      "data:image/webp;base64,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",
     stock:5
    },
  {
    id: 6,
    name: "Điện thoại Samsung Galaxy",
    price: 22500000,
    image:
      "https://th.bing.com/th/id/OIP.waCfDgDQ8F3jrqq9lIrZiQHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", 
      stock:5
  },
  {
    id: 7,
    name: "Điện thoại Oppo A9",
    price: 23000000,
    image:
      "https://th.bing.com/th/id/OIP.v7zxIUzp1uyOvYxGyxwpsAHaE8?w=273&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
       stock:1
  },
  {
    id: 8,
    name: "Điện thoại Oppo V5",
    price: 23500000,
    image:
      "https://th.bing.com/th/id/OIP.Al8hQCjgbTh-OWFAitJiXAHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
      , stock:5
  },
];

export default products;
