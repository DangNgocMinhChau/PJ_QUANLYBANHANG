import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import * as dataMenu from "./../../routers/dataMenu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as api from "./../../constants/api";

function MenuLeft({ checkToogle, colorMenu, account_current }) {
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState([]);
  const dataMenuRequest = (value) => {
    let arrData = [];
    let arrChildData = [];
    let arrTongHop = [];
    let itemData = {};
    value.map((item, index) => {
      if (item.nhomMenu === null) {
        itemData = {
          name: item.ten,
          to: item.url,
          exact: true,
          ma: item.ma,
        };
        arrData.push(itemData);
      } else {
        itemData = {
          name: item.ten,
          to: item.url,
          exact: true,
          ma: item.ma,
          nhomMenu: item.nhomMenu,
        };
        arrChildData.push(itemData);
      }
    });
    arrData.map((itemParent, indexParent) => {
      itemData = {
        name: itemParent.name,
        to: itemParent.to,
        exact: true,
        ma: itemParent.ma,
        children: arrChildData.filter(
          (itemChild) => itemChild.nhomMenu === itemParent.ma
        ),
      };
      arrTongHop.push(itemData);
    });
    setDataList(arrTongHop);
  };

  const { SubMenu } = Menu;

  const renderRouter = (dataMenu, parentKey = 0) => {
    return dataMenu.map((item, index) =>
      Array.isArray(item.children) && item.children.length > 0 ? (
        <SubMenu key={`${parentKey}-${index}`} title={item.name}>
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
              <i className="icon-menu-custom fa fa-circle"></i>
              {item.name}
            </span>
          </Link>
        </Menu.Item>
      )
    );
  };

  return (
    <>
      {checkToogle && (
        <Menu
          style={{
            width: 256,
            color: "Highlight",
          }}
          theme={`${colorMenu ? "dark" : "light "}`}
          mode="inline"
          collapsedWidth="100%"
        >
          {account_current &&
          account_current.roles &&
          account_current.roles.includes("ROLE_ADMIN")
            ? renderRouter(dataMenu.menusListQuanTri)
            : renderRouter(dataMenu.menusListUser)}
        </Menu>
      )}
    </>
  );
}

export default MenuLeft;
