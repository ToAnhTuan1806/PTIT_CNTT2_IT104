import React, { Component } from 'react'
import ChildrenCpd from './ChildrenCpd'


interface Product{
    id:number
    name:string
    price:number
    quantity:number
}
interface State{
    product: Product
}
export default class ParentCmd extends Component<{}, State> {
    constructor(){
        super({})
        this.state={
            product:{
                id:1,
                name: "Bưởi ba rọi",
                price: 12000,
                quantity: 6
            }
        }
    }
  render() {
    return (
      <div>
        <ChildrenCpd product={this.state.product}/>
      </div>
    )
  }
}
