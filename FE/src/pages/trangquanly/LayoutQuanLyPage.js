import React, { useEffect, useState } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";
import routes from "./../../routers/routes";
import DemoNavbar from "../trangquanly/DemoNavbar";
// import Footer from "components/Footer/Footer.js";
import Sidebar from "../trangquanly/Sidebar";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import { useSelector } from "react-redux";

var ps;

export default function LayoutQuanLyPage(props) {
  const renderContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  const account_current = useSelector(
    (state) => state.quanlylogin.account_current
  );
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [activeColor, setActiveColor] = useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        bgColor={backgroundColor}
        activeColor={activeColor}
        account_current={account_current}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} account_current={account_current} />
        {renderContentMenu(routes)}
      </div>
    </div>
  );
}
