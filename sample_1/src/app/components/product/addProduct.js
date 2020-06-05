import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";
import {Row, Col, Button, Alert} from 'antd';

import './style.scss';

class AddProduct extends Component {

    componentDidMount(){
        const { SET_PRODUCT } = this.props;
        SET_PRODUCT({
            succes_message:"", 
            error_message:"",
        });
    }   
    handleSubmit = async (value) => {
        const { initialize, CREATE_PRODUCT, error_message, history } = this.props;
        await initialize(value);
        await CREATE_PRODUCT(value);
        if(!error_message){
            history.push('/product');
        }
    }

    render() {
        const { handleSubmit, isLoading, succes_message, error_message } = this.props;
        return (
            <Row className="addProForm">
                <div className="alert_msg">
                    {succes_message && <Alert message={succes_message} type="success" showIcon />}
                    {error_message && <Alert message={error_message} type="success" showIcon />}
                </div>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Row className="field">
                        <Col span={8}>
                            <label htmlFor="Name"> Product Name</label>
                        </Col>
                        <Col span={8}>
                            <Field name="Name" component="input" type="text" />
                        </Col>
                    </Row>
                    <Row className="field"> 
                        <Col span={8}>
                            <label htmlFor="Category">Category</label>
                        </Col>
                        <Col span={8}>
                            <Field name="Category" component="input" type="text" />
                        </Col>
                    </Row>
                    <Row className="field">
                        <Col span={8}>
                            <label htmlFor="ImageUrl">Image Url</label>
                        </Col>
                        <Col span={8}>
                            <Field name="ImageUrl" component="input" type="text" />
                        </Col>
                    </Row>
                    <Row className="field">
                        <Col span={8}>
                            <label htmlFor="Price">Price</label>
                        </Col>
                        <Col span={8}>
                            <Field name="Price" component="input" type="number" />
                        </Col>
                    </Row>
                    <Row className="field">
                        <Col span={8}>
                            <label htmlFor="Description">Description</label>
                        </Col>
                        <Col span={8}>
                            <Field name="Description" component="textarea" type="text" />
                        </Col>
                    </Row>
                    <Button loading={isLoading} htmlType="submit" type="primary">Submit</Button>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </Row>
        )
    }
}

const addProductFrom  = withRouter(AddProduct)
  
export default reduxForm({
    // a unique name for the form
    form: 'addProduct',
    enableReinitialize: true,

  })(addProductFrom);