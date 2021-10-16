import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ModalQuanLyTaiKhoan from "../../components/quanlytaikhoan/modalQuanLyTaiKhoan";
import TableQuanLyTaiKhoan from "../../components/quanlytaikhoan/tableQuanLyTaiKhoan";
import * as act from "../../actions/quanlytaikhoan/actQuanLyTaiKhoan";
import * as actQuanLyCMND from "../../actions/quanly_cmnd/actQuanLyCMND";
import moment from "moment";
import { thongBao } from "./../../common/renderThongBao/renderThongBaoCommon";
import DetailQuanLyTaiKhoan from "../../components/quanlytaikhoan/detailQuanLyTaiKhoan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import queryString from "query-string";
import * as api from "./../../constants/api";
import * as actQuanLyQuyen from "./../../actions/danhmuc/actQuanLyDanhMuc";
import { Button, Tooltip, Card } from "antd";

import { faPlus, faUsers, faEraser } from "@fortawesome/free-solid-svg-icons";
import Panigation from "../../common/panigation";
function PageQuanLyTaiKhoan({ match, location }) {
  const [openModal, setOpenModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [checkDanhSach, setCheckDanhSach] = useState(true);
  const [checkCMND, setCheckCMND] = useState();
  const [idXoa, setIdXoa] = useState([]);

  const { dataListUser } = useSelector(
    (state) => ({
      dataListUser: state.quanlytaikhoan.list,
      dataListCMND: state.quanly_cmnd.list,
      account_current: state.quanlylogin.account_current,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  function cancel() {
    setOpenModal(false);
    setShowDetail(false);
    setCheckDanhSach(true);
  }

  function onSave(value) {
    if (value.id) {
      value = {
        ...value,
        ngaySinh: moment(value.ngaySinh),
      };
      dispatch(act.actUpdateTaiKhoanRequest(value));
    } else {
      value = {
        ...value,
        ngaySinh: moment(value.ngaySinh),
        matKhauGoc: value.password,
      };
      dispatch(act.actCreateTaiKhoanRequest(value));
    }
    cancel();
  }
  const handdleXoaNhieu = () => {
    dispatch(act.actDeleteTaiKhoanRequest(idXoa));
  };

  function onDelete(id) {
    let dataId = [];
    dataId.push(id);
    dispatch(act.actDeleteTaiKhoanRequest(dataId));
  }

  const handdelShowDetail = (id) => {
    setShowDetail(true);
    setCheckDanhSach(false);
    dispatch(act.actGetTaiKhoanByIdRequest(id));
  };

  function onEdit(id) {
    dispatch(act.actGetTaiKhoanByIdRequest(id));
    setOpenModal(true);
  }

  function resetForm() {
    dispatch(act.actGetTaiKhoanById(null));
  }

  function openForm() {
    resetForm();
    setOpenModal(true);
  }

  useEffect(() => {
    let queryStringParam = {
      page: 1,
      pageSize: 10,
    };
    dispatch(
      act.actFetchTaiKhoanPageRequest(api.listuserfind, queryStringParam)
    );
  }, []);

  const onUnlock = (id) => {};
  const onLock = (id) => {
    dispatch(act.actGetTaiKhoanByIdLockRequest(id));
  };

  const onChangePage = (e, page) => {
    let queryStringParam = {
      page: page,
      pageSize: 10,
    };
    dispatch(
      act.actFetchTaiKhoanPageRequest(api.listuserfind, queryStringParam)
    );
  };

  const handleSortChangeTable = (filed, orderBy) => {
    let queryStringParam = {
      page: 1,
      pageSize: 10,
      sortData: `${filed} ${orderBy}`,
    };
    dispatch(
      act.actFetchTaiKhoanPageRequest(api.listuserfind, queryStringParam)
    );
  };
  return (
    <div className="content">
      <div className="col-md-12">
        <Card
          title={
            <div className="d-sm-flex align-items-center justify-content-between">
              <h5 className=" mb-0 text-gray-800">Quản lý user</h5>
              <div className="row mr-5">
                <Button
                  variant="border"
                  icon={<FontAwesomeIcon icon={faPlus} />}
                  onClick={() => {
                    openForm();
                  }}
                  style={{ marginRight: "10px" }}
                />

                <Tooltip
                  placement="bottom"
                  title="Xoá nhiều"
                  color="red"
                  key="red"
                >
                  <Button
                    variant="border"
                    icon={<FontAwesomeIcon icon={faEraser} />}
                    onClick={() => {
                      handdleXoaNhieu();
                    }}
                    style={{ color: "red" }}
                  />
                </Tooltip>
              </div>
            </div>
          }
          bordered={false}
          style={{ width: "100%" }}
        >
          <div className="all-icons">
            <ModalQuanLyTaiKhoan
              isVisible={openModal}
              handleCancel={() => cancel()}
              onSave={onSave}
              checkCMND={setCheckCMND}
            />
            {checkDanhSach && (
              <TableQuanLyTaiKhoan
                data={dataListUser}
                match={match}
                onDelete={onDelete}
                onEdit={onEdit}
                onUnlock={onUnlock}
                onLock={onLock}
                setIdXoa={setIdXoa}
                handdelShowDetail={handdelShowDetail}
                onChangePage={onChangePage}
                handleSortChangeTable={handleSortChangeTable}
              />
            )}
            {showDetail && <DetailQuanLyTaiKhoan />}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PageQuanLyTaiKhoan;
