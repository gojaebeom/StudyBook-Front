package me.studybook.api.service.post;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.domain.PostTag;
import me.studybook.api.dto.res.ResPostDetailDto;
import me.studybook.api.dto.res.ResPostsDto;
import me.studybook.api.repo.post.PostRepo;
import me.studybook.api.repo.post.PostTagRepo;
import me.studybook.api.repo.post.mapper.PostDetailMapper;
import me.studybook.api.repo.post.mapper.PostsMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
@Slf4j
public class PostFindService {

    private PostRepo postRepo;
    private PostTagRepo postTagRepo;

    public List<ResPostsDto> getPosts() throws Exception {

        List<PostsMapper> _posts =  postRepo.findAllByOrderByIdDesc();
        List<PostTag> postTags = postTagRepo.findAll();

        return ResPostsDto.of(_posts, postTags);
    }

    public List<ResPostsDto> getPostsByUserId(Long id) throws Exception{

        List<PostsMapper> _posts = postRepo.findAllByUserId(id);
        List<PostTag> postTags = postTagRepo.findAll();

        return ResPostsDto.of(_posts, postTags);
    }

    public ResPostDetailDto getPostDetail(Long id) throws Exception {

        PostDetailMapper _postDetail =  postRepo.findOneById(id);

        return ResPostDetailDto.of(_postDetail);
    }
}
