import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, Route, Switch, useHistory } from "react-router-dom";
import routes from "./../../routers/routes";
import AvatarPage from "./AvatarPage";
import Breadcrumd from "./breadcrumd";
import { renderBreadcrumbs } from "../../common/convert/renderConvert";
import * as URL from "./../../constants/url";
function Nav({ onToogleMenu, checkToogle, onSetColorMenu, colorMenu }) {
  function renderContentMenu(routes) {
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
  }
  const account_current = useSelector(
    (state) => state.quanlylogin.account_current
  );
  return (
    <div id="content-wrapper" className="d-flex flex-column fix-height">
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white-custom topbar mb-4 static-top shadow">
          {/* <!-- Sidebar Toggle (Topbar) --> */}

          {/* <!-- Topbar Search --> */}
          {/* <SearchMenu /> */}
          {renderBreadcrumbs()}
          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">
            <AvatarPage
              account_current={account_current}
              colorMenu={colorMenu}
              onSetColorMenu={onSetColorMenu}
              checkToogle={checkToogle}
              onToogleMenu={onToogleMenu}
            />
          </ul>
        </nav>
        <Switch>
          {localStorage.getItem("token") !== null ? (
            renderContentMenu(routes)
          ) : (
            <Redirect exact to={URL.LOGIN}></Redirect>
          )}
        </Switch>
      </div>
    </div>
  );
}

export default Nav;
