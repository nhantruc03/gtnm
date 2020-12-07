import React, { Component } from 'react';

class subtable extends Component {
    render() {
        return (
            <div className="ant-table-wrapper">
                <div className="ant-spin-nested-loading">
                    <div className="ant-spin-container">
                        <div className="ant-table sub-table">
                            <div className="ant-table-container">
                                <div className="ant-table-content">
                                    <table style={{ tableLayout: 'auto' }} >
                                        <colgroup />
                                        <tbody className="ant-table-tbody">
                                            <tr data-row-key={1} className="ant-table-row ant-table-row-level-0">
                                                <td className="ant-table-cell invisible">1</td>
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[1].title}</strong><br />{this.props.data.nguoidaidien}</td>
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[2].title}</strong><br />{this.props.data.lienhe}</td>
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[3].title}</strong><br />{this.props.data.chitiet}</td>
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[4].title}</strong><br />{this.props.data.date}</td>
                                                <td className="ant-table-cell invisible">
                                                    <span>
                                                        <span className="ant-tag yellow">ĐANG ĐỢI PHÊ DUYỆT</span>
                                                    </span>
                                                </td>
                                                <td className="ant-table-cell invisible">
                                                    <a href="/#"><img src="./edit.svg" alt="" /></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default subtable;