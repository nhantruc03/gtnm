import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import React, { Component } from 'react';
import ChaoGia from './ChaoGia_item';
class QuanLyMoiChaoGia extends Component {
  

    render() {
        return (
            <Content style={{ margin: '0 16px' }} >

                <Row style={{ marginTop: 15, marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Title style={{ color: '#002140' }} level={3}>MỜI CHÀO GIÁ</Title>
                    </Col>
                </Row>

                <Row>
                    <ChaoGia />
                    <ChaoGia />
                    <ChaoGia />
                    <ChaoGia />
                </Row>
            </Content>


        );
    }
}

export default QuanLyMoiChaoGia;