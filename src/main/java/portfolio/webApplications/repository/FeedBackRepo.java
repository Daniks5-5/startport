package portfolio.webApplications.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import portfolio.webApplications.model.FeedBack;

public interface FeedBackRepo extends JpaRepository<FeedBack, Long> {

}
