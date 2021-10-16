import * as URL from "./../constants/url";

export const menusListQuanTri = [
  {
    name: "Hệ thống",
    type: "Menu",
    icon: "fa fa-cogs",
    children: [
      {
        name: "Tài khoản",
        to: URL.QUAN_LY_TAI_KHOAN,
        exact: "true",
        icon: "fa fa-user-o",
      },
    ],
  },
];
export const menusListUser = [];
