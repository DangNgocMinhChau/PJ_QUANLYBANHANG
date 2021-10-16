import axios from "axios";
import queryString from "query-string";
import authHeader from "./auth-header";
export default function callApi(url, method = "GET", body) {
  return axios({
    method: method,
    url: url,
    data: body,
    headers: authHeader(),
  });
}

export const callQueryString = (url, param) => {
  return queryString.stringifyUrl({
    url: url,
    query: param,
  });
};

export const requestUploadFile = (url, options) => {
  var href = window.location.href;
  const headers = new Headers();
  // headers.append("type", "formData");
  // headers.append("Authorization", "Bearer" + token);
  const defaults = { headers: headers, timeout: 60000 };
  options = Object.assign({}, defaults, options);
  return fetch(url, options)
    .then((res) => {
      switch (res.status) {
        case 200:
          if (
            res.headers.get("content-type") !== null &&
            res.headers.get("content-type").indexOf("application/json") !== -1
          ) {
            return res.json();
          } else {
            throw new TypeError(
              'Response from "' + url + '" has unexpected "content-type"'
            );
          }
      }
    })
    .catch(function (error) {
      return false;
    });
};

export const requestDownload = (url) => {
  let strFileName = "";
  return fetch(url, {
    method: "GET",
    // headers: new Headers({
    //   Authorization: "Bearer",
    // }),
  })
    .then((res) => {
      switch (res.status) {
        case 200:
          // let arr = res.headers.get("Content_Disposition").split("filename=");
          // strFileName = arr[1];
          return res.blob();
      }
    })
    .then((blob) => {
      if (blob) {
        var url = window.URL.createObjectURL(blob);
        var a = document.createAttribute("a");
        a.href = url;
        a.dowload = strFileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        return true;
      }
    })
    .catch((error) => {
      return false;
    });
};
