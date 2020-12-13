import React, { Component } from 'react';
import {  Layout } from 'antd';
import SiderDemo from './sider';
import Header from './header';

const { Footer } = Layout;
class page extends Component {
   

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
            </React.Fragment>
        );
    }
}

export default page;