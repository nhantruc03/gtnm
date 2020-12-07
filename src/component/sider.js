import { Layout, Menu } from 'antd';
import React from 'react';
import {
    FormOutlined,
    SketchOutlined,
    CopyOutlined,
} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { Link, Redirect } from 'react-router-dom';

const { Sider } = Layout;

const { SubMenu } = Menu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    handleClick = (e) => {
        console.log(e)
        if (e.key === "3") {
            return (
                <Redirect to="/1" />
            )
        }
    }

    render() {
        const { collapsed } = this.state;
        return (
            <Sider width={250} collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{backgroundColor:'#002B6D'}}>
                <Title className="logo" style={{ color: 'white', textAlign: 'center', marginTop: 15 }} level={3}>LOGO</Title>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{backgroundColor:'#002B6D'}}>
                    <SubMenu key="sub1" icon={<FormOutlined />} title="Quản lý yêu cầu mua hàng">
                        <Menu.Item key="3">
                            <Link to="/yeucauphongban" className="nav-text">Yêu cầu phòng ban</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/yeucaudoanhnghiep" className="nav-text">Yêu cầu doanh nghiệp</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<CopyOutlined />} title="Quản lý đơn mua hàng">
                        <Menu.Item key="6">
                            <Link to="/danhsach-donmuahang">Danh sách</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/lich">Lịch</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<SketchOutlined />}>
                        <Link to="/quanlymoichaogia">Quản lý mời chào giá</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
export default SiderDemo;

