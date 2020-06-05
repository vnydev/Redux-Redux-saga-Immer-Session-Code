import React, { Component } from 'react';
import {Alert} from 'antd';
import {Counter} from '../../../features/counter/Counter';
import ShoppingCart from '../../container/shoppingCart';
import './style.scss';

export default class Home extends Component {
    render() {
        const { success_message, error_message } = this.props;
        return (
            <div className="home">
                <div className="alert_msg">
                    {success_message && <Alert message={success_message} type="success" showIcon />}
                    {error_message && <Alert message={error_message} type="success" showIcon />}
                </div>
                <ShoppingCart />
                <Counter />
            </div>
        )
    }
}
