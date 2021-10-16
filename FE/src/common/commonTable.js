import React from "react";
import { Table } from "antd";
import Panigation from "./panigation";
function commonTable({ columns, dataSource, onChangePage }) {
  return (
    <div>
      <Table
        scroll={{ x: true }}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <div class="d-flex justify-content-end">
        <Panigation onChangePage={onChangePage} />
      </div>
    </div>
  );
}

export default commonTable;
