package portfolio.webApplications.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import portfolio.webApplications.Service.MailSenderService;
import portfolio.webApplications.dto.FeedBackDTO;
import portfolio.webApplications.dto.MailParams;
import portfolio.webApplications.repository.FeedBackRepo;


@RequestMapping("/mail")
@RestController
public class MailController {
    private FeedBackRepo feedBackRepo;
    private final MailSenderService mailSenderService;

    public MailController(MailSenderService mailSenderService){
        this.mailSenderService = mailSenderService;
    }
    public ResponseEntity<?> sendEmailLetter(@RequestBody MailParams mailParams){
        mailSenderService.send(mailParams);
        return ResponseEntity.ok().build();
    }
    public ResponseEntity<?> sendInfoMail(@RequestBody FeedBackDTO dto){
        mailSenderService.send(dto);
        return ResponseEntity.ok().build();
    }


}
