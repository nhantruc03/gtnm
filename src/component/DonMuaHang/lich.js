import React, { Component } from 'react';
import { Form, Calendar, Row, Col, Tag, Modal} from 'antd';
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
                defaultValue={val}
            >
                <Row>
                    <Col span={24}>
                        <Title>Chi tiết đơn đặt hàng</Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Mã đơn hàng" >
                            <p className="special">{val.ID}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Người phụ trách" >
                            <p className="special">{val.nguoiphutrach}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Tên hàng" >
                            <p className="special">{val.tensanpham}</p>
                        </Form.Item>
                    </Col>

                 
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Đơn vị tính" >
                            <p className="special">{val.donvitinh}</p>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Số lượng" >
                            <p className="special">{val.soluong}</p>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Đơn giá" >
                            <p className="special">{val.dongia}</p>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Tổng tiền" >
                            <p className="special">{val.tongtien}</p>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Ngày nhận" >
                            <p className="special">{val.ngaynhanhang}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Ngày thanh toán" >
                            <p className="special">{val.ngaythanhtoan}</p>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Title>Thông tin nhà cung cấp</Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Tên nhà cung cấp" >
                            <p className="special">{val.tennhacungcap}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Email" >
                            <p className="special">{val.emailncc}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Số điện thoại" >
                            <p className="special">{val.sdtncc}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Người đại diện" >
                            <p className="special">{val.nguoidaidien}</p>
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
                    footer={false}
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