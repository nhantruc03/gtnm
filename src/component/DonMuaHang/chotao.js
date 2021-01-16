import React, { Component } from 'react';
import { Table, Tag, Row, Col, Tooltip, Modal, Form } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import Search from '../search';
import Subtable from '../subtable'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

class chotao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SearchData: [],
            data: [],
            modal2Visible: false,
            model: { dondathang: [] },
            columns: [
                {
                    title: 'ID', dataIndex: 'ID', key: 'ID',
                    sorter: (a, b) => a.ID - b.ID,
                },
                {
                    title: 'Tiêu đề', dataIndex: 'tieude', key: 'tieude',
                    sorter: (a, b) => a.tieude.length - b.tieude.length,
                },
                {
                    title: 'Doanh nghiệp', dataIndex: 'tendoanhnghiep', key: 'tendoanhnghiep',
                    sorter: (a, b) => a.tendoanhnghiep.length - b.tendoanhnghiep.length,
                },
                {
                    title: 'Sản phẩm', dataIndex: 'tensanpham', key: 'tensanpham',
                    sorter: (a, b) => a.tensanpham.length - b.tensanpham.length,
                },
                {
                    title: 'Ngày nhận', dataIndex: 'ngaynhanhang', key: 'ngaynhanhang',
                    sorter: (a, b) => new Date(a.ngaynhanhang).getTime() - new Date(b.ngaynhanhang).getTime(),
                },
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
                                        {tag.toUpperCase()}
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
                                <a href="/#" onClick={(e) => { e.preventDefault();this.setModal2Visible(true, ID)}}><img src="./View.png" alt="" /></a>
                            </Tooltip>
                            <Tooltip placement="bottom" title='Tạo đơn đặt hàng'>
                                <Link to={`/donmuahang/${ID.ID}`}><img src="./edit.svg" alt="" /></Link>
                            </Tooltip>
                        </div>,
                },
            ],
            sub_columns: [
                { title: 'ID', dataIndex: 'ID', key: 'ID' },
                { title: 'Người đại diện', dataIndex: 'tennguoidaidien', key: 'tennguoidaidien' },
                { title: 'Liên hệ', dataIndex: 'email', key: 'email' },
                { title: 'Chi tiết', dataIndex: 'chitiet', key: 'chitiet' },
                { title: 'Ngày tạo', dataIndex: 'ngaytao', key: 'ngaytao' },
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
                                        {tag.toUpperCase()}
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
                    render: () =>
                        <a href="/#"><img src="./edit.svg" alt="" /></a>,
                },
            ],
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data.filter(e => (e.tags.indexOf('Đã phê duyệt') > -1) && (e.dataodonhang === false)),
            SearchData: this.props.data.filter(e => (e.tags.indexOf('Đã phê duyệt') > -1) && (e.dataodonhang === false)),
        })
    }
    getSearchData = (data) => {
        console.log(data)
        this.setState({
            SearchData: data
        })
    }
    setModal2Visible(modal2Visible, val) {
        console.log(this.state.data)
        console.log('value:'+val)
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
        console.log(val.tennguoidaidien)
        console.log(val.tendoanhnghiep)
        console.log(val.email)
        console.log(val.sdt)
        console.log(val.tensanpham)
        console.log(val.ngaynhanhang)
        console.log(val.soluong)
        console.log(val.donvitinh)
        console.log(val.ghichu)
        console.log(val.dondathang)
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
                        <Title>Thông tin khách hàng</Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Tên người đại diện">
                            <p>{val.tennguoidaidien}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Tên doanh nghiệp">
                            <p>{val.tendoanhnghiep}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Email">
                            <p>{val.email}</p>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Số điện thoại" >
                            <p>{val.sdt}</p>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Title>Thông tin yêu cầu</Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Tên sản phẩm">
                            <p>{val.tensanpham}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Ngày nhận hàng">
                            <p>{val.ngaynhanhang}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Số lượng">
                            <p>{val.soluong}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Đơn vị tính">
                            <p>{val.donvitinh}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Ghi chú">
                            <p>{val.ghichu}</p>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Đơn đặt hàng">
                            <ul>
                                {val.dondathang.map((e) =>
                                    <li key={e}>
                                        <a href="/#">{e}</a>
                                    </li>)}
                            </ul>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Title style={{ marginLeft: 30, color: '#002140', marginTop: 15 }} level={3}>Danh sách yêu cầu chờ tạo đơn hàng</Title>

                <Row style={{ marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Search columns={this.state.columns} target="tieude" data={this.state.data} getSearchData={(e) => this.getSearchData(e)} />
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px' }}>
                    <Table
                        expandRowByClick={true}
                        columns={this.state.columns}
                        expandable={{
                            expandedRowRender: record =>
                                <Subtable columns={this.state.sub_columns} data={record} />
                            ,
                            rowExpandable: record => record.name !== 'Not Expandable',
                        }}
                        dataSource={this.state.SearchData}
                    />
                </div>
                <Modal
                    title='Chi tiết yêu cầu mua hàng'
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
        data: state.YCMH_PHONGBAN
    }
}

export default connect(mapStateToProps, null)(chotao);


