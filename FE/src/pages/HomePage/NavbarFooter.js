import React from "react";
import * as URL from "../../constants/url";

function NavbarFooter(props) {
  return (
    <>
      <ul className="nav justify-content-center footer-navbar">
        <li className="nav-item">
          <a className="nav-link" target="_blank" href={URL.ABOUT_US}>
            Giới thiệu &ensp;
            {"|"}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href={URL.CONTACT_US}>
            Góp ý &ensp;
            {"|"}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Đầu trang &ensp;
            {"|"}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " target="_blank" href={URL.ABOUT_US}>
            Báo giá về quảng cáo
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavbarFooter;
