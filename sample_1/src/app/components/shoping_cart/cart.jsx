import React, { Component } from "react";
import './style.scss';

export default class ShoppingCart extends Component {
    state = {
        products: [
            {
                id: 1,
                name: "Mackbook Air",
                price: 85000,
            },
            {
                id: 2,
                name: "Apple iphone",
                price: 60000,
            },
            {
                id: 3,
                name: "Apple Watch",
                price: 45000,
            },
        ],
    };

    addProduct = (product) => {
        console.log("product", product)
        const { ADD_PRODUCT_REQUEST } = this.props;
        ADD_PRODUCT_REQUEST({
            ...product,
            quantity: 1,
            basePrice: product.price
        })
    };

    incrementQuanity = (product)=>{
        const  {INCREMENT_REQUEST} = this.props;
        INCREMENT_REQUEST(product);
        
    }

    decrementQuanity = (product)=>{
        const  {DECREMENT_REQUEST} = this.props;
        DECREMENT_REQUEST(product);
    }

    render() {
        const {ordered} = this.props;
        return (
            <div className="cart">
                <h1>Immer Example</h1>
                <h3> All available products </h3>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price </th>
                        <th>Action </th>
                    </tr>
                    {this.state.products.map(i => (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name} </td>
                            <td>{i.price}</td>
                            <td><button onClick={() => this.addProduct(i)}>add to cart</button> </td>
                        </tr>
                    ))}
                </table>
                <hr/>
                <h3> Shoping Cart </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price </th>
                            <th>Quantity </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(ordered) && ordered.map(i => (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name} </td>
                            <td>{i.price}</td>
                            <td>{i.quantity}</td>
                            <td>
                                <button onClick={() => this.decrementQuanity(i)}>-</button> 
                                <button >{i.quantity}</button> 
                                <button onClick={() => this.incrementQuanity(i)}>+</button> 
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
