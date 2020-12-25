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
    DatePicker,
    message,
} from 'antd';
import { act_Add_YCMH_DOANHNGHIEP } from '../../../action';
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
        email: '${label} phải thuộc dạng xxx@gxxx.xxx!',
        // eslint-disable-next-line
        number: '${label} phải là số!',
    },
    number: {
        // eslint-disable-next-line
        range: '${label} phải thuộc khoảng ${min} và ${max}',
    },
};
const temp = `< Yêu cầu doanh nghiệp`
const key = 'updatable';
class ThemMoiYeuCau extends Component {
    goBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }
    onFinish = (values) => {
        var chititet = `${values.soluong} ${values.donvitinh}`;

        // var ngaynhanhang = new Date(values.ngaynhanhang.toString()).toLocaleDateString();

        var ngaytao = new Date(values.ngaytao.toString()).toLocaleDateString();
        // values.ngaynhanhang = ngaynhanhang;
        values.ngaytao = ngaytao;

        var data = { ...values, chitiet: chititet }

        
        message.loading({ content: 'Đang thực hiện thao tác...', key });
        setTimeout(() => {
            message.success({ content: 'Thêm dữ liệu thành công!', key, duration: 2 });
            this.props.history.goBack();
        }, 2000);
        console.log('Received values of form: ', data);

        this.props.onAdd(data)
    };
    render() {
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
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên người đại diện" required>
                                    <Form.Item name="tennguoidaidien" label="Tên người đại diện" rules={[{ required: true }]} noStyle>
                                        <Input placeholder="Eg.Tên người đại diện" />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên doanh nghiệp" required>
                                    <Form.Item name="tendoanhnghiep" noStyle label="Tên doanh nghiệp" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.Tên doanh nghiệp" />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Email" required>
                                    <Form.Item name="email" noStyle label="Email" rules={[{ required: true, type: 'email' }]}>
                                        <Input placeholder="Eg.example@gmail.com" />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="SĐT" required>
                                    <Form.Item name="sdt" noStyle label="SĐT" rules={[{ required: true, type: 'number' }]}>
                                        <InputNumber style={{ width: '100%' }} placeholder="Eg.0919..." />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Số lượng" required>
                                    <Form.Item name="soluong" noStyle label="Số lượng" rules={[{ required: true, type: 'number' }]}>
                                        <InputNumber style={{ width: '100%' }} placeholder="Eg.100" />
                                    </Form.Item>
                                </Form.Item>
                           

                            </Col>
                            <Col span={12}>

                                <Row>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 22 }} label="Tiêu đề" required>
                                            <Form.Item name="tieude" noStyle label="Tiêu đề" rules={[{ required: true }]}>
                                                <Input placeholder="Eg.cái" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item wrapperCol={{ sm: 19 }} label="Ngày tạo" required>
                                            <Form.Item name="ngaytao" noStyle>
                                                <DatePicker placeholder="Chọn ngày" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Mô tả yêu cầu" required>
                                    <Form.Item name="motayeucau" noStyle label="Mô tả yêu cầu" rules={[{ required: true }]}>
                                        <Input.TextArea rows={6} placeholder="Eg.mô tả yêu cầu" />
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên sản phẩm" required>
                                    <Form.Item name="tensanpham" noStyle label="Tên sản phẩm" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.Tên sản phẩm" />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Đơn vị tính" required>
                                    <Form.Item name="donvitinh" noStyle label="Đơn vị tính" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.cái" />
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

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (YCMH) => {
            dispatch(act_Add_YCMH_DOANHNGHIEP(YCMH))
        }
    }
}

export default connect(null, mapDispatchToProps)(ThemMoiYeuCau);