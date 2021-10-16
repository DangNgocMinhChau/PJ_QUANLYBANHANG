import * as Types from "../../constants/ActionType";
import callApi, { callQueryString } from "../../utils/apiCaller";
import * as message from "../../constants/Message";
import {
  thongBao,
  thongBaoError,
} from "../../common/renderThongBao/renderThongBaoCommon";
import { renderDateTheoHeThong } from "../../common/convert/renderConvert";
import * as api from "./../../constants/api";
// Quản lý tài khoản

export function actFetchTaiKhoanRequest() {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoanfind}`, "GET", null).then((res) => {
      if (res) {
        // const data = res.data.result.filter((item) => item.flag !== false);
        dispatch(actFetchTaiKhoan(res.data.result));
      }
    });
  };
}

export const actFetchTaiKhoanPageRequest = (url, queryStringParam) => {
  return (dispatch) => {
    return callApi(callQueryString(url, queryStringParam), "GET", null).then(
      (res) => {
        if (res) {
          dispatch(actFetchTaiKhoan(res.data.result));
          dispatch(actPagination(res.data.pagination));
        }
      }
    );
  };
};

export const actLogin = (url, value, setLoginThanhCong) => {
  return (dispatch) => {
    return callApi(url, "POST", value).then((res) => {
      if (res) {
        if (res.data.accessToken) {
          let token = {
            token: res.data.token,
            id: res.data.id,
          };
          localStorage.setItem("token", JSON.stringify(token));
          thongBao("Đăng nhập thành công !");
          setLoginThanhCong(res.data);
        } else {
          thongBaoError(res.data);
        }
      }
    });
  };
};

export const actPagination = (value) => {
  return {
    type: Types.PAGE_PAGINATION,
    value,
  };
};

export const actFetchTaiKhoan = (data) => {
  return {
    type: Types.FETCH_TAIKHOAN,
    data,
  };
};

export function actDeleteTaiKhoanRequest(listId) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}`, "DELETE", listId).then((res) => {
      if (res) {
        if (res.data.status) {
          thongBao(res.data.msg);
          res.data.listId.map((itemId, indexId) => {
            dispatch(actDeleteTaiKhoan(itemId));
          });
        } else {
          thongBaoError(res.data.msg);
        }
      }
    });
  };
}

export const actDeleteTaiKhoan = (id) => {
  return {
    type: Types.DELETE_TAIKHOAN,
    id,
  };
};

export function actCreateTaiKhoanRequest(value, handelBack) {
  return (dispatch) => {
    return callApi(api.singup, "POST", value).then((res) => {
      if (res) {
        if (res.data.status) {
          thongBao(res.data.message);
          handelBack();
          // dispatch(actCreateTaiKhoan(res.data.result));
        } else {
          thongBaoError(res.data.message);
        }
      }
    });
  };
}

export function actChangePassTaiKhoanRequest(
  value,
  setCheckShowFormChangePass
) {
  return (dispatch) => {
    return callApi(api.changepass, "POST", value).then((res) => {
      if (res) {
        thongBao(message.SUA_THANH_CONG);
        setCheckShowFormChangePass(false);
      }
    });
  };
}

export const actCreateTaiKhoan = (value) => {
  return {
    type: Types.CREATE_TAIKHOAN,
    value,
  };
};

export function actGetTaiKhoanByIdRequest(id) {
  return (dispatch) => {
    return callApi(`${api.apiauth}/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actGetTaiKhoanById(res.data.result));
      }
    });
  };
}

export const actGetTaiKhoanById = (value) => {
  return {
    type: Types.EDIT_TAIKHOAN,
    value,
  };
};

export function actUpdateTaiKhoanRequest(value) {
  return (dispatch) => {
    return callApi(`${api.apiauthedituser}`, "POST", value).then((res) => {
      if (res) {
        thongBao(message.SUA_THANH_CONG);
        // dispatch(actUpdateTaiKhoan(res.data.result));
      }
    });
  };
}

export function actChangePasssTaiKhoanRequest(value) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}/${value.id}`, "PUT", value).then(
      (res) => {
        if (res) {
          dispatch(actUpdateTaiKhoan(res.data));
        }
      }
    );
  };
}

export function actUpdateSetFlagRequest(value) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}/${value.id}`, "PUT", value).then(
      (res) => {
        if (res) {
          dispatch(actUpdateTaiKhoan(res.data));
        }
      }
    );
  };
}

export const actUpdateTaiKhoan = (value) => {
  return {
    type: Types.UPDATE_TAIKHOAN,
    value,
  };
};

export const actLoginUserSuccess = (value) => {
  return {
    type: Types.LOGIN_SUCCESS,
    value,
  };
};

export const actLogOut = (value) => {
  return {
    type: Types.LOGIN_SUCCESS,
    value,
  };
};

export const actLockAccount = (value) => {
  return {
    type: Types.UPDATE_TAIKHOAN,
    value,
  };
};

export function actGetTaiKhoanByIdInApplicationRequest(id) {
  return (dispatch) => {
    return callApi(`${api.apiauth}/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actLoginUserSuccess(res.data.result));
      }
    });
  };
}

export function actGetTaiKhoanByIdLoginFailRequest(id) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}/${id}`, "GET", null).then((res) => {
      if (res) {
        let data = {
          ...res.data.result,
          lockUser: true,
        };
        dispatch(actUpdateTaiKhoanRequest(data));
      }
    });
  };
}

export function actGetTaiKhoanByIdUnLockRequest(id) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}/${id}`, "GET", null).then((res) => {
      if (res) {
        let data = {
          ...res.data.result,
          lockUser: "false",
        };
        dispatch(actUpdateUnlockTaiKhoanRequest(data));
      }
    });
  };
}

export function actUpdateUnlockTaiKhoanRequest(value) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}/${value.id}`, "PUT", value).then(
      (res) => {
        if (res) {
          thongBao(message.MO_KHOA_TAI_KHOAN_THANH_CONG);
          dispatch(actUpdateTaiKhoan(res.data.result));
        }
      }
    );
  };
}

export const actUpdateAccountCurrent = (data) => {
  let value = data;
  value = {
    ...data,
    checkToken: true,
    matKhauGoc: null,
  };
  return {
    type: Types.LOGIN_SUCCESS,
    value,
  };
};

export function actGetTaiKhoanByIdLockRequest(id) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}/${id}`, "GET", null).then((res) => {
      if (res) {
        let data = {
          ...res.data.result,
          lockUser: "true",
          ngayChinhSua: renderDateTheoHeThong(),
        };
        dispatch(actUpdatelockTaiKhoanRequest(data));
      }
    });
  };
}

export function actUpdatelockTaiKhoanRequest(value) {
  return (dispatch) => {
    return callApi(`${api.quanlytaikhoan}/${value.id}`, "PUT", value).then(
      (res) => {
        if (res) {
          thongBao(message.KHOA_TAI_KHOAN_THANH_CONG);
          dispatch(actUpdateTaiKhoan(res.data.result));
        }
      }
    );
  };
}

export function actCreateUserChoUnlockRequest(value) {
  return (dispatch) => {
    return callApi(`quanlyuserchounlock`, "POST", value).then((res) => {
      if (res) {
        thongBao(message.THEM_THANH_CONG);
      }
    });
  };
}

export function actCreateThongBaoRequest(value) {
  value = {
    message: `Tài khoản ${value.tenDangNhap} yêu cầu mở khóa `,
    idUser: value.id,
  };
  return (dispatch) => {
    return callApi(`quanlythongbao`, "POST", value).then((res) => {
      if (res) {
      }
    });
  };
}

export function actLoginTaiKhoan(value, setLoginThanhCong) {
  return (dispatch) => {
    return callApi(value, "GET", null).then((res) => {
      if (res) {
        dispatch(actLoginUserSuccess(res.data.result));
        setLoginThanhCong(res.data.result);
      }
    });
  };
}

export function actResetPass(api, value) {
  return (dispatch) => {
    return callApi(api, "POST", value).then((res) => {
      if (res) {
        if (res.data.status) {
          thongBao(res.data.message);
        } else {
          thongBaoError(res.data.message);
        }
      }
    });
  };
}

export function actCheckTaiKhoanTonTaiRequest(api, value, callback) {
  return (dispatch) => {
    return callApi(api, "POST", value).then((res) => {
      if (res) {
        if (res.data) {
          thongBaoError(res.data);
        }
      }
    });
  };
}
