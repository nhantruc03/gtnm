import React, { Component } from 'react';
import { Steps } from 'antd';

const { Step } = Steps;





class subtable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLink: 'invisible'
        }
    }

    renderStep = () => {
        if (this.props.renderStep === true) {
            return (
                <tr data-row-key={1} className="ant-table-row ant-table-row-level-0">
                    <td className="ant-table-cell invisible">1</td>
                    <td className="ant-table-cell sub" colSpan={4}>
                        <Steps size="small" current={this.props.data.tinhtrang}>
                            <Step title="Đặt hàng" />
                            <Step title="Nhận hàng" />
                            <Step title="Nhập kho" />
                            <Step title="Thanh toán" />
                        </Steps>
                    </td>

                    <td className="ant-table-cell invisible">
                        <span>
                            <span className="ant-tag yellow">ĐANG ĐỢI PHÊ DUYỆT</span>
                        </span>
                    </td>
                    <td className="ant-table-cell invisible">
                        <a href="/#"><img src="./edit.svg" alt="" /></a>
                    </td>
                </tr>
            )
        }
    }

    renderLink = () => {
        if (this.props.data.dondathang !== undefined) {
            return (
                this.props.data.dondathang.map((e,i) => {
                    return (
                        <li key={i}>
                            <a href="/#">{e}</a>
                        </li>
                    );
                })
            )
        }
    }

    componentDidMount() {
        if (this.props.data.dondathang !== undefined) {
            this.setState({
                hasLink: ""
            })
        }
    }

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
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[1].title}</strong><br />{this.props.data[this.props.columns[1].key]}</td>
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[2].title}</strong><br />{this.props.data.chitiet}</td>
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[3].title}</strong><br />{this.props.data.dongia}</td>
                                                <td className="ant-table-cell sub"><strong>{this.props.columns[4].title}</strong><br />{this.props.data.thue}</td>
                                                <td className={`ant-table-cell sub ${this.state.hasLink}`}>
                                                    <strong>Đơn đặt hàng</strong><br />
                                                    <ul>
                                                        {this.renderLink()}
                                                    </ul>
                                                </td>
                                                <td className="ant-table-cell invisible">
                                                    <a href="/#"><img src="./edit.svg" alt="" /></a>
                                                </td>
                                            </tr>
                                            {this.renderStep()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default subtable;