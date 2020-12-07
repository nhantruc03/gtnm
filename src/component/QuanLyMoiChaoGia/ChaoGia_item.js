import { Button, Col, Row, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Title from 'antd/lib/typography/Title';
import React, { Component } from 'react';


class ChaoGia_item extends Component {
    render() {
        return (
            <Col span={12} style={{ padding: 50 }}>
                <div style={{ width: '100%', height: '300px', borderRadius: '6px', backgroundColor: "white", padding: 30 }}>
                    <Row>
                        <Col span={14}>
                            <Tag style={{ textAlign: "center", maxWidth: 80 }} className={`purple`} key={`Vải`}>
                                Vải
                            </Tag>
                            <Tag style={{ textAlign: "center", maxWidth: 80 }} className={`skin`} key={`Designer`}>
                                Vải
                            </Tag>
                            <Tag style={{ textAlign: "center", maxWidth: 80 }} className={`tea`} key={`Hubble`}>
                                Vải
                            </Tag>
                        </Col>
                        <Col span={10}>
                            <div style={{float:"right"}}>
                                <Avatar style={{ marginRight: '10px' }} size={45} src='./Photo.png'>USER</Avatar>
                                <Avatar style={{ marginRight: '10px' }} size={45} src='./2.png'>USER</Avatar>
                                <Avatar style={{ marginRight: '10px' }} size={45} src='./3.png'>USER</Avatar>
                                <Avatar style={{ marginRight: '10px' }} size={45} src='./Plus.png'>USER</Avatar>
                            </div>
                        </Col>
                    </Row>
                    <Title>Cung cấp vải gấm</Title>
                    <p>Chào giá cạnh tranh</p>
                    <p>Thời gian nộp chào giá</p>
                    <Row>
                        <Col span={14}>
                            <Avatar style={{ marginRight: '10px' }} size={45}  src='./Group.png'></Avatar>
                        </Col>
                        <Col span={10}>
                            <Button htmlType="submit" className="add" style={{ width: 200, float: "right", backgroundColor:"#114EAB" }}>Lưu</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        );
    }
}

export default ChaoGia_item;