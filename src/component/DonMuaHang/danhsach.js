import React, { Component } from 'react';
import { Table, Tag, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import Search from '../search';
import Subtable from '../subtable'
import { connect } from 'react-redux';
const columns = [
    { title: 'ID', dataIndex: 'ID', key: 'ID' },
    { title: 'Tiêu đề', dataIndex: 'tieude', key: 'tieude' },
    { title: 'Doanh nghiệp', dataIndex: 'tendoanhnghiep', key: 'tendoanhnghiep' },
    { title: 'Sản phẩm', dataIndex: 'tensanpham', key: 'tensanpham' },
    { title: 'Ngày nhận', dataIndex: 'ngaynhanhang', key: 'ngaynhanhang' },
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
        render: ID => <a href={`/donmuahang/${ID}`}><img src="./edit.svg" alt="" /></a>,
    },
];

const sub_columns = [
    { title: 'ID', dataIndex: 'ID', key: 'ID' },
    { title: 'Người đại diện', dataIndex: 'nguoidaidien', key: 'nguoidaidien' },
    { title: 'Liên hệ', dataIndex: 'lienhe', key: 'lienhe' },
    { title: 'Chi tiết', dataIndex: 'chitiet', key: 'chitiet' },
    { title: 'Ngày nhận', dataIndex: 'date', key: 'date' },
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
        render: ID => <a href={`/donmuahang/${ID}`}>asd</a>,
    },
];

// const data = [
//     {
//         key: 1,
//         ID: 2,
//         title: 'John Brown',
//         dn: 32,
//         product: 'New York No. 1 Lake Park',
//         date: '03/12/2020',
//         tags: ['Đã phê duyệt'],
//         nguoidaidien: 'Nguyen Van A',
//         lienhe: 'example@gmail.com',
//         chitiet: '1000 tấn',
//         tinhtrang: 2,
//     },
//     {
//         key: 2,
//         ID: 5,
//         title: 'John Brown',
//         dn: 32,
//         product: 'New York No. 1 Lake Park',
//         date: '03/12/2020',
//         tags: ['Đã phê duyệt'],
//         nguoidaidien: 'Nguyen Van A',
//         lienhe: 'example@gmail.com',
//         chitiet: '1000 tấn',
//         tinhtrang: 3,
//     },
// ];


class danhsach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            SearchData: this.props.data,
        }
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
                <Title style={{ marginLeft: 30, color: '#002140', marginTop: 15 }} level={3}>Danh sách đơn mua hàng</Title>


                <Row style={{ marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Search target="title" data={this.state.data} getSearchData={(e) => this.getSearchData(e)} />
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px' }}>
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