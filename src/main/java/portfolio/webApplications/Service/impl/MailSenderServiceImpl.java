package portfolio.webApplications.Service.impl;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import portfolio.webApplications.Service.MailSenderService;
import portfolio.webApplications.dto.FeedBackDTO;
import portfolio.webApplications.dto.MailParams;
import portfolio.webApplications.repository.FeedBackRepo;

@Service
public class MailSenderServiceImpl implements MailSenderService {

    private FeedBackRepo feedBackRepo;
    private final JavaMailSender javaMailSender;
    //откуда будет отправлять сообщение, точнее с какой почты
    @Value("${spring.mail.username}")
    private String emailForm;


    public MailSenderServiceImpl(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;


        }
    @Override
    public void send(MailParams mailParams){
        var subject = "Информация о форме обратной связи";
        String messageBody  = getActivationMailBody(mailParams.getId());
        //на какую почту будет отправляться сообщение
        var emailTo = mailParams.getEmailTo();

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(emailForm);
        mailMessage.setTo(emailTo);
        mailMessage.setSubject(subject);
        mailMessage.setText(messageBody);

        javaMailSender.send(mailMessage);

    }

    private String getActivationMailBody(String id) {
        //само сообщение
        var msg = String.format("полная информация");
        return msg.replace("{id}",id);
    }
    private String getActivationMailBody(FeedBackDTO dto) {
        //само сообщение
        var msg = String.format("полная информация"+dto.getName()+dto.getEmail());
        return "успешно";
    }

}
