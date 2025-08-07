type Product={
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
};
    discount?: number
}

let listProduct:Product[]=[
    {
        id:"P001",
        name:"Laptop Lenovo",
        price:40000000,
        category: {
            id:"C01",
            name:"Điện tử"
        },
        discount: 10
    },
    {
        id:"P002",
        name:"Ghế Gaming",
        price:5000000,
        category: {
            id:"C02",
            name:"Nội thất"
        }
       
    },
    {
        id:"P003",
        name:"Iphone 16 Pro Max",
        price:25000000,
        category: {
            id:"C01",
            name:"Điện tử"
        },
        discount: 5
    }
]

function getFinalPrice(product: Product):number{
    if(product.discount){
        return product.price - (product.price * product.discount / 100);
    }
    return product.price
}

function printProductInfo(product: Product): void{
    let finalPrice=getFinalPrice(product)
    console.log(`Ten: ${product.name}`);
    console.log(`Gia goc: ${product.price.toLocaleString()} VND`);
    console.log(`Gia sau giam gia: ${finalPrice.toLocaleString()} VND`);
    console.log(`Danh muc: ${product.category.name}\n`);
}

for(let product of listProduct){
    printProductInfo(product)
}