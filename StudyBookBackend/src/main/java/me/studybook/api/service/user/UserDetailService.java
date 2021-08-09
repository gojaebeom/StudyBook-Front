package me.studybook.api.service.user;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.domain.User;
import me.studybook.api.dto.res.ResPostsDto;
import me.studybook.api.dto.res.ResUserDetailDto;
import me.studybook.api.repo.post.PostRepo;
import me.studybook.api.repo.post.mapper.PostTagMapper;
import me.studybook.api.repo.post.mapper.PostsMapper;
import me.studybook.api.repo.user.UserRepo;
import me.studybook.api.repo.user.mapper.UserMapper;
import me.studybook.api.service.time.TimeToNaturalTime;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class UserDetailService {

    private UserRepo userRepo;
    private PostRepo postRepo;

    public ResUserDetailDto getUserDetail(Long id) throws Exception {
        return ResUserDetailDto.of(userRepo.findUserById(id));
    }
}
