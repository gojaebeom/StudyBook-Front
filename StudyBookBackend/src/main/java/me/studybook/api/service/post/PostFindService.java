package me.studybook.api.service.post;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.dto.res.ResPostDetailDto;
import me.studybook.api.dto.res.ResPostsDto;
import me.studybook.api.repo.post.PostRepo;
import me.studybook.api.repo.post.PostTagRepo;
import me.studybook.api.repo.post.mapper.PostDetailMapper;
import me.studybook.api.repo.post.mapper.PostTagMapper;
import me.studybook.api.repo.post.mapper.PostsMapper;
import me.studybook.api.repo.post.mapper.TagMapper;
import me.studybook.api.service.time.TimeToNaturalTime;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
@Slf4j
public class PostFindService {

    private PostRepo postRepo;
    private PostTagRepo postTagRepo;

    public List<ResPostsDto> getPosts() throws Exception {

        List<PostsMapper> posts =  postRepo.findAllByOrderByIdDesc();

        List<ResPostsDto> resPostsDtos = new ArrayList<>();

        for(PostsMapper postsMapper: posts){
            List<String> tags = new ArrayList<>();
            for(PostTagMapper _tag: postsMapper.getPostTags()){
                String tag = _tag.getTag().getName();
                tags.add(tag);
            }

            ResPostsDto resPostsDto = ResPostsDto.builder()
                    .id(postsMapper.getId())
                    .title(postsMapper.getTitle())
                    .user(postsMapper.getUser())
                    .publishedAt(TimeToNaturalTime.formatTimeString(postsMapper.getUpdatedAt()))
                    .tags(tags)
                    .build();
            resPostsDtos.add(resPostsDto);
        }

        return resPostsDtos;
    }

    public ResPostDetailDto getPostDetail(Long id) throws Exception {

        PostDetailMapper postDetail =  postRepo.findOneById(id);

        List<String> tags = new ArrayList<>();
        for(PostTagMapper _tag: postDetail.getPostTags()){
            String tag = _tag.getTag().getName();
            tags.add(tag);
        }

        ResPostDetailDto postDetailDto = ResPostDetailDto.builder()
                .id(postDetail.getId())
                .title(postDetail.getTitle())
                .content(postDetail.getContent())
                .user(postDetail.getUser())
                .publishedAt(TimeToNaturalTime.formatTimeString(postDetail.getUpdatedAt()))
                .tags(tags)
                .build();

        return postDetailDto;
    }
}
