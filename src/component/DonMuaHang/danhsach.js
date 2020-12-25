import React, { Component } from 'react';
import { Table, Tag, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import Search from '../search';
import Subtable from '../subtable'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const columns = [
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
        dataIndex: 'ID',
        key: 'ID',
        render: ID => <Link to={`/donmuahang/${ID}`}><img src="./edit.svg" alt="" /></Link>,
    },
];

const sub_columns = [
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
];

class danhsach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            SearchData: this.props.data,
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
            SearchData: data
        })
    }
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Title style={{ marginLeft: 30, color: '#002140', marginTop: 15 }} level={3}>Danh sách đơn mua hàng</Title>


                <Row style={{ marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Search target="title" data={this.state.data} getSearchData={(e) => this.getSearchData(e)} />
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px', boxShadow: 'inherit' }}>
                    <Table
                        expandRowByClick={true}
                        columns={columns}
                        expandable={{
                            expandedRowRender: record =>
                                <Subtable columns={sub_columns} data={record} renderStep={true} />
                            ,
                            rowExpandable: record => record.name !== 'Not Expandable',
                        }}
                        dataSource={this.state.SearchData}
                    />
                </div>
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