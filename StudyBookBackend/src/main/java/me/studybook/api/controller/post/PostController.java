package me.studybook.api.controller.post;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.studybook.api.dto.req.ReqPostCreateDto;
import me.studybook.api.dto.res.ResPostDetailDto;
import me.studybook.api.dto.res.ResPostsDto;
import me.studybook.api.repo.post.mapper.PostDetailMapper;
import me.studybook.api.repo.post.mapper.PostsMapper;
import me.studybook.api.service.post.PostFindService;
import me.studybook.api.service.post.PostCreateService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posts")
@Slf4j
@AllArgsConstructor
public class PostController {

    /**
     * select * from posts;
     * select * from post_categories;
     * select * from post_tags;
     * select * from tags;
     * select * from users;
     */

    private PostFindService postFindService;
    private PostCreateService postCreateService;


    @GetMapping("")
    public ResponseEntity index() throws Exception{
        List<ResPostsDto> posts =  postFindService.getPosts();

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "Get posts success");
        responses.put("posts", posts);
        responses.put("status", 200);
        return ResponseEntity.ok().body(responses);
    }

    @GetMapping("/{id}")
    public ResponseEntity show(@PathVariable Long id) throws Exception{

        ResPostDetailDto postDetail = postFindService.getPostDetail(id);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "Get posts success");
        responses.put("post", postDetail);
        responses.put("status", 200);
        return ResponseEntity.ok().body(responses);
    }

    @PostMapping("")
    public ResponseEntity create(ReqPostCreateDto postCreateDto) throws Exception {
        log.info("POST:CREATE");
        System.out.println(postCreateDto);

        postCreateService.create(postCreateDto);

        Map<String, Object> responses = new HashMap<>();
        responses.put("message", "Post create success!");
        responses.put("status", 200);
        return ResponseEntity.ok().body(responses);
    }
}
