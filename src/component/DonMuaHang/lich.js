import React, { Component } from 'react';
import { Calendar, Row, Col, Tag } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Content } from 'antd/lib/layout/layout';
class lich extends Component {
    getListData = (value) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'green', content: 'Thanh toán abcxyz.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'green', content: 'Thanh toán abcxyz.' },
                    { type: 'yellow', content: 'Nhận hàng abcxyz.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'green', content: 'Thanh toán nhiều đơn hàng。。....' },
                    { type: 'yellow', content: 'Nhận hàng abcxyz 1.' },
                    { type: 'yellow', content: 'Nhận hàng abcxyz 2.' },
                    { type: 'yellow', content: 'Nhận hàng abcxyz 3.' },
                    { type: 'yellow', content: 'Nhận hàng abcxyz 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    dateCellRender = (value) => {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <Tag className={item.type} style={{ textAlign: "center", marginTop:3 }} key={item.content}>
                        {item.content}
                    </Tag>
                ))}
            </ul>
        );
    }

    getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    }

    monthCellRender = (value) => {
        const num = this.getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }
    render() {
        const temp = `< Lịch`
        return (
            <Content style={{ marginBottom: '-60px ' }}>

                <Row style={{ marginTop: 15, marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Title style={{ color: '#002140' }} level={3}><a style={{ color: '#002140' }} onClick={this.goBack} href="/#">{temp}</a></Title>
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px' }}>
                    <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
                </div>

            </Content>
        );
    }
}

export default lich;