import React from "react";
import { Modal, Button } from "react-rainbow-components";
import { Form } from "antd";
import InputFormTextArea from "../../common/renderForm/inputFormTextArea";

export default function FormLyDoKhongDuyet({
  isVisible,
  cancel,
  form,
  onSave,
}) {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 50 },
    },
  };
  const onfinish = (value) => {
    onSave(value);
  };
  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={cancel}
      title="Lý do bài viết không được duyệt"
      style={{ width: "1000px" }}
      footer={
        <div
          className="rainbow-flex rainbow-justify_spread"
          style={{ textAlign: "end" }}
        >
          <Form
            {...formItemLayout}
            form={form}
            name="basic"
            onFinish={onfinish}
            className="test-alight"
          >
            <InputFormTextArea
              label="Lý do"
              showLabel={true}
              name="lyDoKhongDuyet"
              validate={true}
              textValidate="Vui lòng nhập"
            />
          </Form>
          <Button onClick={() => form.submit()}>Gửi</Button>
        </div>
      }
    ></Modal>
  );
}
