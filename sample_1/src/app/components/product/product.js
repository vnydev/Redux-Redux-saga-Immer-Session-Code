import React, { Component } from 'react';
import { Table, Button } from 'antd';
import './style.scss';
import { withRouter } from "react-router-dom";

class Product extends Component {

    componentDidMount(){
        this.props.PRO_FETCH_REQUEST();
    }

    columns = [
        {
            title: 'ImageUrl',
            dataIndex: 'ImageUrl',
            key: 'ImageUrl',
            render: ImageUrl => <img style={{width:"100px"}} alt="example" src={ImageUrl} />
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Category',
            dataIndex: 'Category',
            key: 'Category',
        },
        {
            title: 'Description',
            dataIndex: 'Description',
            width: "25%",
            key: 'Description',
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'Price',
        }
    ];

    add = () => {
        this.props.history.push('/add-product');
    }

    render() {
        const { productList } = this.props;
        return (
            <div className="product">
                <div className="action">
                    <Button onClick={this.add} type="primary">Add Product</Button>
                </div>
                <Table
                rowKey={record => record._id}
                dataSource={productList} 
                columns={this.columns} 
                pagination={false}
                />;

            </div>
        )
    }
}

export default withRouter(Product)