import React, { useState } from "react";
import { Form, Divider } from "antd";
import { Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  thongBao,
  thongBaoError,
} from "./../../common/renderThongBao/renderThongBaoCommon";
import * as message from "./../../constants/Message";
import * as noiDungThongBao from "./../../constants/noiDungThongBao";
import * as actDanhMuc from "./.././../actions/danhmuc/actQuanLyDanhMuc";
import * as actQuanLyTaiKhoan from "./.././../actions/quanlytaikhoan/actQuanLyTaiKhoan";
import {
  valueRadioGioiTinh,
  optionPhanQuyenAdmin,
} from "./../../common/data_options_select/optionSelect.js";
import InputFormDefault from "../../common/renderForm/inputFormDefault";
import InputFormDatepiker from "../../common/renderForm/inputFormDatepiker";
import InputFormRadio from "../../common/renderForm/inputFormRadio";

import * as api from "./../../constants/api";
import InputFormSelect from "../../common/renderForm/inputFormSelect";
function FormQuanLyTaiKhoan({ onSave, form, checkShowPass = false }) {
  const item = useSelector((state) => state.quanlytaikhoan.item);
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
  const onFinishFailed = (errorInfo) => {};
  const dispatch = useDispatch();

  const account_current = useSelector(
    (state) => state.quanlylogin.account_current
  );

  const onChangeAvatar = (e, value) => {
    setUrl(e.target.value);
  };
  const [checkInputImg, setCheckInputImg] = useState(false);
  const [url, setUrl] = useState(false);
  const upload = () => {
    setCheckInputImg(!checkInputImg);
  };

  useState(() => {
    dispatch(actDanhMuc.getAllDanhMucQuyenRequest(account_current));
  }, []);

  const onfinish = (value) => {
    onSave(value);
  };

  const onChangeUser = (e, value) => {
    let data = {
      username: e.target.value,
    };
    dispatch(
      actQuanLyTaiKhoan.actCheckTaiKhoanTonTaiRequest(
        api.check_user_and_email,
        data
      )
    );
  };

  const onChangeEmail = (e, value) => {
    let data = {
      email: e.target.value,
    };
    dispatch(
      actQuanLyTaiKhoan.actCheckTaiKhoanTonTaiRequest(
        api.check_user_and_email,
        data
      )
    );
  };

  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="basic"
        onFinish={onfinish}
        onFinishFailed={onFinishFailed}
        className="test-alight"
      >
        <div className="row m-0 p-0">
          <div className="col-md-2 m-0 p-0">
            <Avatar
              onClick={() => upload()}
              size={64}
              src={url ? url : item?.img}
            />
          </div>
          <div className="col-md-10  m-0 p-0">
            {checkInputImg && <InputFormDefault name="img" width="100%" />}
          </div>
        </div>
        <Divider plain>T??i kho???n</Divider>
        <InputFormDefault label="id" name="id" hidden={true} />

        <InputFormDefault
          label="H??? v?? t??n"
          showLabel={true}
          name="fullname"
          validate={true}
        />

        <InputFormDefault
          label="CMND"
          showLabel={true}
          name="cmnd"
          validate={true}
        />

        <InputFormDatepiker
          label="Ng??y sinh"
          name="ngaySinh"
          showLabel={true}
          hasFeedback
          validateStatus="success"
          style={{ width: "100%" }}
        />
        <InputFormRadio
          label="Gi???i t??nh"
          showLabel={true}
          name="gioiTinh"
          options={valueRadioGioiTinh}
        />
        <InputFormDefault
          name="sdt"
          label="S??? ??i???n tho???i"
          showLabel={true}
          validate={true}
        />
        <InputFormDefault
          label="Email"
          showLabel={true}
          name="email"
          validate={true}
          textValidate="Vui l??ng nh???p"
          onBlur={onChangeEmail}
        />
        <InputFormDefault showLabel={true} label="Facebook" name="facebook" />

        <InputFormDefault
          label="T??n ????ng nh???p"
          showLabel={true}
          name="username"
          validate={true}
          textValidate="Vui l??ng nh???p"
          onBlur={onChangeUser}
        />

        {checkShowPass === false && (
          <InputFormDefault
            label="M???t kh???u"
            showLabel={true}
            name="password"
            password={true}
            validate={true}
            textValidate="Vui l??ng nh???p"
            minValue={
              (true, { min: 8, msg: "M???t kh???u ??t nh???t ph???i ????? 8 k?? t??? !" })
            }
          />
        )}

        {account_current &&
          account_current.roles &&
          account_current.roles.includes("ROLE_ADMIN") && (
            <InputFormSelect
              label="Quy???n"
              name="role"
              showLabel={true}
              options={optionPhanQuyenAdmin}
              search={true}
              defaultValue={[]}
            />
          )}

        <InputFormDefault name="ngayTaoBanGhi" hidden={true} />
      </Form>
    </>
  );
}

export default FormQuanLyTaiKhoan;
