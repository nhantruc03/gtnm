import React, { Component } from 'react';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import Search from '../search';
class page1 extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Title style={{ color: '#002140', marginTop: 15 }} level={3}>Yêu cầu phòng ban</Title>
                <Search/>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 , borderRadius:'10px'}}>
                    Bill is a dog.
                </div>
            </Content>
        );
    }
}

export default page1;

