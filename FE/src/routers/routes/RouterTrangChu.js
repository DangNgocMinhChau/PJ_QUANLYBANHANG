import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import * as URL from "./../../constants/url";

function RouterTrangChu({}) {
  return (
    <Switch>
      {/* {<Redirect exact from={URL.BAO} to={URL.BAO} />} */}
      {/* <Route path={URL.BAO_TRANGCHU} component={TrangChinh} />
      <Route path={URL.ABOUT_US} component={AboutUs} />
      <Route path={URL.CONTACT_US} component={ContactUs} />
      <Route
        path={`${URL.DANH_SACH_TINH_TUC_THEO_TAG}`}
        component={DanhSachBaiVietTheoTag}
      />
      <Route path={`${URL.BAI_VIET_ITEM}/:tieuDe/:id`} component={Detail} />
      <Route path={URL.BAO_SEARCH} component={SearchTinTuc} /> */}
    </Switch>
  );
}

export default RouterTrangChu;
