import React, { Component } from 'react';
import { Button, Table, Tag, Row, Col } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import Search from '../../search';
import Subtable from '../../subtable'
import { Link } from 'react-router-dom';
const columns = [
    { title: 'ID', dataIndex: 'ID', key: 'ID' },
    { title: 'Tiêu đề', dataIndex: 'title', key: 'title' },
    { title: 'Doanh nghiệp', dataIndex: 'dn', key: 'dn' },
    { title: 'Sản phẩm', dataIndex: 'product', key: 'product' },
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
        render: () => <a href="/#"><img src="./edit.svg" alt="" /></a>,
    },
];

const data = [
    {
        key: 1,
        ID: 1,
        title: 'John Brown',
        dn: 32,
        product: 'New York No. 1 Lake Park',
        date: '03/12/2020',
        tags: ['Đang đợi phê duyệt'],
        nguoidaidien: 'Nguyen Van A',
        lienhe: 'example@gmail.com',
        chitiet: '1000 tấn',
    },
    {
        key: 2,
        ID: 2,
        title: 'John Brown',
        dn: 32,
        product: 'New York No. 1 Lake Park',
        date: '03/12/2020',
        tags: ['Đã phê duyệt'],
        nguoidaidien: 'Nguyen Van A',
        lienhe: 'example@gmail.com',
        chitiet: '1000 tấn',
    },
    {
        key: 3,
        ID: 3,
        title: 'John Brown',
        dn: 32,
        product: 'New York No. 1 Lake Park',
        date: '03/12/2020',
        tags: ['Đã từ chối'],
        nguoidaidien: 'Nguyen Van A',
        lienhe: 'example@gmail.com',
        chitiet: '1000 tấn',
    },
];

class YeuCauPhongBan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SearchData: data,
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
                <Title style={{ marginLeft: 30, color: '#002140', marginTop: 15 }} level={3}>Yêu cầu phòng ban</Title>


                <Row style={{ marginLeft: 30, marginRight: 30 }}>
                    <Col span={8}>
                        <Search target="title" data={data} getSearchData={(e) => this.getSearchData(e)} />
                    </Col>
                    <Col span={16}>
                        <Button className="add" style={{ float: "right" }} >
                            <Link to='/themmoiyeucau'>Thêm yêu cầu</Link>
                        </Button>
                    </Col>
                </Row>

                <div className="site-layout-background" style={{ padding: 24, margin: 30, marginTop: 10, minHeight: 360, borderRadius: '10px' }}>
                    <Table
                        columns={columns}
                        expandable={{
                            expandedRowRender: record =>
                                // <Table
                                //     columns={sub_columns}
                                //     dataSource={data}
                                //     pagination={false}
                                // />
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

export default YeuCauPhongBan;


