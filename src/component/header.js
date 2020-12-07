import React, { Component } from 'react';
import Avatar from 'antd/lib/avatar/avatar';

import { Layout } from 'antd';
const { Header } = Layout;

class header extends Component {
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 15 }} >
                <Avatar className="my-2" style={{ float: 'right', padding: 'auto' }} src='./user.png' />
            </Header>
        );
    }
}

export default header;