import React, { Component } from 'react';
import { Form, Calendar, Row, Col, Tag, Modal, Input, InputNumber} from 'antd';
import Title from 'antd/lib/typography/Title';
import { Content } from 'antd/lib/layout/layout';
import { connect } from 'react-redux';
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
const validateMessages = {
    // eslint-disable-next-line
    required: 'Cần nhập ${label}!',
    types: {
        // eslint-disable-next-line
        email: '${label} không hợp lệ!',
        // eslint-disable-next-line
        number: '${label} không hợp lệ!',
    },
    number: {
        // eslint-disable-next-line
        range: '${label} must be between ${min} and ${max}',
    },
};
class lich extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1Visible: false,
            modal2Visible: false,
            model: {}
        }
    }
    getListData = (value) => {

        let listData = [];
        this.props.data.forEach(element => {
            var date = new Date(element.ngaynhanhang)

            if (value.date() === date.getDate() && value.month() === date.getMonth() && value.year() === date.getFullYear()) {
                listData.push({
                    type: 'yellow',
                    content: `Nhận hàng:  ${element.tieude}`,
                    id: element.ID
                })
            }

            if (value.date() === date.getDate() + 3 && value.month() === date.getMonth() && value.year() === date.getFullYear()) {
                listData.push({
                    type: 'green',
                    content: `Thanh toán:  ${element.tieude}`,
                    id: element.ID
                })
            }
        });

        return listData || [];
    }



    dateCellRender = (value) => {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <Tag onClick={() => this.setModal2Visible(true, item.id)} className={item.type} style={{ textAlign: "center", marginTop: 3 }} key={item.id}>
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

    setModal2Visible(modal2Visible, val) {
        this.setState({ modal2Visible });
        if (val !== undefined) {
            var temp = this.props.data.find(e => e.ID === val)
            console.log(temp)
            this.setState({
                model: temp
            })
            console.log(val)
        }

    }

    renderModel = (val) => {
        return (
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={(e) => this.onFinish(e)}
                layout="vertical"
                validateMessages={validateMessages}
            >
                <Row>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên người đại diện" required>
                            <Form.Item name="tennguoidaidien" label="Tên người đại diện" rules={[{ required: true }]} noStyle>
                                <Input disabled placeholder={val.tennguoidaidien} />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên doanh nghiệp" required>
                            <Form.Item name="tendoanhnghiep" noStyle label="Tên doanh nghiệp" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.tendoanhnghiep} />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Email" required>
                            <Form.Item name="email" noStyle label="Email" rules={[{ required: true, type: 'email' }]}>
                                <Input placeholder={val.email} disabled />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="SĐT" required>
                            <Form.Item name="sdt" noStyle label="SĐT" rules={[{ required: true, type: 'number' }]}>
                                <InputNumber disabled placeholder={val.sdt} style={{ width: '100%' }} />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Số lượng" required>
                            <Form.Item name="soluong" noStyle label="Số lượng" rules={[{ required: true, type: 'number' }]}>
                                <InputNumber disabled placeholder={val.soluong} style={{ width: '100%' }} />
                            </Form.Item>
                        </Form.Item>


                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 22 }} label="Tiêu đề" required>
                                    <Form.Item name="tieude" noStyle label="Tiêu đề" rules={[{ required: true }]}>
                                        <Input disabled placeholder={val.tieude} />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 19 }} label="Ngày tạo" required>
                                    <Form.Item name="ngaytao" noStyle>
                                        <Input disabled placeholder={val.ngaytao} />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Mô tả yêu cầu" required>
                            <Form.Item name="motayeucau" noStyle label="Mô tả yêu cầu" rules={[{ required: true }]}>
                                <Input.TextArea disabled placeholder={val.mota} rows={6} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên sản phẩm" required>
                            <Form.Item name="tensanpham" noStyle label="Tên sản phẩm" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.tensanpham} />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Đơn vị tính" required>
                            <Form.Item name="donvitinh" noStyle label="Đơn vị tính" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.donvitinh} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }

    render() {
        const temp = `< Lịch`
        return (
            <Content>

                <Row style={{ marginTop: 5, marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Title style={{ color: '#002140' }} level={3}><a style={{ color: '#002140' }} onClick={this.goBack} href="/#">{temp}</a></Title>
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 1, minHeight: 360, borderRadius: '10px' }}>
                    <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
                </div>
                <Modal
                    title='Thông tin đơn hàng'
                    centered
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                    width='50%'
                >
                    {this.renderModel(this.state.model)}
                </Modal>

            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.DONMUAHANG
    }
}

export default connect(mapStateToProps, null)(lich);