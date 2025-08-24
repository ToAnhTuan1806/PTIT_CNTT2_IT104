import React, { Component } from 'react'

interface State{
    productCode: string
    productName: string
    price: number
    quantity: number
}

export default class ProductForm extends Component<{}, State> {
    constructor(props: {}){
        super(props)
        this.state= {
            productCode: "",
            productName: "",
            price: 0,
            quantity: 0
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const{name, value}=e.target
        this.setState({
          ...this.state, [name]:value
        } as State)
    }

     handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const product = {
      productCode: this.state.productCode,
      productName: this.state.productName,
      price: this.state.price,
      quantity: this.state.quantity
    };

    console.log(product)
  };

  render() {
    return (
 <div style={{ margin: "20px"}}>
        <h3>Thêm mới sản phẩm</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label> <br />
            <input type="text" name="productCode" value={this.state.productCode} onChange={this.handleChange} placeholder='...'/>
          </div>
          <div>
            <label>Tên sản phẩm</label><br />
            <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange} placeholder='...'/>
          </div>
          <div>
            <label>Giá</label> <br />
            <input type="text" name="price" value={this.state.price} onChange={this.handleChange} placeholder='...'/>
          </div>
          <div>
            <label>Số lượng</label><br />
            <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} placeholder='...'/>
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    )
  }
}
