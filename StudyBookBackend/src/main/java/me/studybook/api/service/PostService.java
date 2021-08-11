package me.studybook.api.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.domain.*;
import me.studybook.api.dto.req.ReqPostCreateDto;
import me.studybook.api.dto.res.ResPostDetailDto;
import me.studybook.api.dto.res.ResPostsDto;
import me.studybook.api.repo.post.PostRepo;
import me.studybook.api.repo.post.PostTagRepo;
import me.studybook.api.repo.post.TagRepo;
import me.studybook.api.repo.post.mapper.PostDetailMapper;
import me.studybook.api.repo.post.mapper.PostsMapper;
import me.studybook.api.repo.user.UserRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class PostService {

    private PostRepo postRepo;
    private TagRepo tagRepo;
    private UserRepo userRepo;
    private PostTagRepo postTagRepo;

    public List<ResPostsDto> index() throws Exception {

        List<PostsMapper> _posts =  postRepo.findAllByOrderByIdDesc();
        List<PostTag> postTags = postTagRepo.findAll();

        return ResPostsDto.of(_posts, postTags);
    }

    public List<ResPostsDto> index(Long id) throws Exception{

        List<PostsMapper> _posts = postRepo.findAllByUserId(id);
        List<PostTag> postTags = postTagRepo.findAll();

        return ResPostsDto.of(_posts, postTags);
    }

    public ResPostDetailDto show(Long id) throws Exception {

        PostDetailMapper _postDetail =  postRepo.findOneById(id);
        List<PostTag> postTags = postTagRepo.findByPostId(id);

        return ResPostDetailDto.of(_postDetail, postTags);
    }


    public void create(ReqPostCreateDto postCreateDto) throws Exception {
        Long userId = postCreateDto.getUserId();

        User user = userRepo.findUserById(userId);

//        PostCategory postCategory = postCreateDto.toPostCategory(user);
        Post post = postCreateDto.toPost(user);
        List<Tag> tags = postCreateDto.toTags();
        List<PostTag> postTags =  postCreateDto.toPostTags(post, tags);

//        if(validateCategory(postCategory)){
//            // 없는 카테고리
//            log.info("새로운 카테고리 생성");
//            createCategory(postCategory);
//        }

        postRepo.save(post);
        tagRepo.saveAll(tags);
        postTagRepo.saveAll(postTags);
    }

//    private void createCategory(PostCategory postCategory) throws Exception {
//        postCategoryRepo.save(postCategory);
//    }
//
//    private Boolean validateCategory(PostCategory postCategory) throws Exception {
//        System.out.println(postCategoryRepo.countByUserIdAndName(postCategory.getUser().getId(), postCategory.getName()));
//        return postCategoryRepo.countByUserIdAndName(postCategory.getUser().getId(), postCategory.getName()) <= 0 ? true : false;
//    }

}
