import React from "react";
import * as api from "./../../constants/api";
export default function ShowFileUpload({ file, checkThemMoi, checkEdit }) {
  let apiDowload = `${api.downloadFile}/${file && file.tenFile}`;
  return (
    checkEdit &&
    !checkThemMoi && (
      <div className="row mt-5">
        <div className=" col-md-2"></div>
        <div className="col-md-10">
          <a href={apiDowload}>
            <i className="fa fa-file-code-o mr-2" aria-hidden="true"></i>
            {file && file.tenFile}
          </a>
        </div>
      </div>
    )
  );
}
