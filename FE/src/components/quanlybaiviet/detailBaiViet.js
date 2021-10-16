import React from "react";
import { Modal, Button } from "react-rainbow-components";
import ItemTinTuc from "../../pages/HomePage/trangchu/itemTinTuc";

export default function DetailBaiViet({
  showDetail,
  cancel,
  itemBaiViet,
  duyetBai,
}) {
  return (
    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
      <Modal
        isOpen={showDetail}
        onRequestClose={cancel}
        style={{ width: "1000px" }}
        footer={
          <div
            className="rainbow-flex rainbow-justify_spread"
            style={{ textAlign: "end" }}
          >
            <Button
              onClick={() => cancel()}
              label="Hủy"
              variant="neutral"
            ></Button>
            <Button
              onClick={() => duyetBai(itemBaiViet.id)}
              label="Duyệt"
              variant="brand"
            ></Button>
          </div>
        }
      >
        <ItemTinTuc itemTinTuc={itemBaiViet} />
      </Modal>
    </div>
  );
}
