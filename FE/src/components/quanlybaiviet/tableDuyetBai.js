import React from "react";
import CommonTable from "../../common/commonTable";
import { Badge } from "react-rainbow-components";
import * as action from "./../../constants/ActionType";
import { renderTrangThaiBaiViet } from "./../../common/convert/renderConvert";

export default function TableDuyetBai({
  match,
  data,
  onDelete,
  setIdXoa,
  handdelShowDetail,
  onChangePage,
  duyetBai,
  khongDuyetBai,
  xemBaiViet,
  apiCallServerSearch,
  handleSortChangeTable,
}) {
  const renderTrangThai = (data) => {
    return (
      <Badge label={renderTrangThaiBaiViet(data.value)} variant="lightest" />
    );
  };
  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "tieuDe",
    },
    {
      title: "Tác giả",
      dataIndex: "tenNguoiTao",
    },
    {
      title: "Thời gian",
      dataIndex: "ngayTaoBanGhi",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      component: renderTrangThai,
    },
  ];

  return (
    <div>
      <CommonTable
        columns={columns}
        dataSource={data}
        setIdXoa={setIdXoa}
        onDelete={onDelete}
        onChangePage={onChangePage}
        checkActionMenu={action.DUYET_BAI}
        duyetBai={duyetBai}
        khongDuyetBai={khongDuyetBai}
        xemBaiViet={xemBaiViet}
        search={true}
        checkActSearch={action.SEARCH_BAI_VIET}
        apiCallServerSearch={apiCallServerSearch}
        fieldSearch={"tieuDe"}
        handleSortChangeTable={handleSortChangeTable}
      />
    </div>
  );
}
