import Search from 'antd/lib/input/Search';
import React, { Component } from 'react';

class s extends Component {
    onChange = (e) => {
        var ketqua = [];
        if (this.props.data != null) {
            this.props.data.forEach((item) => {
                if (item[this.props.target].toString().toLowerCase().indexOf(e.target.value) !== -1) {
                    ketqua.push(item);
                }
            })
        }
        this.props.getSearchData(ketqua)
    }


    render() {
        return (
            <Search style={{ marginBottom: 15, borderTopLeftRadius: '10px' }} onChange={(e) => this.onChange(e)}></Search>
        );
    }
}

export default s;