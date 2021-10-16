import React from "react";
import { Descriptions, Divider, Avatar } from "antd";
import { useSelector } from "react-redux";
import { renderDate } from "../../common/convert/renderConvert";
function DetailQuanLyTaiKhoan({ match, history, itemKhoThuoc }) {
  const itemQuanLyTaiKhoan = useSelector((state) => state.quanlytaikhoan.item);
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4"></div>
        <div className=" background-detail-custom  shadow ">
          <Divider orientation="left">Thông tin tài khoản</Divider>
          <Descriptions size="small" layout="horizontal" bordered>
            <Descriptions.Item
              label="Tên chủ tài khoản"
              span={3}
              style={{ marginRight: "10px" }}
            >
              <Avatar
                size={64}
                // src={itemQuanLyTaiKhoan.img ? itemQuanLyTaiKhoan.img : null}
              />
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.fullname}
            </Descriptions.Item>
            <Descriptions.Item label="Tên đăng nhập" span={2}>
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.username}
            </Descriptions.Item>
            <Descriptions.Item label="Mật khẩu" span={2}>
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.matKhauGoc}
            </Descriptions.Item>
            <Descriptions.Item label="Ngày sinh" span={2}>
              {itemQuanLyTaiKhoan &&
                itemQuanLyTaiKhoan &&
                renderDate(itemQuanLyTaiKhoan.ngaySinh)}
            </Descriptions.Item>
            <Descriptions.Item label="Giới tính" span={2}>
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.gioiTinh}
            </Descriptions.Item>
            <Descriptions.Item label="CMND" span={2}>
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.cmnd}
            </Descriptions.Item>
            <Descriptions.Item label="Số điện thoại" span={2}>
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.sdt}
            </Descriptions.Item>
            <Descriptions.Item label="Facebook" span={2}>
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.facebook}
            </Descriptions.Item>
            <Descriptions.Item label="Ngày tạo" span={2}>
              {itemQuanLyTaiKhoan && itemQuanLyTaiKhoan.ngayTaoBanGhi}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </>
  );
}

export default DetailQuanLyTaiKhoan;
