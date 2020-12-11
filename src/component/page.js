import React, { Component } from 'react';
import { Button, Drawer, Layout } from 'antd';
import SiderDemo from './sider';
import Header from './header';
import DrawerItem from './drawer_item'
const { Footer } = Layout;
class page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Layout style={{ minHeight: '100vh' }} className="site-drawer-render-in-current-wrapper">
                    <SiderDemo />
                    <Layout className="site-layout">
                        <Header />
                        {React.cloneElement(this.props.children, { showDrawer: () => this.showDrawer() })}
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>

                </Layout>
                <Drawer
                    title="Thông tin nhà cung cấp"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={500}
                >
                    <div style={{ height: '90%', overflowY: 'scroll' }}>
                        <form>
                            <DrawerItem value="a"></DrawerItem>
                            <DrawerItem value="b"></DrawerItem>
                            <DrawerItem value="c"></DrawerItem>
                        </form>
                    </div>


                    <div style={{ float: 'right', width: '50%' }}>
                        <Button className="add" style={{ width: '100%' }} >Lưu</Button>
                    </div>

                </Drawer>
            </React.Fragment>
        );
    }
}

export default page;