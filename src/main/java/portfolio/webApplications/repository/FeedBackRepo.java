package portfolio.webApplications.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import portfolio.webApplications.model.FeedBack;


@Repository
public interface FeedBackRepo extends JpaRepository<FeedBack, Long> {

}
