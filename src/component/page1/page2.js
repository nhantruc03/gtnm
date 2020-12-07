import React, { Component } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Breadcrumb } from 'antd';
class page2 extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Bill is a cat.
                </div>
            </Content>
        );
    }
}

export default page2;