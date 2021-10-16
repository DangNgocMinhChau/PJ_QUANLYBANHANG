import React, { useState } from "react";
import {
  AvatarMenu,
  MenuDivider,
  MenuItem,
  Drawer,
} from "react-rainbow-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPowerOff,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import SwitchCommon from "./switch-common";
import * as actUser from "./../../actions/quanlytaikhoan/actQuanLyTaiKhoan";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FormDoiMatKhau from "../../components/login/formDoiMatKhau";
import * as URL from "./../../constants/url";

export default function AvatarPage({
  account_current,
  onSetColorMenu,
  checkToogle,
  onToogleMenu,
  colorMenu,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkShowFormChangePass, setCheckShowFormChangePass] = useState(false);
  const logOut = () => {
    history.push(URL.LOGIN);
    dispatch(actUser.actLogOut({ checkToken: false }));
    localStorage.removeItem("token");
  };
  const handleChangePass = (value) => {
    setCheckShowFormChangePass(true);
  };
  const onChangePass = (value) => {
    value = {
      id: account_current.id,
      password: value.matKhauMoi,
    };
    dispatch(
      actUser.actChangePassTaiKhoanRequest(value, setCheckShowFormChangePass)
    );
  };
  return (
    <>
      <Drawer
        header={`Tài khoản : ${account_current && account_current.username}`}
        isOpen={checkShowFormChangePass}
        onRequestClose={() => setCheckShowFormChangePass(false)}
        slideFrom="right"
      >
        <FormDoiMatKhau onChangePass={onChangePass} />
      </Drawer>
      <AvatarMenu
        className="rainbow-m-horizontal_medium"
        id="avatar-menu"
        src={account_current && account_current.img}
        assistiveText="Tahimi Leon"
        menuAlignment="right"
        menuSize="small"
        avatarSize="large"
        title={account_current && account_current.username}
      >
        <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
          <span className="rainbow-m-left_x-small">
            <div className="rainbow-font-size-text_medium ml-2">
              {" "}
              <i className="fa fa-user" aria-hidden="true"></i>{" "}
              {account_current && account_current.fullname}
            </div>
            <div className="rainbow-font-size-text_small ml-2">
              <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
              {account_current && account_current.email}
            </div>
            <div className="rainbow-font-size-text_small ml-2">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>{" "}
              <a
                href={account_current && account_current.facebook}
                target="_blank"
              >
                {account_current && account_current.facebook}
              </a>
            </div>
            <div className="rainbow-font-size-text_small ml-2">
              <i className="fa fa-mobile" aria-hidden="true"></i>{" "}
              <a href={`tel: ${account_current && account_current.sdt}`}>
                {" "}
                {account_current && account_current.sdt}
              </a>
            </div>
          </span>
        </li>
        <MenuDivider variant="space" />

        <MenuItem
          label="Đổi mật khẩu"
          icon={<FontAwesomeIcon icon={faPencilAlt} />}
          iconPosition="left"
          onClick={() => {
            handleChangePass(account_current);
          }}
        />
        <MenuItem
          label="Thoát"
          icon={<FontAwesomeIcon icon={faPowerOff} />}
          iconPosition="left"
          onClick={() => logOut()}
        />
        <MenuItem
          label="Đổi màu menu"
          icon={<FontAwesomeIcon icon={faBars} />}
          iconPosition="left"
        />

        <span className="dropdown-item ">
          <SwitchCommon
            onClick={onToogleMenu}
            name={checkToogle ? "Mở menu" : "Đóng menu"}
          />
        </span>
        <span className="dropdown-item">
          <SwitchCommon
            onClick={onSetColorMenu}
            name={colorMenu ? "Menu tối" : "Menu sáng"}
          />
        </span>
      </AvatarMenu>
    </>
  );
}
