import React from "react";
import { Form } from "antd";
import { Button } from "react-rainbow-components";

import InputFormDefault from "../../common/renderForm/inputFormDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function FormDangNhap({ onFinish, resetMatKhau, openFormDangKy }) {
  return (
    <>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <InputFormDefault
          label="Tài khoản"
          name="username"
          validate={true}
          showLabel={true}
        />

        <InputFormDefault
          label="Mật khẩu"
          name="password"
          validate={true}
          showLabel={true}
          password={true}
        />

        <div className="form-check">
          <Form.Item>
            <Button
              type="submit"
              variant="border"
              className="rainbow-m-around_medium  float-right"
            >
              Đăng nhập
              <FontAwesomeIcon
                icon={faArrowRight}
                className="rainbow-m-left_medium"
              />
            </Button>

            <Button
              variant="border"
              className="rainbow-m-around_medium  float-left"
              onClick={() => openFormDangKy()}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="rainbow-m-left_medium"
              />
              Đăng ký
            </Button>
            {/* <button type="submit" className="btn btn-login float-right">
              Đăng nhập
            </button> */}
          </Form.Item>
        </div>

        <div className="row px-3">
          <a onClick={() => resetMatKhau()} className="ml-auto mb-0 text-sm">
            Quên mật khẩu?
          </a>
        </div>

        {/* <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item> */}
      </Form>
    </>
  );
}

export default FormDangNhap;
