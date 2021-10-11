package com.example.quanlybanhang.utils.mail;

public class Const {

    // Path file gửi mail
    public final static String PATH_1 = "./src/main/resources/filedinhkem/Báo Giá Box Tin 2021.pdf";

    //----------------------------------------------------------------------------

    // Gửi Mail
    public final static String TITLE_MAIL_RESET_PASS = "Yêu cầu lấy lại mật khẩu từ trang Web Báo!";

    public final static String MAIL_SEND_RESET_PASS(String fullname,String userName, String pass, String cmnd){
        String text = "<b>"+ fullname + " - " + cmnd + "</b>" +
                "<br>" +
                "<i>Chào mừng bạn đến với trang web của chúng tôi</i>"+
                "<br>" +
                "<p>Tài khoản : " + userName +"</p>" +
                "<p>Mật khẩu : " + pass +"</p>" +
                "Chúng tôi gửi bạn mật khẩu đã được reset, Vui lòng không cung cấp mật khẩu này cho bất kỳ ai, Để bảo mật vui lòng đổi mật khẩu khác ! Xin cảm ơn" ;

        return text;
    }

    public final static String TITLE_MAIL_DONG_GOP_Y_KIEN = "Chương mục hỏi đáp của web tin tức!";

    public final static String MAIL_SEND_DONG_GOP_Y_KIEN(String fullname,String cauHoi ,String cauTraLoi){
        String text = "<b> Chương mục hỏi đáp </b>" +
                "<br>" +
                "<i>Chào mừng " +fullname + "  đến với trang web của chúng tôi</i>"+
                "<br>" +
                "<p>Câu hỏi của bạn : " + "<b>" + cauHoi + "</b>" +"</p>" +
                "<p>Trả lời : " + "<b>" + cauTraLoi + "</b>" +"</p>" +
                "<p>Cảm ơn bạn đã quan tâm!</p>";

        return text;
    }

    public final static String TITLE_MAIL_BAO_GIA = "Bảng báo giá từ website tin tức!";

    public final static String MAIL_SEND_BAO_GIA(String fullname){
        String text = "<b>"+ fullname  +"</b>" +
                "<br>" +
                "<i>Chào mừng bạn đến với trang web của chúng tôi</i>"+
                "<br>" +
                "<p>chúng tôi gửi bạn bảng báo giá!</p>";

        return text;
    }

    public final static String GUI_MAI_THANH_CONG = "Gửi mail thành công!";
    public final static String GUI_MAI_THAT_BAI = "Gửi mail thất bại!";

    //-------------------------------------------------------------------

    // Thông báo reponse , request

    public final static String THEM_MOI_THANH_CONG = "Thêm mới thành công!";
    public final static String THEM_MOI_THAT_BAI = "Thêm mới thất bại!";

    public final static String SUA_THANH_CONG = "Sửa thành công!";
    public final static String SUA_THAT_BAI = "Sửa thất bại!";

    public final static String LAY_ITEM_THANH_CONG = "Lấy dữ liệu thành công!";
    public final static String LAY_ITEM_THAT_BAI = "Lấy dữ liệu thất bại!";

    public final static String LAY_DANH_SACH_THANH_CONG = "Lấy danh sách thành công!";
    public final static String LAY_DANH_SACH_THAT_BAI = "Lấy danh sách thất bại!";

    public final static String XOA_THANH_CONG = "Xóa dữ liệu thành công!";
    public final static String XOA_THAT_BAI = "Xóa dữ liệu thất bại!";



}
