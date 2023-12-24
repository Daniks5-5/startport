package portfolio.webApplications.dto;

import lombok.Data;

import java.math.BigInteger;

//класс для передачи данных запросов
@Data
public class FeedBackDTO extends MailParams {

    private Long id;
    private String name;
    private BigInteger phone;
    private String email;



}
