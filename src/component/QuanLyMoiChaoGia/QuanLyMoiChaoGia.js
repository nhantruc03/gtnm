import { Col, Row, Badge, Card, Tag, Button, Drawer} from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import React, { Component } from 'react';
import ChaoGia from './ChaoGia_item';
import Avatar from 'antd/lib/avatar/avatar';

import DrawerItem from '../drawer_item'
class QuanLyMoiChaoGia extends Component {
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
            <Content style={{ margin: '0 16px' }} >
                <Row style={{ marginTop: 16, marginLeft: 16, marginRight: 30 }}>
                    <Col span={8} wrapperCol={{ sm: 24 }}>
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