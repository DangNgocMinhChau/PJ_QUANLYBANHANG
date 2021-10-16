import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "./../../../actions/quanlytaikhoan/actQuanLyTaiKhoan";
import ModalQuanLyTaiKhoan from "../../../components/quanlytaikhoan/modalQuanLyTaiKhoan";
import moment from "moment";
import FormDangNhap from "../../../components/login/formDangNhap";
import FormResetPass from "../../../components/login/formResetPass";
import FormDoiMatKhau from "../../../components/login/formDoiMatKhau";
import FormYeuCauMoKhoaTaiKhoan from "../../../components/login/formYeuCauMoKhoaTaiKhoan";
import queryString from "query-string";
import { useForm } from "antd/lib/form/Form";
import * as URL from "./../../../constants/url";
import { useHistory } from "react-router-dom";
import {
  thongBao,
  openMessageLoading,
  thongBaoError,
} from "./../../../common/renderThongBao/renderThongBaoCommon";
import * as Message from "./../../../constants/Message";
import * as NoiDung from "./../../../constants/noiDungThongBao";
import Login from "./login";
import * as api from "./../../../constants/api";
import { Button } from "react-rainbow-components";
import { Drawer } from "antd";
import FormQuanLyTaiKhoan from "../../../components/quanlytaikhoan/formQuanLyTaiKhoan";
var md5 = require("md5");
function PageLogin(props) {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const [checkResetPass, setCheckResetPass] = useState(false);
  const [checkFormDangNhap, setCheckFormDangNhap] = useState(true);
  const [checkOnchangePass, setCheckOnchangePass] = useState(false);
  const [checkFomMoKhoaTaiKhoan, setCheckFomMoKhoaTaiKhoan] = useState(false);
  const [checkFormDangKy, setCheckFormDangKy] = useState(false);
  const [checkCMND, setCheckCMND] = useState();
  const listDataUser = useSelector((state) => state.quanlytaikhoan.list);
  const dispatch = useDispatch();
  const history = useHistory();

  const funcAddRoute = () => {
    history.push(URL.QUAN_LY);
  };
  const onFinish = (values) => {
    dispatch(act.actLogin(api.login, values, setLoginThanhCong));
  };

  const setLoginThanhCong = (value) => {
    dispatch(act.actLoginUserSuccess(value));
    funcAddRoute();
  };

  const dangKyTaiKhoan = () => {
    setVisible(true);
  };
  const cancel = () => {
    setVisible(false);
  };
  const onSave = (value) => {
    if (value.id) {
    } else {
      value = {
        ...value,
        ngaySinh: moment(value.ngaySinh),
        matKhauGoc: value.password,
        role: ["ROLE_USER"],
      };
    }
    dispatch(act.actCreateTaiKhoanRequest(value, handelBack));
  };

  const onResetPass = (value) => {
    dispatch(act.actResetPass(api.resetpass, value, checkInResetPass));
  };
  const checkInResetPass = (value) => {
    thongBao(value);
  };
  const resetMatKhau = () => {
    setCheckResetPass(true);
    setCheckOnchangePass(false);
    setCheckFomMoKhoaTaiKhoan(false);
    setCheckFormDangNhap(false);
    setCheckFormDangKy(false);
  };

  const onChangePass = (value) => {
    let data = listDataUser.filter(
      (item) =>
        item.tenDangNhap === value.user && item.matKhauGoc === value.matKhauCu
    );
    if (data.length > 0) {
      value = {
        ...data[0],
        matKhau: md5(`${value.matKhauMoi}`),
        xacNhanMatKhau: md5(`${value.matKhauMoi}`),
        matKhauGoc: value.matKhauMoi,
        ngayChinhSua: moment().format("DD/MM/yyyy HH:mm:ss "),
      };
      dispatch(act.actChangePasssTaiKhoanRequest(value));
      setCheckResetPass(false);
      setCheckOnchangePass(false);
      setCheckFormDangNhap(true);
      setCheckFomMoKhoaTaiKhoan(false);
      openMessageLoading("Đổi tài khoản thành công");
    } else {
      thongBao(Message.THONG_BAO, NoiDung.CANH_BAO_SAI_THONG_TIN_DOI_MAT_KHAU);
    }
  };

  const handelBack = () => {
    setCheckFomMoKhoaTaiKhoan(false);
    setCheckResetPass(false);
    setCheckOnchangePass(false);
    setCheckFormDangNhap(true);
    setCheckFormDangKy(false);
  };

  const openFormDangKy = () => {
    setCheckFomMoKhoaTaiKhoan(false);
    setCheckResetPass(false);
    setCheckOnchangePass(false);
    setCheckFormDangNhap(true);
    setCheckFormDangKy(true);
  };

  return (
    <>
      <Login
        onFinish={onFinish}
        resetMatKhau={resetMatKhau}
        checkResetPass={checkResetPass}
        checkFormDangNhap={checkFormDangNhap}
        handelBack={handelBack}
        onResetPass={onResetPass}
        openFormDangKy={openFormDangKy}
      />
      <Drawer
        title="Đăng ký tài khoản"
        placement={"left"}
        closable={false}
        onClose={() => handelBack()}
        visible={checkFormDangKy}
        key={`placement1123`}
        width={1000}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <div className="rainbow-flex rainbow-align-content_center">
              <Button
                type="submit"
                variant="border"
                className="rainbow-m-around_medium  float-right"
                onClick={() => form.submit()}
              >
                Thêm
              </Button>
              <Button onClick={() => handelBack()} style={{ marginRight: 8 }}>
                Hủy
              </Button>
            </div>
          </div>
        }
      >
        <FormQuanLyTaiKhoan onSave={onSave} form={form} checkCMND={checkCMND} />
      </Drawer>
    </>
  );
}

export default PageLogin;
