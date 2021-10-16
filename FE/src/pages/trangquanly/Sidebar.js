/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Menu } from "antd";
// import logo from "logo.svg";
import * as dataMenu from "./../../routers/dataMenu";
import { Link } from "react-router-dom";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const renderRouter = (dataMenu, parentKey = 0) => {
    return dataMenu.map((item, index) =>
      Array.isArray(item.children) && item.children.length > 0 ? (
        <SubMenu
          key={`${parentKey}-${index}`}
          icon={
            <i
              style={{ marginRight: "5px" }}
              className={item.icon}
              aria-hidden="true"
            ></i>
          }
          title={item.name}
        >
          {renderRouter(item.children, `${parentKey}-${index}`)}
        </SubMenu>
      ) : (
        <Menu.Item key={`${parentKey}-${index}`}>
          <Link
            key={index}
            className="nav-link"
            to={item.to}
            exact={item.exact}
          >
            <span>
              {" "}
              <i
                style={{ marginRight: "5px" }}
                className={item.icon}
                aria-hidden="true"
              ></i>{" "}
              {item.name}
            </span>
          </Link>
        </Menu.Item>
      )
    );
  };

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            {/* <img src={logo} alt="react-logo" /> */}
          </div>
        </a>
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          Trang Quản Trị
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Menu
          style={{
            // width: 256,
            color: "Highlight",
          }}
          // theme={`${colorMenu ? "dark" : "light "}`}
          mode="inline"
          collapsedWidth="100%"
        >
          {props.account_current &&
          props.account_current.roles &&
          props.account_current.roles.includes("ROLE_ADMIN")
            ? renderRouter(dataMenu.menusListQuanTri)
            : renderRouter(dataMenu.menusListUser)}
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;
