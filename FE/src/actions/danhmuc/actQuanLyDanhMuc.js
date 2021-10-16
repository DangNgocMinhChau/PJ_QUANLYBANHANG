import * as Types from "../../constants/ActionType";
import callApi from "../../utils/apiCaller";

export function getAllDanhMucQuyenRequest(api) {
  return (dispatch) => {
    return callApi(api, "GET", null).then((res) => {
      if (res) {
        dispatch(getAllDanhMucQuyen(res.data.result));
      }
    });
  };
}

export const getAllDanhMucQuyen = (data) => {
  return {
    type: Types.FETCH_QUYEN,
    data,
  };
};
