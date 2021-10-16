import React from "react";
import { Form, Button } from "antd";
import InputFormDefault from "../../common/renderForm/inputFormDefault";
function FormResetPass({ onResetPass, handelBack }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onResetPass}
    >
      <InputFormDefault
        label="Tài khoản"
        name="username"
        validate={true}
        showLabel={true}
      />

      <InputFormDefault
        label="CMND"
        name="cmnd"
        validate={true}
        showLabel={true}
      />

      <InputFormDefault
        label="Số điện thoại"
        name="sdt"
        addonBefore="+84"
        validate={true}
        showLabel={true}
      />

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Lấy lại mật khẩu
        </Button>
      </Form.Item>
      <div className="row px-3">
        <a onClick={() => handelBack()} className="ml-auto mb-0 text-sm">
          Quay lại
        </a>
      </div>
    </Form>
  );
}

export default FormResetPass;
