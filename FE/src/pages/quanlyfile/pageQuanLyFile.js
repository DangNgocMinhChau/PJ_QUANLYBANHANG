import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Tabset, Tab } from "react-rainbow-components";
import * as api from "../../constants/api";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import TableFiles from "../../components/quanlyfiles/TableFiles";
import UploadFile from "../../components/quanlyfiles/uploadFile";

export default function PageQuanLyFile({ match, location }) {
  const dispatch = useDispatch();
  const [fileDinhKem, setFileDinhKem] = useState([]);

  const { dataListBaiVietChuaDuyet, itemBaiViet, account_current } =
    useSelector(
      (state) => ({
        dataListBaiVietChuaDuyet: state.quanlytintuc.list,
        itemBaiViet: state.quanlytintuc.item,
        account_current: state.quanlylogin.account_current,
      }),
      shallowEqual
    );

  const cancel = () => {};

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="rainbow-m-around_large">
        <Card
          icon={
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="rainbow-color_brand"
            />
          }
          title="Phê duyệt bài viết"
        />
      </div>
      <div className="row">
        <div className="col-md-12 mb-5"></div>
      </div>
      <div className="rainbow-p-around_large">
        <Card>
          {/* <FormLyDoKhongDuyet
            isVisible={showModalLyDoKoDuyet}
            cancel={cancel}
            form={form}
            onSave={onSave}
          /> */}
          <UploadFile setFileDinhKem={setFileDinhKem} />
          <TableFiles />
        </Card>
      </div>
    </div>
  );
}
