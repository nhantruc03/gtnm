import React, { Component } from 'react';
import { Table, Tag, Row, Col, Tooltip } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import Search from '../search';
import Subtable from '../subtable'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const columns = [
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
        sorter: (a, b) => new Date(a.ngaynhanhang).getTime()- new Date(b.ngaynhanhang).getTime(),
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
        dataIndex: 'ID',
        key: 'ID',
        render: ID => (
            <Tooltip placement="bottom" title='Tạo đơn đặt hàng'>
                <Link to={`/donmuahang/${ID}`}><img src="./edit.svg" alt="" /></Link>
            </Tooltip>
        )
    },
];

const sub_columns = [
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
        render: () => <a href="/#"><img src="./edit.svg" alt="" /></a>,
    },
];

class chotao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SearchData: [],
            data: [],
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
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Title style={{ marginLeft: 30, color: '#002140', marginTop: 15 }} level={3}>Danh sách yêu cầu chờ tạo đơn hàng</Title>

                <Row style={{ marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Search columns={columns} target="tieude" data={this.state.data} getSearchData={(e) => this.getSearchData(e)} />
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px' }}>
                    <Table
                        expandRowByClick={true}
                        columns={columns}
                        expandable={{
                            expandedRowRender: record =>
                                <Subtable columns={sub_columns} data={record} />
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
        data: state.YCMH_PHONGBAN
    }
}

export default connect(mapStateToProps, null)(chotao);


