package portfolio.webApplications.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import portfolio.webApplications.Service.FeedBackService;
import portfolio.webApplications.dto.FeedBackDTO;
import portfolio.webApplications.model.FeedBack;

import java.util.List;


@RestController
@AllArgsConstructor
public class FeedBackController {

    private final FeedBackService feedBackService;

    @PostMapping("/main")
    public ResponseEntity<FeedBack> create(@RequestBody FeedBackDTO dto){
        //ответ сервера на запрос клиента
        return new ResponseEntity<>(feedBackService.create(dto), HttpStatus.OK);
    }
    @GetMapping("/main")
    public ResponseEntity<List<FeedBack>> readAll(){
        return new ResponseEntity<>(feedBackService.readAll(), HttpStatus.OK);
    }
    @PutMapping("/main")
    public ResponseEntity<FeedBack> update(@RequestBody FeedBack feedBack){
        return new ResponseEntity<>(feedBackService.update(feedBack), HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public HttpStatus delete(@PathVariable Long id){
        feedBackService.delete(id);
        return HttpStatus.OK;
    }

}
