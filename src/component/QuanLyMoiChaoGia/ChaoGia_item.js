import { Button, Col, Row, Tag, Drawer, Badge } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Title from 'antd/lib/typography/Title';
import React, { Component } from 'react';

import DrawerItem from '../drawer_item'

class ChaoGia_item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: [
                {
                    id: 1,
                    src: './Photo.png',
                    select: false
                },
                {
                    id: 2,
                    src: './2.png',
                    select: false
                },
                {
                    id: 3,
                    src: './3.png',
                    select: false
                }
            ]
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

    renderAvatar = (data) => {
        return (
            data.map((e,key) => {
                if (e.select === false) {
                    return (
                        <Avatar key={key} style={{ marginRight: '10px' }} size={50} src={e.src}>USER</Avatar>
                    )
                }
                else {
                    return (
                        <div key={key} style={{marginRight:'10px', display:'inline'}}>
                            <Badge count={<img src="./icon.png" alt="" ></img>} style={{marginRight:'10px'}}  >
                                <Avatar  style={{ border: '4px solid #0E3E86' }} size={50} src={e.src}>USER</Avatar>
                            </Badge>
                        </div >
                    )

                }
            })
        )
    }

    renderNCC = (data) => {
        return (
            data.map((e,key) => {
                if (e.select === false) {
                    return (
                        <DrawerItem data={e} select="1px solid #C9C9C9" onSelect={(a) => this.onSelect(a)} key={key}></DrawerItem>
                    )
                }
                else {
                    return (
                        <DrawerItem data={e} select="2px solid #1452B2" onSelect={(a) => this.onSelect(a)} key={key}></DrawerItem>
                    )

                }
            })
        )
    }

    onSelect = (e) => {
        var temp = []
        this.state.data.forEach((o) => {
            if (o.id === Number(e)) {
                o.select = true
            } else {
                o.select = false
            }
            temp.push(o);
        })
        this.setState({
            data: temp
        })
    }

    render() {
        return (
            <Col span={12} style={{ padding: 50 }}>
                <div style={{ width: '100%', height: '300px', borderRadius: '6px', backgroundColor: "white", padding: 30 }}>
                    <Row>
                        <Col span={14}>
                            <Title>Cung cấp vải gấm</Title>
                        </Col>
                        <Col span={10}>
                            <Tag style={{ textAlign: "center", maxWidth: 150, float: 'right', marginTop: '5%' }} className={`green`} key={`Đã phê duyệt`}>
                                Đã phê duyệt
                            </Tag>
                        </Col>
                    </Row>
                    <p style={{ color: 'grey' }}>Chào giá cạnh tranh</p>
                    <p style={{ color: 'grey' }}>Thời gian nộp chào giá: 30/04/2020</p>
                    <p>Đã có <span style={{ color: '#184A97', fontWeight: 'bold' }}>3 nhà</span> cung cấp vào chào giá</p>
                    <Row>
                        <Col span={14}>
                            {this.renderAvatar(this.state.data)}
                            <Avatar style={{ marginRight: '10px' }} size={45} src='./Plus.png'>USER</Avatar>
                        </Col>
                        <Col span={10}>
                            <Button onClick={() => this.showDrawer()} className="back" style={{ width: 200, float: "right" }}>Xem chi tiết</Button>
                        </Col>
                    </Row>
                </div>
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
                            {this.renderNCC(this.state.data)}
                        </form>
                    </div>

                    <div style={{ float: 'right', width: '50%' }}>
                        <Button className="add" style={{ width: '100%' }} >Lưu</Button>
                    </div>
                </Drawer>
            </Col>
        );
    }
}

export default ChaoGia_item;