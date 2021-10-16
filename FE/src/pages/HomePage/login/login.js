import React from "react";
import FormDangNhap from "../../../components/login/formDangNhap";
import FormResetPass from "../../../components/login/formResetPass";
import FormQuanLyTaiKhoan from "../../../components/quanlytaikhoan/formQuanLyTaiKhoan";

export default function Login({
  onFinish,
  resetMatKhau,
  checkResetPass,
  checkFormDangNhap,
  handelBack,
  onResetPass,
  openFormDangKy,
}) {
  return (
    <div className="login-block">
      <div className="container container-login">
        <div className="row">
          <div className="col-md-4 login-sec">
            <h2 className="text-center">Đăng nhập</h2>
            <div className="login-form">
              {checkFormDangNhap && (
                <FormDangNhap
                  onFinish={onFinish}
                  resetMatKhau={resetMatKhau}
                  openFormDangKy={openFormDangKy}
                />
              )}

              {checkResetPass && (
                <FormResetPass
                  handelBack={handelBack}
                  onResetPass={onResetPass}
                />
              )}
            </div>
            <div className="copy-text">
              <i className="fa fa-heart"></i> by{" "}
              <a href="/trangchu">hethongbanhang.com</a>
            </div>
          </div>
          <div className="col-md-8 banner-sec">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="https://st.quantrimang.com/photos/image/2020/02/19/cau-chuyen-y-nghia-3.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="banner-text">
                      <h2>Chiếc lược tình yêu</h2>
                      <p>
                        Một ngày nọ, người vợ có mái tóc dài bảo chồng hãy mua
                        cho bà một chiếc lược mới để bà chải tóc được gọn gàng
                        hơn. Người chồng đã xin lỗi và từ chối bà. Ông nói rằng
                        mình còn không có đủ tiền để sửa chiếc đồng hồ đeo tay
                        bị hỏng. Người vợ nghe vậy và không nói gì thêm. Hôm sau
                        người chồng đi làm, ông qua tiệm đồng hồ và bán chiếc
                        đồng hồ của mình với giá rẻ để mua chiếc lược mới cho
                        vợ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="https://st.quantrimang.com/photos/image/2020/02/19/cau-chuyen-y-nghia-3.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="banner-text">
                      <h2>Người đàn ông vứt bỏ đôi giày</h2>
                      <p>
                        Chuyến xe lửa đang chạy trên đường cao tốc, Johnny không
                        cẩn thận làm rơi một chiếc giày mới mua ra ngoài cửa sổ,
                        mọi người chung quanh đều cảm thấy tiếc cho ông. Bất
                        ngờ, ông liền ném ngay chiếc giày thứ hai ra ngoài cửa
                        sổ đó. Hành động này của Johnny khiến mọi người sửng
                        sốt, thế là ông bèn từ tốn giải thích: “Chiếc giày này
                        bất luận đắt đỏ như thế nào, đối với tôi mà nói nó đã
                        không còn có ích gì nữa, nếu như có ai có thể nhặt được
                        đôi giày, nói không chừng họ còn có thể mang vừa nó thì
                        sao!”.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="https://chiase24.com/wp-content/uploads/2019/09/T%E1%BB%95ng-h%E1%BB%A3p-nh%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BA%B9p-%C3%BD-ngh%C4%A9a-v%E1%BB%81-cha-4.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="banner-text">
                      <h2>
                        Cảm ơn bố đã cho con thấy chúng ta nghèo như thế nào!
                      </h2>
                      <p>
                        Một ngày nọ, người bố giàu có dẫn cậu con trai của mình
                        thăm thú một ngôi làng. Người bố muốn cho con trai của
                        mình thấy một người nghèo có thể nghèo đến mức nào. Họ
                        đã dành thời gian tham quan cánh đồng của một gia đình
                        nghèo. Sau khi trở về, người bố hỏi cậu con trai: – Con
                        thấy chuyến đi thế nào? – Rất tuyệt bố ạ! Người bố hỏi:
                        – Con đã thấy người nghèo sống thế nào chưa? – Vâng con
                        thấy rồi ạ! – Vậy nói cho bố nghe, con học được gì từ
                        chuyến đi này?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
