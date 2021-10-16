import callApi from "../../utils/apiCaller";

export function actFetchMenuRequest(api, dataMenu) {
  return (dispatch) => {
    return callApi(api, "GET", null).then((res) => {
      if (res) {
        dataMenu(res.data.result);
      }
    });
  };
}
