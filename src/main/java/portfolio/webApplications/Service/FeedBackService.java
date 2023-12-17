package portfolio.webApplications.Service;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import portfolio.webApplications.dto.FeedBackDTO;
import portfolio.webApplications.model.FeedBack;
import portfolio.webApplications.repository.FeedBackRepo;

import java.util.List;

@Service
@AllArgsConstructor
public class FeedBackService {

@Autowired
    private FeedBackRepo feedBackRepo;
    //добавляем новые записи в Базу данных
public FeedBack create(FeedBackDTO dto){
    return feedBackRepo.save(FeedBack.builder()
                    .name(dto.getName())
                    .phone(dto.getPhone())
                    .email(dto.getEmail())
                    .id(dto.getId())
            .build());
}
    //отображение и получение данных в БД
public List<FeedBack> readAll(){
    //поиск конкретной записи или ресурса, подлежащего изменению, проверку новых данных
    return feedBackRepo.findAll();
}
public FeedBack update(FeedBack feedBack){
    //сохранение обновлений данных
    return feedBackRepo.save(feedBack);
}
public void delete(Long id){
    //удаление
    feedBackRepo.deleteById(id);
}


}
