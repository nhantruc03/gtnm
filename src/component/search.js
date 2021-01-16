import { Col, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { Component } from 'react';
import Select from 'react-select';
var Options = [
];
class s extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SearchKey: ''
        }
    }
    onChange = (e) => {
        if (this.state.SearchKey !== '') {
            var ketqua = [];
            if (this.props.data != null) {
                this.props.data.forEach((item) => {

                    if (item[this.state.SearchKey].toString().toLowerCase().indexOf(e.target.value) !== -1) {
                        ketqua.push(item);
                    }

                })
            }
            this.props.getSearchData(ketqua)
        }
    }

    componentDidMount() {
        this.props.columns.forEach(e => {
            var o = {
                value: e.key,
                label: e.title
            }
            Options.push(o)
        })
    }

    onSelect = (e) => {
        this.setState({
            SearchKey: e.value
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Search placeholder="Tìm kiếm" style={{ marginBottom: 15, borderTopLeftRadius: '10px' }} onChange={(e) => this.onChange(e)}></Search>

                    </Col>
                    <Col span={12}>
                        <Select
                            name="Options"
                            onChange={(e) => this.onSelect(e)}
                            options={Options}
                        />
                    </Col>

                </Row>

            </div>

        );
    }
}

export default s;