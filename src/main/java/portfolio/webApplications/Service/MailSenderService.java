package portfolio.webApplications.Service;

import portfolio.webApplications.dto.MailParams;

//интерфейс с методом отправки сообщения
public interface MailSenderService{
   void send(MailParams mailParams);

}
