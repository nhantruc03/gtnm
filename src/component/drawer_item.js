import { Col, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Content } from 'antd/lib/layout/layout';
import React, { Component } from 'react';

class drawer_item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.data.id,
            checked:false
        };
    }
    onChange = (e) => {
        this.setState({
            checked: true
        })
        this.props.onSelect(e);
    }
    render() {
        return (
            <Content onClick={()=>this.onChange(this.state.value)} style={{ padding: 5, border: `${this.props.select}`, margin: '10px', borderRadius: '6px' }}>
                <Row style={{ marginTop: '10px' }}>
                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Avatar size={85} src={this.props.data.src} ></Avatar>
                    </Col>
                    <Col span={12}>
                        <div>
                            <p className="ncc_label">Tên <span className="ncc_content">TNHH ABC</span></p>
                            <p className="ncc_label">Sđt <span className="ncc_content">123456789</span></p>
                            <p className="ncc_label">Email <span className="ncc_content">Example@gmail.com</span></p>
                            <p className="ncc_label">Website <span className="ncc_content">Example.com</span></p>
                            <div style={{ float: 'right' }}>
                                <p className="ncc_label">Báo giá <span className="ncc_content">30.000.000 VNĐ</span></p>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                        <div className="radio" style={{ marginTop: '40px', marginLeft: '100%' }}>
                            <label >
                                <input checked={this.props.data.select} onChange={()=>this.onChange(this.state.value)} type="radio" name="test" value={this.state.value} />
                            </label>
                        </div>
                    </Col>
                </Row>

            </Content>
        );
    }
}

export default drawer_item;