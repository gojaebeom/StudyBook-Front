package me.studybook.api.service.post;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.*;
import me.studybook.api.dto.req.ReqPostCreateDto;
import me.studybook.api.repo.post.PostCategoryRepo;
import me.studybook.api.repo.post.PostRepo;
import me.studybook.api.repo.post.PostTagRepo;
import me.studybook.api.repo.post.TagRepo;
import me.studybook.api.repo.user.UserRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class PostCreateService {

    private PostRepo postRepo;
    private TagRepo tagRepo;
    private UserRepo userRepo;
    private PostTagRepo postTagRepo;
    private PostCategoryRepo postCategoryRepo;


    public void create(ReqPostCreateDto postCreateDto) throws Exception {
        Long userId = postCreateDto.getUserId();

        User user = userRepo.findUserById(userId);

        PostCategory postCategory = postCreateDto.toPostCategory(user);
        Post post = postCreateDto.toPost(user);
        List<Tag> tags = postCreateDto.toTags();
        List<PostTag> postTags =  postCreateDto.toPostTags(post, tags);

        postCategoryRepo.create(postCategory);
        postRepo.create(post);
        tagRepo.create(tags);
        postTagRepo.create(postTags);
    }

}
