import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Content } from 'antd/lib/layout/layout';
import React, { Component } from 'react';

class drawer_item extends Component {
    render() {
        return (
            <Content style={{ padding: 5, border: '1px solid #C9C9C9', margin: '10px', borderRadius: '6px' }}>
                <Row style={{ marginTop: '10px' }}>
                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Avatar size={80} >USER</Avatar>
                    </Col>
                    <Col span={12}>
                        <div style={{ lineHeight: 0.5 }}>
                            <p style={{ color: 'grey' }}>Tên <span style={{ color: 'black', fontSize: 'medium' }}>TNHH ABC</span></p>
                            <p style={{ color: 'grey' }}>Sđt <span style={{ color: 'black', fontSize: 'medium' }}>123456789</span></p>
                            <p style={{ color: 'grey' }}>Email <span style={{ color: 'black', fontSize: 'medium' }}>Example@gmail.com</span></p>
                            <p style={{ color: 'grey' }}>Website <span style={{ color: 'black', fontSize: 'medium' }}>Example.com</span></p>
                            <div style={{ float: 'right' }}>
                                <p style={{ color: 'grey' }}>Báo giá <span style={{ color: 'black', fontSize: 'medium' }}>30.000.000 VNĐ</span></p>
                            </div>
                        </div>
                    </Col>
                    <Col style={{textAlign:'center'}}>
                        <div className="radio" style={{marginTop: '40px', marginLeft:'100%'}}>
                            <label >
                                <input type="radio" name="test" value={this.props.value} />
                            </label>
                        </div>
                    </Col>
                </Row>

            </Content>
        );
    }
}

export default drawer_item;