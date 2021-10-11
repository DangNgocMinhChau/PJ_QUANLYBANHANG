package com.example.quanlybanhang.controllers.mail;

import com.example.quanlybanhang.utils.mail.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;


@Controller
public class MailController {
    @Autowired
    public JavaMailSender emailSender;

    @ResponseBody
    @RequestMapping("/sendSimpleEmail")
    public String sendSimpleEmail(@RequestParam String mail, @RequestParam String ten) throws MessagingException {
        MimeMessage message = emailSender.createMimeMessage();

        boolean multipart = true;

        MimeMessageHelper helper = new MimeMessageHelper(message, multipart, "UTF-8");

        helper.setTo(mail);
        helper.setSubject(Const.TITLE_MAIL_BAO_GIA);

        helper.setText(Const.MAIL_SEND_BAO_GIA(ten),true);

        String path1 = Const.PATH_1;

        // Attachment 1
        FileSystemResource file1 = new FileSystemResource(new File(path1));
        helper.addAttachment("Báo giá.pdf", file1);

        emailSender.send(message);

        return Const.GUI_MAI_THANH_CONG;
    }

    @ResponseBody
    @RequestMapping("/sendMailResetPass")
    public String sendMailResetPass(@RequestParam String mail, @RequestParam String userName, @RequestParam String pass,
                                    @RequestParam String cmnd, @RequestParam String fullname) throws MessagingException {

        MimeMessage message = emailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(message,true, "UTF-8");

        helper.setTo(mail);
        helper.setSubject(Const.TITLE_MAIL_RESET_PASS);
        helper.setText(Const.MAIL_SEND_RESET_PASS(fullname,userName,pass,cmnd)
                , true);

        emailSender.send(message);

        return Const.GUI_MAI_THANH_CONG;
    }

    @ResponseBody
    @RequestMapping("/sendMailDongGopYKien")
    public String sendMailDongGopYKien(@RequestParam String mail, @RequestParam String cauHoi, @RequestParam String cauTraLoi,
                                       @RequestParam String fullname) throws MessagingException {

        MimeMessage message = emailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(message,true, "UTF-8");

        helper.setTo(mail);
        helper.setSubject(Const.TITLE_MAIL_DONG_GOP_Y_KIEN);
        helper.setText(Const.MAIL_SEND_DONG_GOP_Y_KIEN(fullname,cauHoi,cauTraLoi)
                , true);

        emailSender.send(message);

        return Const.GUI_MAI_THANH_CONG;
    }
}
