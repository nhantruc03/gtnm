import React, { Component } from 'react';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import {
    Form,
    InputNumber,
    Button,
    Row,
    Col,
    Input,
} from 'antd';
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

class donmuahang extends Component {
    goBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    render() {
        const temp = `< Đơn mua hàng ${this.props.match.params.id}`
        return (
            <Content style={{ margin: '0 16px' }}>



                <Row style={{ marginTop: 15, marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Title style={{ color: '#002140' }} level={3}><a style={{ color: '#002140' }} onClick={this.goBack} href="/#">{temp}</a></Title>
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px' }}>
                    <Form
                        name="validate_other"
                        {...formItemLayout}
                        onFinish={(e) => this.onFinish(e)}
                        layout="vertical"
                        validateMessages={validateMessages}
                    >
                        <Row>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Mã đơn hàng" required>
                                    <Form.Item name="madonhang" label="Mã đơn hàng" rules={[{ required: true }]} noStyle>
                                        <Input placeholder="Eg.Tên người đại diện" />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên hàng" required>
                                    <Form.Item name="tenhang" noStyle label="Tên hàng" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.Tên hàng" />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Số lượng" required>
                                    <Form.Item name="soluong" noStyle label="Số lượng" rules={[{ required: true, type: 'number' }]}>
                                        <InputNumber style={{ width: '100%' }} placeholder="Eg.100" />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Nhà cung cấp" required>
                                    <Form.Item name="nhacungcap" noStyle label="Nhà cung cấp" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.Nhà cung cấp" />
                                    </Form.Item>
                                </Form.Item>


                            </Col>
                            <Col span={12}>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 22 }} label="Đơn giá" required>
                                            <Form.Item name="dongia" noStyle label="Đơn giá" rules={[{ required: true }]}>
                                                <Input placeholder="Eg.Đơn giá" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 19 }} label="Tổng tiền" required>
                                            <Form.Item name="tongtien" noStyle>
                                                <Input placeholder="Eg.Tổng tiền" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 22 }} label="Thuế" required>
                                            <Form.Item name="thue" noStyle label="Thuế" rules={[{ required: true }]}>
                                                <Input placeholder="Eg.Thuế" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 19 }} label="Kho nhập" required>
                                            <Form.Item name="khonhap" noStyle>
                                                <Input placeholder="Eg.Kho nhập" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 22 }} label="Đơn vị tiền" required>
                                            <Form.Item name="donvitien" noStyle label="Đơn vị tiền" rules={[{ required: true }]}>
                                                <Input placeholder="Eg.Đơn vị tiền" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 19 }} label="Thành tiền" required>
                                            <Form.Item name="thanhtien" noStyle>
                                                <Input placeholder="Eg.Thành tiền" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Người phụ trách" required>
                                    <Form.Item name="nguoiphutrach" noStyle label="Người phụ trách" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.Người phụ trách" />
                                    </Form.Item>
                                </Form.Item>

                            </Col>
                        </Row>
                        <Form.Item wrapperCol={{ span: 24, offset: 9 }}>
                            <Button onClick={this.goBack} className="back" style={{ width: 150, marginRight: 20 }}>Hủy</Button>
                            <Button htmlType="submit" className="add" style={{ width: 150 }}>Lưu</Button>
                        </Form.Item>


                    </Form>
                </div>
            </Content>
        );
    }
}

export default donmuahang;