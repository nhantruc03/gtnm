import React, { Component } from "react";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import {
  Form,
  InputNumber,
  Button,
  Upload,
  Row,
  Col,
  Input,
  DatePicker,
  message,
} from "antd";
import {
  InboxOutlined,
  LeftOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { act_Add_YCMH_PHONGBAN } from "../../../action";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);
  e.fileList.forEach((a) => {
    console.log(a.uid);
  });
  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const validateMessages = {
  // eslint-disable-next-line
  required: "Cần nhập ${label}!",
  types: {
    // eslint-disable-next-line
    email: "${label} phải thuộc dạng xxx@gxxx.xxx!",
    // eslint-disable-next-line
    number: "${label} phải là số!",
  },
  number: {
    // eslint-disable-next-line
    range: "${label} phải thuộc khoảng ${min} và ${max}",
  },
};
const temp = `Thêm yêu cầu mới`;
const key = "updatable";
class ThemMoiYeuCau extends Component {
  goBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };
  onFinish = (values) => {
    var chititet = `${values.soluong} ${values.donvitinh}`;

    var ngaynhanhang = new Date(
      values.ngaynhanhang.toString()
    ).toLocaleDateString();

    var ngaytao = new Date().toLocaleDateString();
    values.ngaynhanhang = ngaynhanhang;
    values.ngaytao = ngaytao;

    var dondathang = [];
    if (values.dragger !== undefined) {
      values.dragger.forEach((e) => {
        dondathang.push(e.uid);
      });
    }

    var data = { ...values, chitiet: chititet, dondathang: dondathang };

    console.log("Received values of form: ", data);

    message.loading({ content: "Đang thực hiện thao tác...", key });
    setTimeout(() => {
      message.success({
        content: "Thêm dữ liệu thành công!",
        key,
        duration: 2,
      });
      this.props.history.goBack();
    }, 2000);

    this.props.onAdd(data);
  };
  render() {
    return (
      <Content style={{ margin: "0 16px" }}>
        <Row style={{ marginTop: 15, marginLeft: 30, marginRight: 30 }}>
          <Col span={8}>
            <Title style={{ color: "#002B6D" }} level={3}>
              <LeftOutlined onClick={this.goBack} href="/#" />
              <a style={{ color: "#002B6D" }} onClick={this.goBack} href="/#">
                {temp}
              </a>
            </Title>
          </Col>
        </Row>

        <div
          className="site-layout-background"
          style={{
            padding: "16px 24px 16px 24px",
            margin: 30,
            marginTop: 10,
            minHeight: 360,
            borderRadius: "10px",
          }}
        >
          <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={(e) => this.onFinish(e)}
            layout="vertical"
            validateMessages={validateMessages}
          >
            <Row>
              <Col span={24}>
                <Title level={4}>Tiêu đề</Title>
              </Col>
              <Col span={24}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Tiêu đề"
                  required
                >
                  <Form.Item
                    name="tieude"
                    noStyle
                    label="Tiêu đề"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Eg.Tiêu đề" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Title level={4}>Thông tin khách hàng</Title>
              </Col>
              <Col span={12}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Tên doanh nghiệp"
                  required
                >
                  <Form.Item
                    name="tendoanhnghiep"
                    noStyle
                    label="Tên doanh nghiệp"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Eg.Tên doanh nghiệp" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Tên người đại diện"
                  tooltip={{
                    title: "Tooltip with customize icon",
                    icon: <InfoCircleOutlined />,
                  }}
                >
                  <Form.Item
                    name="tennguoidaidien"
                    label="Tên người đại diện"
                    noStyle
                  >
                    <Input placeholder="Eg.Lisa" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Email"
                  required
                >
                  <Form.Item
                    name="email"
                    noStyle
                    label="Email"
                    rules={[{ required: true, type: 'email' }]}
                  >
                    <Input placeholder="Eg.100" />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Số điện thoại"
                  required
                >
                  <Form.Item
                    name="sdt"
                    noStyle
                    label="Số điện thoại"
                    rules={[{ required: true, type: "number" }]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      placeholder="Eg.100"
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Title level={4}>Thông tin yêu cầu </Title>
              </Col>
              <Col span={7}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Tên sản phẩm"
                  required
                >
                  <Form.Item
                    name="tensanpham"
                    noStyle
                    label="Tên sản phẩm"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Eg.Tên sản phẩm" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item
                  wrapperCol={{ sm: 21 }}
                  style={{ width: "90%" }}
                  label="Số lượng"
                  required
                >
                  <Form.Item
                    name="soluong"
                    noStyle
                    label="Số lượng"
                    rules={[{ required: true }]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      placeholder="Eg.Đơn giá"
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Đơn vị tính"
                  required
                >
                  <Form.Item
                    name="donvitinh"
                    noStyle
                    label="Đơn vị tính"
                    rules={[{ required: true, type: "number" }]}
                  >
                    <InputNumber
                      style={{ width: "100%" }}
                      placeholder="Eg.Tổng tiền"
                    />
                  </Form.Item>
                </Form.Item>
              </Col>

              <Col span={7}>
                <Form.Item
                  wrapperCol={{ sm: 22 }}
                  style={{ width: "90%" }}
                  label="Ngày nhận hàng"
                  required
                >
                  <Form.Item
                    name="ngaynhanhang"
                    label="Ngày nhận hàng"
                    noStyle
                    rules={[{ required: true }]}
                  >
                    <DatePicker placeholder="Chọn ngày" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Mô tả yêu cầu"
                  required
                >
                  <Form.Item
                    name="motayeucau"
                    noStyle
                    label="Mô tả yêu cầu"
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea rows={6} placeholder="Eg.mô tả yêu cầu" />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  wrapperCol={{ sm: 24 }}
                  style={{ width: "90%" }}
                  label="Đơn đặt hàng liên quan"
                >
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                  >
                    <Upload.Dragger
                      style={{ width: "100%" }}
                      name="files"
                      action="/upload.do"
                    >
                      <p className="ant-upload-text">
                        Thả tệp vào đây hoặc chọn từ trình duyệt{" "}
                      </p>
                      <p className="ant-upload-hint">
                        VD: pdf, docs, exls, ...{" "}
                      </p>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
            <br></br>
            <Form.Item wrapperCol={{ span: 24, offset: 9 }}>
              <Button
                onClick={this.goBack}
                className="back"
                style={{ width: 150, marginRight: 20 }}
              >
                Hủy
              </Button>
              <Button htmlType="submit" className="add" style={{ width: 150 }}>
                Tạo mới
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (YCMH) => {
      dispatch(act_Add_YCMH_PHONGBAN(YCMH));
    },
  };
};

export default connect(null, mapDispatchToProps)(ThemMoiYeuCau);
