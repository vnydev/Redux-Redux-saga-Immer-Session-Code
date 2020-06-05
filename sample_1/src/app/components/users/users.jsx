import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'antd';
import {FETCH_REQUEST} from '../../reducers/userSlice';

class Users extends Component {

    componentDidMount(){
      this.props.FETCH_REQUEST();
    }
    columns = [
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Age',
            dataIndex: 'Age',
            key: 'Age',
        },
        {
            title: 'Profession',
            dataIndex: 'Profession',
            key: 'Profession',
        },
        {
            title: 'Gender',
            dataIndex: 'Gender',
            key: 'Gender',
        },
        {
            title: 'ImageUrl',
            dataIndex: 'ImageUrl',
            key: 'ImageUrl',
        },
    ]
    render() {
        const {userList} = this.props;
        return (
            <div>
               <Table
                rowKey={record => record._id}
                dataSource={userList} 
                columns={this.columns} 
                pagination={false}
                />;
            </div>
        )
    }
}

const mapStateToProps = ({
    user = {}
}) => ({
    ...user
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    FETCH_REQUEST
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users);