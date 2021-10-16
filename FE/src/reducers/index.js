import { combineReducers } from "redux";
import quanlytaikhoan from "./quanlytaikhoan";
import quanlylogin from "./quanlylogin";
import quanly_cmnd from "./quanly_cmnd";
import quanly_files from "./quanlyfiles";
import danhmuc from "./danhmuc";
import pagination from "./pagination";

const appReducers = combineReducers({
  quanlytaikhoan,
  quanlylogin,
  quanly_cmnd,
  quanly_files,
  danhmuc,
  pagination,
});

export default appReducers;
