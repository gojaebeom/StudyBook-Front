package me.studybook.api.repo.user;

import me.studybook.api.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepo extends JpaRepository<User, Long> {

    User findUserByUsername(String username) throws Exception;

    User findFirstByOrderByIdDesc();

    Long countByUsername(String username) throws Exception;

    User findUserById(Long userId);
}