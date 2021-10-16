import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import PageLogin from "../../pages/HomePage/login/pageLogin";
import Page from "../../pages/HomePage/Page";
import LayoutTrangChu from "../../pages/trangquangcaosanpham/LayoutTrangChu";
import * as act from "./../../actions/quanlytaikhoan/actQuanLyTaiKhoan";
import RouterTrangChu from "./RouterTrangChu";
import * as URL from "./../../constants/url";
import moment from "moment";
import { Layout } from "antd";
import LayoutQuanLyPage from "../../pages/trangquanly/LayoutQuanLyPage";

function Routes(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      act.actGetTaiKhoanByIdInApplicationRequest(
        JSON.parse(localStorage.getItem("token")) &&
          JSON.parse(localStorage.getItem("token")).id
      )
    );
  }, []);

  return (
    <Switch>
      <Route path={URL.LOGIN} component={PageLogin} />
      <Route path={URL.QUAN_LY} component={LayoutQuanLyPage} />
      <Route path={URL.TRANG_GIOI_THIEU}>
        <LayoutTrangChu>
          <RouterTrangChu />
        </LayoutTrangChu>
      </Route>
      {localStorage.getItem("user") !== null ? (
        <Redirect to={URL.QUAN_LY} />
      ) : (
        <Redirect to={URL.TRANG_GIOI_THIEU} />
      )}
    </Switch>
  );
}

export default Routes;
