import React, { Component } from 'react';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import moment from 'moment';
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
import { connect } from 'react-redux';
import { act_Add_DONMUAHANG, act_EDIT_DATAODONMUAHANG } from '../../action';
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
const key = 'updatable';
class donmuahang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                key: 2,
                ID: 2,
                tieude: '',
                tendoanhnghiep: '',
                tensanpham: '',
                ngaynhanhang: '',
                tags: [''],
                tennguoidaidien: '',
                email: '',
                chitiet: '',
                ngaytao: '',
                dondathang: [''],
                tinhtrang: 0,
                mota: '',
                sdt: '',
                soluong: '',
                donvitinh: '',
                dataodonhang: false,
            }
        }
    }

    componentDidMount() {
        var temp = this.props.data.find(e => Number(e.ID) === Number(this.props.match.params.id))
        temp.ngaynhanhang = moment(temp.ngaynhanhang)
        console.log(temp)
        this.setState({
            data: temp
        })
        this.formRef.current.setFieldsValue(temp)
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }
    onFinish = (values) => {

        var ngaynhanhang = new Date(values.ngaynhanhang.toString()).toLocaleDateString();

        var ngaythanhtoan = new Date(values.ngaythanhtoan.toString()).toLocaleDateString();
        values.ngaynhanhang = ngaynhanhang;
        values.ngaythanhtoan = ngaythanhtoan;
        values.key = values.ID;
        values.tinhtrang = 0
        values.chitiet = `${values.soluong} ${values.donvitinh}`
        values.tags = ['Đang đợi phê duyệt']


        console.log('Received values of form: ', values);

        message.loading({ content: 'Đang thực hiện thao tác...', key });
        setTimeout(() => {
            message.success({ content: 'Thêm dữ liệu thành công!', key, duration: 2 });
            this.props.history.goBack();
        }, 2000);
        this.props.onComplete(this.props.match.params.id)
        this.props.onAdd(values)
    };
    formRef = React.createRef();
    render() {
        const temp = `< Đơn mua hàng`
        return (
            <Content style={{ margin: '0 16px' }}>
                <Row style={{ marginTop: 15, marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Title style={{ color: '#002140' }} level={3}><a style={{ color: '#002140' }} onClick={this.goBack} href="/#">{temp}</a></Title>
                    </Col>
                </Row>
                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px' }}>
                    <Form ref={this.formRef}
                        name="validate_other"
                        {...formItemLayout}
                        onFinish={(e) => this.onFinish(e)}
                        layout="vertical"
                        validateMessages={validateMessages}
                    >

                        <Row>
                            <Col span={24}>
                                <Title>Thông tin đơn hàng</Title>
                            </Col>
                            <Col span={5}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Mã đơn hàng" required>
                                    <Form.Item name="ID" label="Mã đơn hàng" rules={[{ required: true }]} noStyle>
                                        <Input disabled placeholder="Eg.100" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Người phụ trách" required>
                                    <Form.Item name="nguoiphutrach" noStyle label="Người phụ trách" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.Người phụ trách" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên hàng" required>
                                    <Form.Item name="tensanpham" noStyle label="Tên hàng" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.100" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>

                            <Col span={4}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Số lượng" required>
                                    <Form.Item name="soluong" noStyle label="Số lượng" rules={[{ required: true, type: 'number' }]}>
                                        <InputNumber style={{ width: '100%' }} placeholder="Eg.100" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Đơn vị tính" required>
                                    <Form.Item name="donvitinh" noStyle label="Đơn vị tính" rules={[{ required: true }]}>
                                        <Input placeholder="Eg.Đơn giá" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Đơn giá" required>
                                    <Form.Item name="dongia" noStyle label="Đơn giá" rules={[{ required: true, type: 'number' }]}>
                                        <InputNumber style={{ width: '100%' }} placeholder="Eg.Đơn giá" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tổng tiền" required>
                                    <Form.Item name="tongtien" noStyle label="Tổng tiền" rules={[{ required: true, type: 'number' }]}>
                                        <InputNumber style={{ width: '100%' }} placeholder="Eg.Tổng tiền" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Ngày nhận" required>
                                    <Form.Item name="ngaynhanhang" label="Ngày Nhận" noStyle rules={[{ required: true }]}>
                                        <DatePicker placeholder="Chọn ngày" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Ngày thanh toán" required>
                                    <Form.Item name="ngaythanhtoan" label="Ngày thanh toán" noStyle rules={[{ required: true }]}>
                                        <DatePicker placeholder="Chọn ngày" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Title>Thông tin nhà cung cấp</Title>
                            </Col>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Tên nhà cung cấp" required>
                                    <Form.Item name="tennhacungcap" noStyle label="Tên nhà cung cấp" rules={[{ required: true }]}>
                                        <Input placeholder="Eg." />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Email" required>
                                    <Form.Item name="emailncc" noStyle label="Email" rules={[{ required: true, type: 'email' }]}>
                                        <Input placeholder="Eg." />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Số điện thoại" required>
                                    <Form.Item name="sdtncc" noStyle label="Số điện thoại" rules={[{ required: true, type: 'number' }]}>
                                        <InputNumber style={{ width: '100%' }} placeholder="Eg." />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item wrapperCol={{ sm: 24 }} style={{ width: "90%" }} label="Người đại diện" required>
                                    <Form.Item name="nguoidaidien" noStyle label="Người đại diện" rules={[{ required: true }]}>
                                        <Input placeholder="Eg." />
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

const mapStateToProps = state => {
    return {
        data: state.YCMH_PHONGBAN
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (DMH) => {
            dispatch(act_Add_DONMUAHANG(DMH))
        },
        onComplete: (YCMH) => {
            dispatch(act_EDIT_DATAODONMUAHANG(YCMH))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(donmuahang);