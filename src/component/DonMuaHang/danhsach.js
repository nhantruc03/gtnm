import React, { Component } from 'react';
import { Table, Tag, Row, Col, Tooltip, Form, Modal } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import Search from '../search';
import Subtable from '../subtable'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

class danhsach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            SearchData: this.props.data,
            modal2Visible: false,
            model: { dondathang: [] },
            columns: [
                {
                    title: 'ID', dataIndex: 'ID', key: 'ID',
                    sorter: (a, b) => a.ID - b.ID,
                },
                {
                    title: 'Nhà cung cấp', dataIndex: 'tennhacungcap', key: 'tennhacungcap',
                    sorter: (a, b) => a.tennhacungcap.length - b.tennhacungcap.length,
                },
                {
                    title: 'Sản phẩm', dataIndex: 'tensanpham', key: 'tensanpham',
                    sorter: (a, b) => a.tensanpham.length - b.tensanpham.length,
                },
                {
                    title: 'Số lượng', dataIndex: 'chitiet', key: 'chitiet',
                    sorter: (a, b) => a.soluong - b.soluong,
                },
                {
                    title: 'Đơn giá', dataIndex: 'dongia', key: 'dongia',
                    sorter: (a, b) => a.dongia - b.dongia,
                },
                {
                    title: 'Thành tiền', dataIndex: 'tongtien', key: 'tongtien',
                    sorter: (a, b) => a.tongtien - b.tongtien,
                },
                {
                    title: 'Trạng thái',
                    dataIndex: 'tags',
                    key: 'tags',
                    render: tags => (
                        <span>
                            {tags.map(tag => {
                                let color = '';
                                if (tag === 'Đang đợi phê duyệt') {
                                    color = 'yellow'
                                }
                                else if (tag === 'Đã phê duyệt') {
                                    color = 'green'
                                }
                                else if (tag === 'Đã từ chối') {
                                    color = 'red'
                                }
                                return (
                                    <Tag className={`${color}`} key={tag}>
                                        {tag}
                                    </Tag>
                                );
                            })}
                        </span>
                    ),
                },
                {
                    title: 'Hành động',
                    dataIndex: '',
                    key: 'x',
                    render: ID =>
                        <div>
                            <Tooltip placement="bottom" title='Xem'>
                                <a href="/#" onClick={(e) => { e.preventDefault(); this.setModal2Visible(true, ID) }}><img src="./View.png" alt="" /></a>
                            </Tooltip>
                            {/* <Tooltip placement="bottom" title='Tạo đơn đặt hàng'>
                                < Link to={`/donmuahang/${ID.ID}`} > <img src="./edit.svg" alt="" /></Link >
                            </Tooltip> */}
                        </div>,
                },
            ],
            sub_columns: [
                { title: 'ID', dataIndex: 'ID', key: 'ID' },
                { title: 'Email', dataIndex: 'emailncc', key: 'emailncc' },
                { title: 'Số điện thoại', dataIndex: 'sdtncc', key: 'sdtncc' },
                { title: 'Ngày nhận', dataIndex: 'ngaynhanhang', key: 'ngaynhanhang' },
                { title: 'Ngày thanh toán', dataIndex: 'ngaythanhtoan', key: 'ngaythanhtoan' },
                {
                    title: 'tags',
                    dataIndex: 'tags',
                    key: 'tags',
                    render: tags => (
                        <span>
                            {tags.map(tag => {
                                let color = '';
                                if (tag === 'Đang đợi phê duyệt') {
                                    color = 'yellow'
                                }
                                else if (tag === 'Đã phê duyệt') {
                                    color = 'green'
                                }
                                else if (tag === 'Đã từ chối') {
                                    color = 'red'
                                }
                                return (
                                    <Tag className={`${color}`} key={tag}>

                                    </Tag>
                                );
                            })}
                        </span>
                    ),
                },
                {
                    title: 'Hành động',
                    dataIndex: '',
                    key: 'x',
                    render: ID => <Link to={`/donmuahang/${ID}`}><img src="./edit.svg" alt="" /></Link>,
                },
            ],
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         data: this.props.data.filter(e => e.tags.indexOf('Đã phê duyệt') > -1),
    //         SearchData: this.props.data.filter(e => e.tags.indexOf('Đã phê duyệt') > -1),
    //     })
    // }

    getSearchData = (data) => {
        console.log(data)
        this.setState({
            SearchData: data,

        })
    }
    setModal2Visible(modal2Visible, val) {
        console.log(val)
        this.setState({ modal2Visible });
        if (val !== undefined) {
            var temp = this.props.data.find(e => e.ID === val)
            console.log(temp)
            this.setState({
                model: val
            })
            console.log(val)
        }
        console.log(this.state.model)

    }
    formRef = React.createRef();
    renderModel = (val) => {
        console.log(this.state.model)
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
                        <Title>Thông tin đơn mua hàng</Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Mã đơn hàng">
                            <p>{val.ID}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Người phụ trách">
                            <p>{val.nguoiphutrach}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Tên hàng">
                            <p>{val.tensanpham}</p>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Số lượng" >
                            <p>{val.soluong}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Đơn giá" >
                            <p>{val.dongia}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Thành tiền" >
                            <p>{val.thanhtien}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Ngày nhận hàng" >
                            <p>{val.ngaynhanhang}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Thanh toán" >
                            <p>{val.ngaythanhtoan}</p>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Title>Thông tin nhà cung cấp</Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Nhà cung cấp">
                            <p>{val.tennhacungcap}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Email">
                            <p>{val.emailncc}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Số điện thoại">
                            <p>{val.sdtncc}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ sm: 24 }} label="Người đại diện">
                            <p>{val.nguoidaidien}</p>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Title style={{ marginLeft: 30, color: '#002140', marginTop: 15 }} level={3}>Danh sách đơn mua hàng</Title>

                <Row style={{ marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Search columns={this.state.columns} target="title" data={this.state.data} getSearchData={(e) => this.getSearchData(e)} />
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px', boxShadow: 'inherit' }}>
                    <Table
                        expandRowByClick={true}
                        expand
                        columns={this.state.columns}
                        expandable={{
                            expandedRowRender: record =>
                                <Subtable columns={this.state.sub_columns} data={record} renderStep={true} />
                            ,
                            rowExpandable: record => record.name !== 'Not Expandable',
                        }}
                        dataSource={this.state.SearchData}
                    />
                </div>

                <Modal
                    title='Chi tiết đơn mua hàng'
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

export default connect(mapStateToProps, null)(danhsach);