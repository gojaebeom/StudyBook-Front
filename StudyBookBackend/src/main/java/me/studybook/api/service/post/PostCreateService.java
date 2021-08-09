package me.studybook.api.service.post;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.domain.*;
import me.studybook.api.dto.req.ReqPostCreateDto;
import me.studybook.api.repo.post.PostCategoryRepo;
import me.studybook.api.repo.post.PostRepo;
import me.studybook.api.repo.post.PostTagRepo;
import me.studybook.api.repo.post.TagRepo;
import me.studybook.api.repo.user.UserRepo;
import me.studybook.api.repo.user.mapper.UserMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
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

        if(validateCategory(postCategory)){
            // 없는 카테고리
            log.info("새로운 카테고리 생성");
            createCategory(postCategory);
        }

        postRepo.save(post);
        tagRepo.saveAll(tags);
        postTagRepo.saveAll(postTags);
    }

    private void createCategory(PostCategory postCategory) throws Exception {
        postCategoryRepo.save(postCategory);
    }

    private Boolean validateCategory(PostCategory postCategory) throws Exception {
        System.out.println(postCategoryRepo.countByUserIdAndName(postCategory.getUser().getId(), postCategory.getName()));
        return postCategoryRepo.countByUserIdAndName(postCategory.getUser().getId(), postCategory.getName()) <= 0 ? true : false;
    }

}
