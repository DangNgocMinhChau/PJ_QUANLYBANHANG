import React from "react";
import CommonTable from "../../common/commonTable";
import * as action from "./../../constants/ActionType";

function TableFiles({
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

export default TableFiles;
