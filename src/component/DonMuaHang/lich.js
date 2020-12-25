import React, { Component } from 'react';
import { Form, Calendar, Row, Col, Tag, Modal, Input, InputNumber } from 'antd';
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
            if (element.tags.indexOf('Đã phê duyệt') > -1) {
                var date = new Date(element.ngaynhanhang)

                if (value.date() === date.getDate() && value.month() === date.getMonth() && value.year() === date.getFullYear()) {
                    listData.push({
                        type: 'yellow',
                        content: `Nhận hàng:  ${element.tensanpham}`,
                        id: element.ID
                    })
                }
                date = new Date(element.ngaythanhtoan)
                if (value.date() === date.getDate() && value.month() === date.getMonth() && value.year() === date.getFullYear()) {
                    listData.push({
                        type: 'green',
                        content: `Thanh toán:  ${element.tensanpham}`,
                        id: element.ID
                    })
                }
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
    formRef = React.createRef();
    renderModel = (val) => {
        // this.formRef.current.setFieldsValue(val)
        console.log(val)
        return (
            <Form
                ref={this.formRef}
                name="validate_other"
                {...formItemLayout}
                onFinish={(e) => this.onFinish(e)}
                layout="vertical"
                validateMessages={validateMessages}
                defaultValue={val}
            >

                <Row>
                    <Col span={24}>
                        <Title>Thông tin đơn hàng</Title>
                    </Col>
                    <Col span={5}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Mã đơn hàng" required>
                            <Form.Item name="ID" label="Mã đơn hàng" rules={[{ required: true }]} noStyle>
                                <Input disabled placeholder={val.ID} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={11}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Người phụ trách" required>
                            <Form.Item name="nguoiphutrach" noStyle label="Người phụ trách" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.nguoiphutrach} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên hàng" required>
                            <Form.Item name="tensanpham" noStyle label="Tên hàng" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.tensanpham} />
                            </Form.Item>
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Số lượng" required>
                            <Form.Item name="soluong" noStyle label="Số lượng" rules={[{ required: true, type: 'number' }]}>
                                <InputNumber disabled style={{ width: '100%' }} placeholder={val.soluong} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Đơn vị tính" required>
                            <Form.Item name="donvitinh" noStyle label="Đơn vị tính" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.donvitinh} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Đơn giá" required>
                            <Form.Item name="dongia" noStyle label="Đơn giá" rules={[{ required: true, type: 'number' }]}>
                                <InputNumber disabled style={{ width: '100%' }} placeholder={val.dongia} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tổng tiền" required>
                            <Form.Item name="tongtien" noStyle label="Tổng tiền" rules={[{ required: true, type: 'number' }]}>
                                <InputNumber disabled style={{ width: '100%' }} placeholder={val.tongtien} />
                            </Form.Item>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Ngày nhận" required>
                            <Form.Item name="ngaynhanhang" label="Ngày Nhận" noStyle rules={[{ required: true }]}>
                                <Input disabled placeholder={val.ngaynhanhang} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Ngày thanh toán" required>
                            <Form.Item name="ngaythanhtoan" label="Ngày thanh toán" noStyle rules={[{ required: true }]}>
                                <Input disabled placeholder={val.ngaythanhtoan} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Title>Thông tin nhà cung cấp</Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên nhà cung cấp" required>
                            <Form.Item name="tennhacungcap" noStyle label="Tên nhà cung cấp" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.tennhacungcap} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Email" required>
                            <Form.Item name="emailncc" noStyle label="Email" rules={[{ required: true, type: 'email' }]}>
                                <Input disabled placeholder={val.emailncc} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Số điện thoại" required>
                            <Form.Item name="sdtncc" noStyle label="Số điện thoại" rules={[{ required: true, type: 'number' }]}>
                                <InputNumber disabled style={{ width: '100%' }} placeholder={val.sdtncc} />
                            </Form.Item>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Người đại diện" required>
                            <Form.Item name="nguoidaidien" noStyle label="Người đại diện" rules={[{ required: true }]}>
                                <Input disabled placeholder={val.nguoidaidien} />
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