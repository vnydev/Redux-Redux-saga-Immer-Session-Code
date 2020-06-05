import * as React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
    UserAddOutlined,
    HomeFilled,
    ContainerFilled,
    ProfileFilled
} from "@ant-design/icons";
import "./style.scss";

const { SubMenu } = Menu;

class TopNavComponent extends React.Component {
    state = {
        current: "mail",
    };

    handleClick = (e: any) => {
        console.log("click ", e);
        this.setState({
            current: e.key,
        });
    };

    login = () => {
        const {LOGIN_REQUEST} = this.props;
        let user = {username:"vineysharma@ggmail.com", password:"Test@123"};
        LOGIN_REQUEST(user);
    };

    logout = () => {
        const {LOGOUT_REQUEST} = this.props;
        LOGOUT_REQUEST(false);
    }

    render() {
        const {isAuthenticate} = this.props;
        return (
            <div className="top-nav">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"

                >
                    <Menu.Item key="0" icon={<ContainerFilled />}>
                        <Link to="/product">Product</Link>
                    </Menu.Item>
                    <Menu.Item key="1" icon={<UserAddOutlined />}>
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ProfileFilled />}>
                        <Link to="/profile">Profile</Link>
                    </Menu.Item>
                    <SubMenu icon={<HomeFilled />} title="">
                        <Menu.Item key="3"> 
                            <Link to="/">Home</Link> 
                        </Menu.Item>
                        {!isAuthenticate? <Menu.Item key="4" onClick={this.login}>Login</Menu.Item> :
                        <Menu.Item key="5" onClick={this.logout}>Logout</Menu.Item>}
                    </SubMenu>
                </Menu>
            </div>
        );
    }
};

export default TopNavComponent;