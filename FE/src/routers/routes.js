import React from "react";
import Home from "../components/Home";
import NotFound from "../pages/HomePage/404";
import PageQuanLyTaiKhoan from "../pages/quanlytaikhoan/pageQuanLyTaiKhoan";
import Icons from "../pages/trangquanly/Icons";
import Login from "../pages/users/login";
import * as URL from "./../constants/url";

const routes = [
  {
    path: "/",
    exact: "true",
    main: () => <Home />,
  },

  {
    path: URL.QUAN_LY_TAI_KHOAN,
    exact: true,
    main: ({ match, location }) => (
      <PageQuanLyTaiKhoan location={location} match={match} />
    ),
  },
  {
    path: URL.QUAN_LY_ICON,
    exact: true,
    main: ({ match, location }) => <Icons location={location} match={match} />,
  },

  {
    path: URL.QUAN_LY_LOGIN,
    exact: "true",
    main: ({ match, location }) => <Login match={match} location={location} />,
  },
];

let dataRouter = [];
routes.map((itemMenu, indexMenu) => {
  if (Array.isArray(itemMenu) && itemMenu.length > 0) {
    itemMenu.map((itemRouterConfig, indexRouterConfig) => {
      dataRouter.push(itemRouterConfig);
    });
  } else {
    dataRouter.push(itemMenu);
  }
});

export default dataRouter;
