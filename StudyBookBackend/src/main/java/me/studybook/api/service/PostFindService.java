package me.studybook.api.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.domain.Post;
import me.studybook.api.domain.User;
import me.studybook.api.dto.res.ResPostsDto;
import me.studybook.api.repo.post.PostRepo;
import me.studybook.api.repo.user.UserRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
@Slf4j
public class PostFindService {

    private PostRepo postRepo;
    private UserRepo userRepo;

    public List<Post> find() throws Exception {

        return null; //postRepo.findPosts();
    }
}
