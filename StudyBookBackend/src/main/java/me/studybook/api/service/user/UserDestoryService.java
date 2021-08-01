package me.studybook.api.service.user;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.repo.user.UserRepo;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import javax.transaction.Transactional;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class UserDestoryService {

    private UserRepo userRepo;

    public void destroy(Long userId) throws Exception {
        userRepo.remove(userId);
    }

}
