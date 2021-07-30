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

    public void destroy(Long userId, Long tokenUserId) throws Exception {
        /**
         * path로 넘어온 회원 아이디 + 토큰을 디코딩해서 나온 id가 일치하는지 확인
         * 일치하지 않으면 403 권한 에러, 일치하면 삭제 진행
         */
        isMatchedUser(userId, tokenUserId);

        userRepo.remove(userId);
    }

    private void isMatchedUser(Long userId, Long tokenUserId) throws AuthenticationException {
        if(userId != tokenUserId){
            log.info("일치하지 않은 유저");
            throw new AuthenticationException("PERMISSION_NOT_DEFINE");
        }
    }
}
